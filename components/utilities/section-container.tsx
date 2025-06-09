import { cn } from "@/lib/utils";

type SectionContainerProps = {
  accented?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function SectionContainer({
  accented,
  className = "",
  children,
}: SectionContainerProps) {
  return (
    <div className={`w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] ${accented ? 'bg-accent' : ''}`}>
      <div className={cn("sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl mx-auto w-full px-[1rem] py-[2rem] flex flex-col items-center justify-center", className)}>
        {children}
      </div>
    </div>
  );
}
