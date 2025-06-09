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

const images:string[] = [

]

export default function Gallery() {

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
      <CarouselContent className="flex gap-2 items-center justify-center">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="hover:cursor-grab active:cursor-grabbing"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              height={300}
              width={300}
              className="object-cover rounded-lg items-center justify-center"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hover:cursor-pointer hidden sm:flex" />
      <CarouselNext className="hover:cursor-pointer hidden sm:flex" />
    </Carousel>
  );
}
