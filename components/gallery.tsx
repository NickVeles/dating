"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef, useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Eye } from "phosphor-react";

type ImageResource = {
  id: string;
  url: string;
  alt: string;
};

const images: string[] = Array.from(
  { length: 7 },
  (_, i) => `/gallery/00${i + 1}.jpg`
);

export default function Gallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const autoplayRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  );

  // Reset autoplay timer on any interaction
  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      autoplayRef.current.reset();
    }
  }, []);

  useEffect(() => {
    if (!api) return;

    // Set initial current slide
    setCurrent(api.selectedScrollSnap());

    // Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Reset autoplay on user interactions
    api.on("pointerDown", resetAutoplay);
    api.on("scroll", resetAutoplay);
  }, [api, resetAutoplay]);

  return (
    <div className="relative w-full sm:w-[80%]">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          align: "center",
        }}
        plugins={[autoplayRef.current]}
      >
        <CarouselContent className="-ml-8">
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center pl-8 basis-auto"
            >
              <div
                onClick={() => setRevealed(true)}
                className={cn(
                  "relative h-[45vh] aspect-[3/5] overflow-hidden rounded-lg shadow transition-all duration-500 ease-out",
                  revealed
                    ? "hover:cursor-grab active:cursor-grabbing"
                    : "hover:cursor-pointer",
                  current === index
                    ? "scale-100 opacity-100"
                    : "scale-75 opacity-0"
                )}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  className={cn(
                    "object-cover rounded-lg transition-all ease-out",
                    revealed ? "blue-0" : "blur-sm brightness-75"
                  )}
                  sizes="(max-width: 640px) 100vw, 600px"
                  priority={index === 0}
                />
                {!revealed && (
                  <div className="absolute object-cover rounded-lg inset-0 flex flex-col items-center justify-center text-white text-2xl font-semibold bg-black/30 pb-20 transition-all ease-out">
                    <Eye className="size-20" />
                    CLICK TO REVEAL
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="hover:cursor-pointer hidden sm:flex z-20"
          onClick={(e) => {
            e.stopPropagation();
            resetAutoplay();
          }}
        />
        <CarouselNext
          className="hover:cursor-pointer hidden sm:flex z-20"
          onClick={(e) => {
            e.stopPropagation();
            resetAutoplay();
          }}
        />
      </Carousel>
    </div>
  );
}
