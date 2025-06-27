import Image from "next/image";
import { H4 } from "./typography";

type BannerProps = {
  children?: React.ReactNode;
  url: string;
  alt?: string;
  icon: string;
};

export default function Banner({ children, url, alt, icon }: BannerProps) {
  return (
    <div
      className="rounded-lg py-4"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col justify-center items-center my-2 py-2 text-white bg-gray-800/80 shadow">
        <Image src={icon} width={32} height={32} alt={alt || "Banner icon"} className="invert" />
        {children && (
          <H4 className="font-serif dyslexic:font-dyslexic text-center">
            {children}
          </H4>
        )}
      </div>
    </div>
  );
}
