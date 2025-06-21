import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type ImageContainerProps = {
  src: string;
  alt?: string;
  className?: string;
};

export default function ImageContainer({
  src,
  alt,
  className,
}: ImageContainerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            "w-full h-full flex justify-center items-center mx-2 my-6",
            className
          )}
        >
          <Image
            src={src}
            alt={alt || "Image"}
            width={500}
            height={500}
            className="w-full object-cover rounded-lg hover:cursor-pointer max-h-[440px]"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="w-screen h-screen max-w-none rounded-none gap-0 pt-14 pb-0 px-0">
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
