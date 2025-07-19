import { Metadata } from "next";
import ContributeClient from "./page-client";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "Share your experiences, advice, or articles on dating and relationships. Join our community of contributors and help others navigate love and dating.",
  openGraph: {
    title: "Contribute | DatingSimplified",
    description:
      "Want to help others with your dating experiences? Submit your tips, articles, or stories and become part of our dating advice community.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contribute | DatingSimplified",
    description:
      "Submit your dating experiences or advice. Help others and get featured on our blog.",
  },
};

export default function Contribute() {
  return <ContributeClient />;
}
