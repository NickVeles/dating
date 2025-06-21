import { cn } from "@/lib/utils";
import Image from "next/image";

type ImageContainerProps = {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
};

export default function ImageContainer({
  src,
  alt,
  className,
  onClick,
}: ImageContainerProps) {
  return (
    <div className={cn("w-full flex justify-center items-center mx-2 my-6", className)}>
      <Image
        src={src}
        alt={alt || "Image"}
        width={1000}
        height={1000}
        className={cn(
          `object-cover w-full h-auto rounded-lg`,
          onClick ? " hover:cursor-pointer" : ""
        )}
        onClick={onClick}
      />
    </div>
  );
}
