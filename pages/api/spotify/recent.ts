import type { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} = process.env;

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

interface SpotifyTrack {
  item: {
    name: string;
    artists: { name: string }[];
    album: { images: { url: string }[] };
    external_urls: { spotify: string };
  };
}

async function getAccessToken(): Promise<string> {
  const credentials = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const res = await fetch(
    'https://accounts.spotify.com/api/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${credentials}`,
      },
      body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    }
  );

  if (!res.ok) {
    throw new Error('Failed to refresh Spotify token');
  }

  const data: SpotifyTokenResponse = await res.json();
  return data.access_token;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const accessToken = await getAccessToken();
    const trackRes = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!trackRes.ok) {
      return res
        .status(trackRes.status)
        .json({ error: 'Failed to fetch recent track' });
    }

    const data: { items: SpotifyTrack[] } = await trackRes.json();
    const latest = data.items[0]?.item;

    res.status(200).json({
      name: latest.name,
      artists: latest.artists.map(a => a.name).join(', '),
      albumArt: latest.album.images[0]?.url,
      url: latest.external_urls.spotify,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}