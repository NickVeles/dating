"use client";

import { useEffect, useState } from "react";
import { H4 } from "./utilities/typography";
import { Skeleton } from "./ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { ArrowSquareOut, WarningCircle } from "phosphor-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SpotifyHighlightsProps {
  className?: string;
}

interface Track {
  name: string;
  artists: string;
  albumArt: string;
  url: string;
}

export default function SpotifyHighlights({
  className,
}: SpotifyHighlightsProps) {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrack() {
      try {
        const res = await fetch("/api/spotify/recent");
        const data = await res.json();
        if (res.ok && data.name) {
          setTrack(data);
        } else {
          setError("No track playing or recently played.");
        }
      } catch (e) {
        setError("Error fetching track.");
      }
      setLoading(false);
    }
    fetchTrack();
  }, []);

  return (
    <div className={cn("w-full", className)}>
      <H4 className="font-serif dyslexic:font-dyslexic text-center mb-2">
        Spotify
      </H4>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* //TODO - adjust skeleton size */}
        {loading && (
          <Skeleton className="flex items-center p-2 gap-4 rounded-lg border border-black/20 dark:border-white/20">
            <Skeleton className="h-20 w-20 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </Skeleton>
        )}
        {error && (
          <Alert variant="destructive">
            <WarningCircle />
            <AlertTitle>Error while fetching the recent track.</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {track && (
          <Link
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 gap-4 rounded-lg border"
          >
            <Image
              src={track.albumArt}
              alt={track.name}
              width={200}
              height={200}
              className="w-20 h-20 rounded"
            />
            <div className="mr-2">
              <h5 className="text-xl font-bold hover:underline">
                <span className="flex font-serif dyslexic:font-dyslexic">
                  {track.name}
                  <ArrowSquareOut className="inline align-text-top size-4" />
                </span>
              </h5>
              <p className="text-gray-600 dark:text-gray-400">
                {track.artists}
              </p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
