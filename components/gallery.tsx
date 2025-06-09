"use client";

// TODO: Fix carousel item style and maybe use CldImage for better image handling

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageResource = {
  id: string;
  url: string;
  alt: string;
};

export default function Gallery() {
  const [images, setImages] = useState<ImageResource[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        console.log("Fetched images:", data);
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((img) => (
          <CarouselItem
            key={img.id}
            className="hover:cursor-grab active:cursor-grabbing"
          >
            <Image
              src={img.url}
              alt={img.alt}
              width={500}
              height={500}
              className="object-cover rounded-lg items-center justify-center"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hover:cursor-pointer" />
      <CarouselNext className="hover:cursor-pointer" />
    </Carousel>
  );
}
