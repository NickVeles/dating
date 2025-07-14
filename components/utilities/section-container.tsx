import { cn } from "@/lib/utils";
import React from "react";

type SectionContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  accented?: boolean;
};

const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ accented, className = "", children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]",
          accented ? "bg-accent" : ""
        )}
        {...rest}
      >
        <div
          className={cn(
            "sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl mx-auto w-full px-4 py-8 flex flex-col items-center justify-center",
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

SectionContainer.displayName = "SectionContainer";
export default SectionContainer;