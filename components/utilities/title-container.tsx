type TitleContainerProps = {
  Icon?: React.ElementType;
  children: React.ReactNode;
};

export default function TitleContainer({
  Icon,
  children,
}: TitleContainerProps) {
  return (
    <div className="flex flex-col gap-2 mt-[5rem]">
      {Icon && <Icon className="w-24 h-24 mx-auto text-primary" />}
      <h1 className="text-4xl text-center font-bold font-serif">{children}</h1>
    </div>
  );
}
