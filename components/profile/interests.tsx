import Image from "next/image";
import { H4 } from "../utilities/typography";
import GamesList from "./games-list";

const hobbies = [
  {
    icon: "book-open-text",
    title: "Reading & Writing",
    subtitle: "Philosophy, Psychology, Non-fiction, Novels",
  },
  {
    icon: "joystick",
    title: "Gaming",
    subtitle: "CO-OP, Horror, RPG, and...",
    other: <GamesList />,
  },
  {
    icon: "film-slate",
    title: "Movies & Shows",
  },
  {
    icon: "code",
    title: "Programming",
  },
  {
    icon: "barbell",
    title: "Working out",
  },
];

export default function Interests() {
  return (
    <div className="flex flex-col gap-8 [&>*]:w-[50%] w-full ">
      {hobbies.map((hobby) => (
        <div className="w-full even:self-end" key={hobby.title}>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/icons/${hobby.icon}.svg`}
              width={32}
              height={32}
              alt={hobby.title}
            />
            <H4 className="font-serif dyslexic:font-dyslexic text-center">
              {hobby.title}
            </H4>
          </div>
          <p className="font-sans dyslexic:font-dyslexic dyslexic:text-xs text-center">
            {hobby.subtitle}
          </p>
          {hobby.other}
        </div>
      ))}
    </div>
  );
}
