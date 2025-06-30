"use client";

import { useEffect, useState } from "react";
import { H4 } from "./utilities/typography";
import { Skeleton } from "./ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import {
  ArrowSquareOut,
  WarningCircle,
  ClockCounterClockwise,
  MusicNotes,
} from "phosphor-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface SpotifyHighlightsProps {
  className?: string;
}

interface Track {
  name: string;
  artists: string;
  albumArt: string;
  url: string;
  isCurrentlyPlaying: boolean;
}

const playlists = [
  {
    name: "MyRammsteinPlaylist",
    url: "https://open.spotify.com/playlist/04FrUFPt3kAcpaTErp7iHN",
    image: "https://i.scdn.co/image/ab67706c0000da84e1920d54fc4b14577c37338c",
  },
  {
    name: "💀",
    url: "https://open.spotify.com/playlist/433kjfAZMGMVBAzPnUAdM5",
    image: "https://i.scdn.co/image/ab67706c0000d72cae2151a1c1ff82c9d0a5c115",
  },
  {
    name: "ALL GHOST SONGS IN ORDER",
    url: "https://open.spotify.com/playlist/78j8dIcBHjwQc8ONojijo2",
    image: "https://i.scdn.co/image/ab67706c0000d72c185a04fcc191967bd72265e9",
  },
  {
    name: "Marilyn Manson: The Complete Collection",
    url: "https://open.spotify.com/playlist/2acOrxOZ4Aea8LFFbSmF5c",
    image: "https://i.scdn.co/image/ab67706c0000d72c8853e2f828aa72b8c6ebd83b",
  },
  {
    name: "The Tale of a Cruel World (Calamity Original Game Soundtrack)",
    url: "https://open.spotify.com/album/3kfUrufomJ7gHkBWWUewnX",
    image: "https://i.scdn.co/image/ab67616d00001e02dcb364df5080fead36fe203f",
  },
  {
    name: "MyClassical",
    url: "https://open.spotify.com/playlist/6j2ZVhZAf8gmjTGkZCxjBd",
    image: "https://i.scdn.co/image/ab67706c0000da849fa285bcd91bc52cb48b4635",
  },
  {
    name: "Kocham Cię ♥",
    url: "https://soundcloud.com/nickveles/sets/kochamcie",
    image:
      "https://i1.sndcdn.com/artworks-78bWCHl1dHZx0lFv-5yrQHg-t1080x1080.jpg",
  },
];

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
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      }
      setLoading(false);
    }
    fetchTrack();
  }, []);

  return (
    <div className={cn("w-full", className)}>
      <H4 className="font-serif dyslexic:font-dyslexic text-center mb-2">
        My Music
      </H4>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {loading && (
          <div className="flex items-center p-2 gap-4 rounded-lg border border-black/20 dark:border-white/20">
            <Skeleton className="h-24 w-24 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-[228px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        )}
        {error && (
          <Alert variant="destructive">
            <WarningCircle />
            <AlertTitle>Error while fetching the recent track.</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {track && (
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 gap-4 rounded-lg border border-black/20 dark:border-white/20"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={track.albumArt}
                    alt={track.name}
                    width={200}
                    height={200}
                    className="min-w-24 min-h-24 rounded"
                  />
                  <div className="absolute inset-0 flex justify-end items-end bottom-1 right-1">
                    <Badge variant="secondary" className="p-1">
                      {track.isCurrentlyPlaying ? (
                        <MusicNotes className="size-5" />
                      ) : (
                        <ClockCounterClockwise className="size-5" />
                      )}
                    </Badge>
                  </div>
                </div>
                <div className="text-start">
                  <h5 className="text-xl font-bold hover:underline mr-2">
                    <span className="inline font-serif dyslexic:font-dyslexic">
                      {track.name}
                      <ArrowSquareOut className="inline align-text-top size-4" />
                    </span>
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    {track.artists}
                  </p>
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              {track.isCurrentlyPlaying
                ? "Currently playing"
                : "Recently played"}
            </TooltipContent>
          </Tooltip>
        )}
        {playlists.map((playlist) => (
          <Tooltip key={playlist.name}>
            <TooltipTrigger>
              <Link
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 gap-4 rounded-lg border border-black/20 dark:border-white/20"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={playlist.image}
                    alt={playlist.name}
                    width={200}
                    height={200}
                    className="w-24 h-24 rounded"
                  />
                  <div className="absolute inset-0 flex justify-end items-end bottom-1 right-1">
                    <Badge variant="secondary" className="p-1">
                      <ArrowSquareOut className="size-5" />
                    </Badge>
                  </div>
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent>{playlist.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
