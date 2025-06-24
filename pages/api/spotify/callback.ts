// pages/api/spotify/callback.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REDIRECT_URI,
} = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code as string;
  if (!code) {
    return res.status(400).send('Missing code');
  }

  const creds = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const body = querystring.stringify({
    grant_type: 'authorization_code',
    code,
    redirect_uri: SPOTIFY_REDIRECT_URI,
  });

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${creds}`,
    },
    body,
  });

  if (!tokenRes.ok) {
    const err = await tokenRes.text();
    return res.status(tokenRes.status).send(err);
  }

  const { access_token, refresh_token } = await tokenRes.json();

  // TODO: persist `refresh_token` somewhere secure!
  console.log('Got refresh token:', refresh_token);

  res.status(200).json({ access_token, refresh_token });
}
