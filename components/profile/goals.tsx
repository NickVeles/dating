import Image from "next/image";
import Banner from "../utilities/banner";
import TextLookup from "../utilities/text-lookup";
import { Bold, H3, Italic, P } from "../utilities/typography";

const goals = [
  {
    icon: "robot",
    banner:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Finishing the Deep Learning Specialization",
    content: (
      <P>
        Diving into the <Bold>Machine Learning Specialization</Bold> by Stanford
        and DeepLearning.AI wasn’t my first rodeo in AI, but it reignited my
        passion all over again. Right now I’m ankle-deep in their follow-up{" "}
        <Bold>Deep Learning Specialization</Bold>. My goal is to wrap it up
        before the end of 2025 and keep the momentum rolling for the following
        point.
      </P>
    ),
  },
  {
    icon: "circuitry",
    banner:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Applying ML/DL knowledge in IRL apps",
    content: (
      <div>
        <P className="mt-6">
          I want to dive deeper into the practical side of AI. I’ve begun
          expanding my knowledge of backend development and I'm planning to
          build either a <Bold>recommender system</Bold> or an{" "}
          <Bold>anomaly detector</Bold> using a custom TensorFlow model trained
          on some Kaggle dataset. I’ll likely deploy it with Uvicorn/FastAPI
          inside a Docker container. (Don't worry about the tech jargon lol)
        </P>
        <P>
          After that, I'm most likely gonna do more AI projects&mdash;maybe a
          chat assistant, maybe a CNN. The time will really tell.
        </P>
      </div>
    ),
  },
  {
    icon: "users-four",
    banner:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Creating my own philosophy-themed community",
    content: (
      <div>
        <P className="mt-6">
          Swiping constantly and going through shallow conversations daily gets
          quite lonely&mdash;isolating, even. I thought a cool way of curing
          this dread would be to become a <Bold>community founder</Bold>, and
          that's why I'm planning to create my own community website (blog) and
          a Discord server some time in the future. (Well... the server is
          already done, just lacking bots and people)
        </P>
        <P>
          One of my favorite topics of all time is <Bold>philosophy</Bold>,
          especially existentialism&mdash;I love pondering about the meaning of
          life all day every day&mdash;it's just a quirk of mine, I
          guess!&mdash;that's why it's going to be focused around this exact
          theme! It will have my own spin to it&mdash;I've been in{" "}
          <Italic>quite a few</Italic>{" "}
          philosophical communities, and I liked none of them, that's why I
          decided to build something more <Italic>me</Italic>. Here's a quick{" "}
          <TextLookup text="sneak peak">
            <Image
              src="/icons/symbol.svg"
              alt="symbol"
              width={24}
              height={24}
              className="invert dark:invert-0"
            />
          </TextLookup>
          !
        </P>
      </div>
    ),
  },
  {
    icon: "airplane-tilt",
    banner:
      "https://images.unsplash.com/photo-1522689764216-4e6966e5e444?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Moving out of Poland",
    content: <div></div>,
  },
];

export default function Goals() {
  return (
    <div className="w-full flex flex-col gap-16">
      <H3 className="font-serif dyslexic:font-dyslexic text-center -mb-10">
        Goals for 2025/26
      </H3>
      {goals.map((goal) => (
        <div className="text-gray-700 dark:text-gray-300" key={goal.title}>
          <Banner
            url={goal.banner}
            alt={goal.icon}
            icon={`/icons/${goal.icon}.svg`}
          >
            {goal.title}
          </Banner>
          {goal.content}
        </div>
      ))}
    </div>
  );
}
