"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Badge } from "../ui/badge";
import { CornersOutIcon } from "@phosphor-icons/react";
import { AspectRatio } from "../ui/aspect-ratio";

type ImageProps = {
  src: string;
  alt?: string;
  aspectRatio?: number;
  className?: string;
};

export default function ImageContainer({
  src,
  alt,
  aspectRatio,
  className,
}: ImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AspectRatio ratio={aspectRatio ?? 16 / 9}
          className={cn(
            "w-full h-full relative justify-center items-center px-2 py-6 hover:cursor-pointer",
            className
          )}
        >
          <Image
            src={src}
            alt={alt || "Image"}
            fill
            className="object-cover rounded-lg shadow dark:shadow-white"
          />
          <div className="absolute bottom-1 right-1">
            <Badge variant="secondary" className="p-1">
              <CornersOutIcon className="inline align-text-top" />
            </Badge>
          </div>
        </AspectRatio>
      </DialogTrigger>
      <DialogContent className="w-screen h-screen max-w-none rounded-none gap-0 pt-14 pb-0 px-0 bg-black text-white">
        <DialogTitle className="sr-only">{alt || "Image"}</DialogTitle>
        <div className="flex justify-center items-center w-full h-full">
          <TransformWrapper minScale={0.75}>
            <TransformComponent
              wrapperStyle={{ height: "100%", width: "100%" }}
            >
              <Image
                src={src}
                width={2000}
                height={2000}
                alt={alt || "Zoomable"}
                className="max-w-full max-h-[94vh] object-contain"
                style={{ display: "block", margin: "0 auto" }}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
}
