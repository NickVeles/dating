"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Badge } from "../ui/badge";
import { CornersOut } from "phosphor-react";

type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

export default function ImageContainer({
  src,
  alt,
  className,
}: ImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            "w-full h-full relative justify-center items-center px-2 py-6 hover:cursor-pointer",
            className
          )}
        >
          <Image
            src={src}
            alt={alt || "Image"}
            width={1000}
            height={1000}
            className="object-cover rounded-lg max-h-[440px] shadow dark:shadow-white"
          />
          <div className="absolute bottom-7 right-3">
            <Badge variant="secondary" className="p-1">
              <CornersOut className="inline align-text-top" />
            </Badge>
          </div>
        </div>
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
