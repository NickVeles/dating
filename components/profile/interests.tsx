import GamesList from "./games-list";
import Banner from "../utilities/banner";

// Icons
import BookOpenTextIcon from "@/assets/icons/book-open-text.svg"
import FilmSlateIcon from "@/assets/icons/film-slate.svg"
import CodeIcon from "@/assets/icons/code.svg"
import BarbellIcon from "@/assets/icons/barbell.svg"
import JoystickIcon from "@/assets/icons/joystick.svg"

const hobbies = [
  {
    icon: BookOpenTextIcon,
    banner:
      "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Reading & Writing",
    items: ["Philosophy", "Psychology", "Non-fiction", "Novels"],
  },
  {
    icon: FilmSlateIcon,
    banner:
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Movies & Shows",
    items: ["Animation", "Horror", "Comedy", "Romance"],
  },
  {
    icon: CodeIcon,
    banner:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Programming",
    items: ["Python", "TypeScript", "C#", "C++", "PHP"],
  },
  {
    icon: BarbellIcon,
    banner:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Working out",
    items: ["Push", "Pull", "Legs"],
  },
  {
    icon: JoystickIcon,
    banner:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gaming",
    items: ["CO-OP", "Horror", "RPG"],
    other: <GamesList />,
  },
];

export default function Interests() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {hobbies.map((hobby, idx) => (
        <div
          className="flex flex-col md:flex-row md:even:flex-row-reverse [&>*]:w-full p-2 border rounded-lg border-black/20 dark:border-white/20 gap-4"
          key={hobby.title}
        >
          <Banner
            url={hobby.banner}
            alt={`hobby ${idx}`}
            icon={hobby.icon}
            className="rounded shadow-none"
          >
            {hobby.title}
          </Banner>

          <div className="md:mt-0 font-serif dyslexic:font-dyslexic flex justify-center text-center w-full text-gray-700 dark:text-gray-300">
            <span className="block md:hidden">
              {hobby.items.map((item, idx) => (
                <span key={idx}>
                  {item}
                  {idx < hobby.items.length - 1 && ", "}
                </span>
              ))}
              {hobby.other}
            </span>
            <ul className="hidden md:flex flex-col justify-center items-center gap-1">
              {hobby.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
              {hobby.other && <li key="extra">{hobby.other}</li>}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
