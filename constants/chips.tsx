import RulerIcon from "@/assets/icons/ruler.svg";
import FlagIcon from "@/assets/icons/flag.svg";
import GenderMaleIcon from "@/assets/icons/gender-male.svg";
import HeteroIcon from "@/assets/icons/hetero.svg";
import InfinityIcon from "@/assets/icons/infinity.svg";
import SuitcaseIcon from "@/assets/icons/suitcase.svg";
import GraduationCapIcon from "@/assets/icons/graduation-cap.svg";
import HandsPrayingIcon from "@/assets/icons/hands-praying.svg";
import MonogamyIcon from "@/assets/icons/monogamy.svg";
import LockHeartIcon from "@/assets/icons/lock-heart.svg";
import MagnifyingGlassHeartIcon from "@/assets/icons/magnifying-glass-heart.svg";
import BabyCarriageIcon from "@/assets/icons/baby-carriage.svg";
import BarbellIcon from "@/assets/icons/barbell.svg";
import ForkKnifeIcon from "@/assets/icons/fork-knife.svg";
import CigaretteIcon from "@/assets/icons/cigarette.svg";
import WineIcon from "@/assets/icons/wine.svg";
import PillIcon from "@/assets/icons/pill.svg";
import PawPrintIcon from "@/assets/icons/paw-print.svg";
import LangEnglishIcon from "@/assets/icons/lang-english.svg";
import LangPolishIcon from "@/assets/icons/lang-polish.svg";
import LangChineseIcon from "@/assets/icons/lang-chinese.svg";

export const chips = [
  {
    name: "Core",
    color: "bg-red-200 dark:bg-red-800 hover:bg-red-300 dark:hover:bg-red-700",
    items: [
      {
        text: "6'3/190cm",
        tooltip: "Height",
        icon: RulerIcon,
      },
      {
        text: "Polish",
        tooltip: "Nationality",
        icon: FlagIcon,
      },
      {
        text: "he/him",
        tooltip: "Pronouns",
        icon: GenderMaleIcon,
      },
      {
        text: "Straight",
        tooltip: "Orientation",
        icon: HeteroIcon,
      },
      {
        text: "ASD",
        tooltip: "Autism Spectrum Disorder",
        icon: InfinityIcon,
      },
    ],
  },
  {
    name: "Career",
    color: "bg-sky-200 dark:bg-sky-800 hover:bg-sky-300 dark:hover:bg-sky-700",
    items: [
      {
        text: "Software Dev",
        tooltip: "Occupation",
        icon: SuitcaseIcon,
      },
      {
        text: "Web Dev",
        tooltip: "Occupation",
        icon: SuitcaseIcon,
      },
      {
        text: "ML Specialist",
        tooltip: "Occupation",
        icon: SuitcaseIcon,
      },
      {
        text: "IT Tech",
        tooltip: "Education",
        icon: GraduationCapIcon,
      },
      {
        text: "Self-taught",
        tooltip: "Education",
        icon: GraduationCapIcon,
      },
    ],
  },
  {
    name: "Values",
    color: "bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700",
    items: [
      {
        text: "Atheist/Agnostic",
        tooltip: "Religion",
        icon: HandsPrayingIcon,
      },
      {
        text: "Monogamous",
        tooltip: "Relationship style",
        icon: MonogamyIcon,
      },
      {
        text: "Long-term",
        tooltip: "Relationship expectations",
        icon: LockHeartIcon,
      },
      {
        text: "Single & Looking",
        tooltip: "Relationship status",
        icon: MagnifyingGlassHeartIcon,
      },
      {
        text: "None | Open to having",
        tooltip: "Children",
        icon: BabyCarriageIcon,
      },
    ],
  },
  {
    name: "Lifestyle",
    color: "bg-emerald-200 dark:bg-emerald-800 hover:bg-emerald-300 dark:hover:bg-emerald-700",
    items: [
      {
        text: "5d/week",
        tooltip: "Workout",
        icon: BarbellIcon,
      },
      {
        text: "Low-fat | Hates pork",
        tooltip: "Diet",
        icon: ForkKnifeIcon,
      },
      {
        text: "Never",
        tooltip: "Smoking",
        icon: CigaretteIcon,
      },
      {
        text: "Never",
        tooltip: "Drinking",
        icon: WineIcon,
      },
      {
        text: "Never",
        tooltip: "Substances",
        icon: PillIcon,
      },
    ],
  },
  {
    name: "Other",
    color: "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700",
    items: [
      {
        text: "Dog",
        tooltip: "Pet",
        icon: PawPrintIcon,
      },
      {
        text: "Cat",
        tooltip: "Pet",
        icon: PawPrintIcon,
      },
      {
        text: "Turtle",
        tooltip: "Pet",
        icon: PawPrintIcon,
      },
      {
        text: "Stick-bugs",
        tooltip: "Pet",
        icon: PawPrintIcon,
      },
      {
        text: "English (C2)",
        tooltip: "Language proficiency",
        icon: LangEnglishIcon,
      },
      {
        text: "Polish (C2)",
        tooltip: "Language proficiency",
        icon: LangPolishIcon,
      },
      {
        text: "Mandarin (HSK1)",
        tooltip: "Language proficiency",
        icon: LangChineseIcon,
      },
    ],
  },
];