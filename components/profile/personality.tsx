import Banner from "../utilities/banner";
import { Italic } from "../utilities/typography";

// Icons
import CircleHalfFillIcon from "@/assets/icons/circle-half-fill.svg"
import HandHeartIcon from "@/assets/icons/hand-heart.svg"
import FeatherIcon from "@/assets/icons/feather.svg"
import CactusIcon from "@/assets/icons/cactus.svg"
import TargetIcon from "@/assets/icons/target.svg"
import ChatsCircleIcon from "@/assets/icons/chats-circle.svg"
import RocketLaunchIcon from "@/assets/icons/rocket-launch.svg"
import InfinityIcon from "@/assets/icons/infinity.svg"

const traits = [
  {
    title: "Ambivert",
    banner:
      "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: CircleHalfFillIcon,
    content: (
      <span>
        More on the introverted site, but my social battery is big enough to
        handle whatever social situation you throw at me.
      </span>
    ),
  },
  {
    title: "Kind",
    banner:
      "https://images.unsplash.com/photo-1535911062114-764574491173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: HandHeartIcon,
    content: (
      <span>
        Kinda rare these days I'd say. Complex psychology besides, why can't
        more people simply make that their habit? Patience and respect are my
        middle names.
      </span>
    ),
  },
  {
    title: "Considerate",
    banner:
      "https://images.unsplash.com/photo-1517346665566-17b938c7f3ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: FeatherIcon,
    content: (
      <span>
        Empathy is highly underrated. There's no such thing as{" "}
        <Italic>enough</Italic> people who think about you! Keep this in mind,
        champ!
      </span>
    ),
  },
  {
    title: "Absurd/Silly Humor",
    banner:
      "https://uploads0.wikiart.org/00475/images/salvador-dali/w1siziisijm4njq3mcjdlfsiccisimnvbnzlcnqilcitcxvhbgl0esa5mcatcmvzaxplidiwmdb4mjawmfx1mdazzsjdxq.jpg",
    icon: CactusIcon,
    content: (
      <span>
        I'm a pretty organized man, so you bet I love laughing from everything
        that breaks the monotony. Absurdity is goated and Camus is my king.
      </span>
    ),
  },
  {
    title: "Straightforward",
    banner:
      "https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: TargetIcon,
    content: (
      <span>
        Not blunt at all, but valuing honesty and clarity. People usually know
        where they stand with me&mdash;I don’t believe in playing games or
        sugarcoating things unnecessarily.
      </span>
    ),
  },
  {
    title: "Talkative",
    banner:
      "https://images.unsplash.com/photo-1546795708-c962dc089798?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: ChatsCircleIcon,
    content: (
      <span>
        Fun fact: my old surname loosely meant <Italic>"Yapper,"</Italic> and it
        still fits&mdash;I’m the guy who can turn any topic into an hour‑long
        conversation. (Yes, I changed my name)
      </span>
    ),
  },
  {
    title: "Ambitious",
    banner:
      "https://images.unsplash.com/photo-1525381846010-6463f02f61ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: RocketLaunchIcon,
    content: (
      <span>
        Ambitious enough to dream big, but not enough to go blind with it. I was
        born with a belief to do the most out of my life, and I'm not stopping a
        single bit.
      </span>
    ),
  },
  {
    title: "Autism Spectrum Disorder",
    banner:
      "https://images.unsplash.com/photo-1620230874645-0d85522b20f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: InfinityIcon,
    content: (
      <span>
        Diagnosed at 17, being on the autism spectrum has gifted me with strong
        analytical skills&mdash;and since my diagnosis, what used to trigger
        anxiety has become a driver for self‑awareness and personal growth.
      </span>
    ),
  },
];

export default function Personality() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {traits.map((trait, idx) => (
        <div
          className="flex flex-col md:flex-row md:even:flex-row-reverse [&>*]:w-full p-2 border rounded-lg border-black/20 dark:border-white/20 gap-3"
          key={trait.title}
        >
          <Banner
            url={trait.banner}
            alt={`trait ${idx}`}
            icon={trait.icon}
            className="rounded shadow-none"
          >
            {trait.title}
          </Banner>
          <p className="flex py-2 justify-center items-center text-center text-sm font-serif dyslexic:font-dyslexic dyslexic:text-xs">
            {trait.content}
          </p>
        </div>
      ))}
    </div>
  );
}
