import Banner from "../utilities/banner";
import { Bold, H3, P } from "../utilities/typography";

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
    content: <div></div>,
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
    <div className="w-full flex flex-col gap-12">
      <H3 className="font-serif dyslexic:font-dyslexic text-center -mb-6">
        Goals for 2025/26
      </H3>
      {goals.map((goal) => (
        <div key={goal.title}>
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
