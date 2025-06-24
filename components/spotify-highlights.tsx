'use client';

import { useEffect, useState } from 'react';

interface Track {
  name: string;
  artists: string;
  albumArt: string;
  url: string;
}

export default function SpotifyHighlights() {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrack() {
      try {
        const res = await fetch('/api/spotify/recent');
        const data = await res.json();
        if (res.ok && data.name) {
          setTrack(data);
        } else {
          setError('No recent track found.');
        }
      } catch (e) {
        setError('Error fetching track.');
      }
      setLoading(false);
    }
    fetchTrack();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!track) return <p>No recent track found.</p>;

  return (
    <div className="p-4 max-w-sm bg-white rounded-2xl shadow">
      <a href={track.url} target="_blank" rel="noopener noreferrer">
        <img src={track.albumArt} alt={track.name} className="rounded-lg" />
        <h3 className="mt-2 text-xl font-bold">{track.name}</h3>
        <p className="text-gray-600">{track.artists}</p>
      </a>
    </div>
  );
}
