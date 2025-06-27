import Image from "next/image";
import { H4 } from "../utilities/typography";
import GamesList from "./games-list";

const hobbies = [
  {
    icon: "book-open-text",
    banner:
      "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Reading & Writing",
    subtitle: "Philosophy, Psychology, Non-fiction, Novels",
  },
  {
    icon: "film-slate",
    banner:
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Movies & Shows",
    subtitle: "Animation, Horror, Comedy, Romance",
  },
  {
    icon: "code",
    banner:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Programming",
    subtitle: "Python, TypeScript, C#, C++, PHP",
  },
  {
    icon: "barbell",
    banner:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Working out",
    subtitle: "Push, Pull, Legs",
  },
  {
    icon: "joystick",
    banner:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gaming",
    subtitle: "CO-OP, Horror, RPG, and...",
    content: <GamesList />,
  },
];

export default function Interests() {
  return (
    <div className="flex flex-col gap-12 w-full ">
      {hobbies.map((hobby) => (
        <div className="w-full" key={hobby.title}>
          <div
            className="rounded-lg py-4"
            style={{
              backgroundImage: `url(${hobby.banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full flex flex-col justify-center items-center my-2 py-2 bg-accent/75 shadow">
              <Image
                src={`/icons/${hobby.icon}.svg`}
                width={32}
                height={32}
                alt={hobby.title}
                className="dark:invert"
              />
              <H4 className="font-serif dyslexic:font-dyslexic text-center">
                {hobby.title}
              </H4>
            </div>
          </div>
          <p className="mt-4 font-sans dyslexic:font-dyslexic text-center text-gray-700 dark:text-gray-300">
            {hobby.subtitle}
          </p>
          {hobby.content}
        </div>
      ))}
    </div>
  );
}
