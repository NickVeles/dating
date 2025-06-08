"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionContainer from "@/components/utilities/section-container";
import TitleContainer from "@/components/utilities/title-container";
import { useTheme } from "next-themes";
import Image from "next/image";
import { UserCircle } from "phosphor-react";
import Autoplay from "embla-carousel-autoplay";

const images: string[] = [];

export default function AboutMe() {
  const { theme } = useTheme();

  // Ensure theme is loaded before rendering
  if (typeof theme === "undefined") return null;

  return (
    <main className="flex flex-col flex-1 gap-8">
      <TitleContainer Icon={UserCircle}>About Me</TitleContainer>
      <SectionContainer>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </SectionContainer>
      <SectionContainer accented>
        <p className="text-lg text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quo
          reiciendis suscipit voluptates tenetur ab soluta quibusdam inventore,
          atque quas nulla blanditiis eligendi temporibus maxime? Possimus
          architecto quam fuga delectus.
        </p>
        <p className="text-lg text-justify mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          inventore magnam, nam accusantium maxime sequi odio repellendus, at
          cumque veniam non voluptates error, assumenda ea! Reiciendis explicabo
          sunt recusandae quisquam!
        </p>
      </SectionContainer>
    </main>
  );
}
