import type { Metadata } from "next";
import {
  Roboto,
  Roboto_Mono,
  Roboto_Serif,
  Noto_Color_Emoji,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

const notoColorEmoji = Noto_Color_Emoji({
  weight: "400",
  variable: "--font-noto-color-emoji",
  subsets: ["emoji"]
});

export const metadata: Metadata = {
  title: {
    default: "DatingSimplified",
    template: "%s | DatingSimplified",
  },
  description: "Discover practical online dating tips, in-depth relationship advice, and honest guides for modern singles. Dating Simplified is your go-to blog for building meaningful connections, improving your dating profile, and navigating the world of digital romance with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} ${robotoSerif.variable} ${notoColorEmoji.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="flex flex-col items-center min-h-screen min-w-screen font-[family-name:var(--font-sans)] dyslexic:font-[family-name:var(--font-dyslexic)]">
              <Header />
              <div className="flex-1 ">{children}</div>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
