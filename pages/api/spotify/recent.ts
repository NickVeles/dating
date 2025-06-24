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

interface SpotifyTrackData {
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
}

interface SpotifyCurrentlyPlaying {
  item: SpotifyTrackData;
  is_playing: boolean;
}

interface SpotifyRecentItem {
  track: SpotifyTrackData;
}

async function getAccessToken(): Promise<string> {
  const credentials = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${credentials}`,
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!res.ok) {
    console.error('Token refresh failed:', await res.text());
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
    let isCurrentlyPlaying = true;
    const accessToken = await getAccessToken();

    // Try currently playing
    const currRes = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    let track: SpotifyTrackData | null = null;

    if (currRes.ok && currRes.status === 200) {
      const current: SpotifyCurrentlyPlaying = await currRes.json();
      // Only use if a track is playing
      if (current.is_playing && current.item) {
        track = current.item;
      }
    }

    // Fallback to recently played
    if (!track) {
      const recentRes = await fetch(
        'https://api.spotify.com/v1/me/player/recently-played?limit=1',
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      if (!recentRes.ok) {
        console.error('Recent track fetch failed:', await recentRes.text());
        return res
          .status(recentRes.status)
          .json({ error: 'Failed to fetch recent track' });
      }

      const recentData: { items: SpotifyRecentItem[] } = await recentRes.json();
      track = recentData.items[0]?.track || null;
      isCurrentlyPlaying = false;
    }

    if (!track) {
      return res.status(200).json({});
    }

    // Return unified format
    res.status(200).json({
      name: track.name,
      artists: track.artists.map(a => a.name).join(', '),
      albumArt: track.album.images[0]?.url,
      url: track.external_urls.spotify,
      isCurrentlyPlaying: isCurrentlyPlaying,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}