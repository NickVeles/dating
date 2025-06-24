"use client";

import { useEffect, useRef, useState } from "react";
import { H4 } from "./utilities/typography";
import { Skeleton } from "./ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { ArrowSquareOut, WarningCircle } from "phosphor-react";
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
    image: "https://i.scdn.co/image/ab67706c0000da8485f93cfe2b8dde8633c3de98",
  },
];

export default function SpotifyHighlights({
  className,
}: SpotifyHighlightsProps) {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Refs and state for width calculation
  const playlistItemRef = useRef<HTMLAnchorElement>(null);
  const trackRef = useRef<HTMLAnchorElement>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const [trackWidth, setTrackWidth] = useState<number>(0);
  const [desiredTrackWidth, setDesiredTrackWidth] = useState<
    number | undefined
  >();

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

  // Measure playlist item width once
  useEffect(() => {
    const el = playlistItemRef.current;
    if (el) {
      setItemWidth(el.offsetWidth);
    }
  }, []);

  // Once track link and item width are measured, compute desired width
  useEffect(() => {
    const el = trackRef.current;
    if (el && itemWidth) {
      const tw = el.offsetWidth;
      setTrackWidth(tw);
      const cols = Math.ceil((tw + 8) / (itemWidth + 8));
      setDesiredTrackWidth(cols * itemWidth + 8 * (cols - 1));
    }
  }, [track, itemWidth]);

  return (
    <div className={cn("w-full", className)}>
      <H4 className="font-serif dyslexic:font-dyslexic text-center mb-2">
        My Spotify
      </H4>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {loading && (
          <div className="flex items-center p-2 gap-4 rounded-lg border border-black/20 dark:border-white/20">
            <Skeleton className="h-24 w-24 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
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
          <Link
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={trackRef}
            style={desiredTrackWidth ? { width: desiredTrackWidth } : undefined}
            className="flex items-center p-2 gap-4 rounded-lg border border-black/20 dark:border-white/20"
          >
            <div className="relative w-24 h-24">
              <Image
                src={track.albumArt}
                alt={track.name}
                width={200}
                height={200}
                className="w-24 h-24 rounded"
              />
              <div className="absolute inset-0 flex justify-end items-end bottom-1 right-1">
                <Badge
                  variant="secondary"
                  className="mt-1 text-xs uppercase font-mono dyslexic:font-dyslexic-mono text-gray-600 dark:text-gray-400"
                >
                  {track.isCurrentlyPlaying ? "current" : "recent"}
                </Badge>
              </div>
            </div>
            <div className="mr-2">
              <h5 className="text-xl font-bold hover:underline">
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
        )}
        {playlists.map((playlist, idx) => (
          <Tooltip key={playlist.name}>
            <TooltipTrigger>
              <Link
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={idx === 0 ? playlistItemRef : undefined}
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
                      <ArrowSquareOut className="inline align-text-top size-5" />
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
