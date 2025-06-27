import Image from "next/image";
import { H4 } from "./typography";
import { cn } from "@/lib/utils";

type BannerProps = {
  children?: React.ReactNode;
  url: string;
  alt?: string;
  icon: string;
  className?: string;
};

export default function Banner({ children, url, alt, icon, className }: BannerProps) {
  return (
    <div
      className={cn("rounded-lg py-4", className)}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col justify-center items-center my-2 py-2 text-white bg-gray-800/80 shadow">
        <Image src={icon} width={32} height={32} alt={alt || "Banner icon"} className="invert" />
        {children && (
          <H4 className="font-sans dyslexic:font-dyslexic text-center">
            {children}
          </H4>
        )}
      </div>
    </div>
  );
}
