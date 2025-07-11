import { H1, P } from "@/components/utilities/typography";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <H1>404 &ndash; Page Not Found</H1>
      <P className="text-center">Sorry, we couldn't find that page.</P>
    </main>
  );
}