import React from "react";

type SectionContainerProps = {
  accented?: boolean;
  children: React.ReactNode;
};

export default function SectionContainer({
  accented,
  children,
}: SectionContainerProps) {
  const innerClass =
    "sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl mx-auto w-full px-[1rem] py-[2rem] flex flex-col items-center justify-center";

  if (accented) {
    return (
      <div className="w-screen bg-accent relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
        <div className={innerClass}>{children}</div>
      </div>
    );
  }
  return <div className={innerClass}>{children}</div>;
}
