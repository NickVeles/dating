"use client";

type TitleContainerProps = {
  Icon?: React.ElementType;
  children?: React.ReactNode;
};

export default function TitleContainer({
  Icon,
  children,
}: TitleContainerProps) {
  return (
    <div className="flex flex-col gap-2 sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl mx-auto w-full p-4 items-center justify-center">
      {Icon && <Icon className="w-24 h-24 mx-auto text-primary" />}
      <h1 className="text-4xl text-center font-bold font-serif dyslexic:font-[family-name:var(--font-dyslexic)]">
        {children}
      </h1>
    </div>
  );
}
