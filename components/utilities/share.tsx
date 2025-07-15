import Link from "next/link";
import { H4 } from "./typography";
import {
  FacebookLogoIcon,
  RedditLogoIcon,
  WhatsappLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { TooltipContent, Tooltip, TooltipTrigger } from "../ui/tooltip";
import { cn, getRandomItem } from "@/lib/utils";
import { useEffect, useState } from "react";
import Loading from "./loading";

interface ShareProps {
  url: string;
  children?: string;
  smallTitle?: boolean;
  className?: string;
}

const defaultTwitterMessages = [
  "Just read this awesome dating guide! 💕 Check it out for tips on finding meaningful connections. #DatingSimplified #Love",
  "Struggling with dating? This guide helped me understand what really matters! Worth a read. #DatingSimplified #FindLove",
  "Ready to level up your dating game? Here’s a must-read guide with practical tips! #DatingSimplified #RelationshipGoals",
  "Dating doesn’t have to be confusing. This guide breaks it down simply and clearly! #DatingSimplified #LoveLife",
  "Want better dates and stronger connections? This blog post is packed with solid advice! #DatingSimplified #HealthyRelationships",
];

const defaultWhatsappMessages = [
  "Hey! Just read this really helpful dating guide. It has great tips if you're trying to figure out modern dating. Thought of you!",
  "This blog post made so much sense about dating and relationships. Worth a read if you're looking for something real.",
  "If you're dating (or thinking about it), you HAVE to check this out. Clear, real advice that actually helps.",
  "Sharing this dating guide I found. Super useful and honest tips. Might help you or someone you know!",
  "I didn’t think I’d find good dating advice online... but this guide surprised me. Sharing in case it helps you too.",
  "Sending you this because it actually changed how I see dating. Super clear and smart advice.",
  "Read this dating guide today and it really hit home. If you're navigating relationships or apps, give it a look!",
  "Practical, no-nonsense dating tips in this guide. Could be useful if you're back on the apps or just exploring love again!",
  "This dating blog breaks it down so well. Sharing in case you're in the same boat.",
  "Sending this your way. Felt seen reading this dating advice. Maybe it’ll speak to you too.",
];

const defaultRedditMessages = [
  "This dating guide actually made sense - thought I’d share it",
  "A practical guide to modern dating that doesn’t suck",
  "Finally found a dating blog that gives real, no-BS advice",
  "If you're lost in the dating world, this guide might help",
  "This post helped me rethink how I approach dating",
];

export default function Share({
  url,
  children,
  smallTitle = false,
  className,
}: ShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = children ? encodeURIComponent(children) : null;
  const [mounted, setMounted] = useState(false);

  const places = [
    {
      icon: XLogoIcon,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${
        encodedTitle ?? getRandomItem(defaultTwitterMessages)
      }`,
      alt: "Twitter",
    },
    {
      icon: FacebookLogoIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      alt: "Facebook",
    },
    {
      icon: WhatsappLogoIcon,
      href: `https://api.whatsapp.com/send?text=${
        encodedTitle ?? getRandomItem(defaultWhatsappMessages)
      }%20${encodedUrl}`,
      alt: "WhatsApp",
    },
    {
      icon: RedditLogoIcon,
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${
        encodedTitle ?? getRandomItem(defaultRedditMessages)
      }`,
      alt: "Reddit",
    },
  ];

  // Ensure everything is loaded before rendering
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <Loading />;
  }

  return (
    <div className={className}>
      <H4
        className={cn(
          "w-full font-mono dyslexic:font-dyslexic-mono font-bold",
          smallTitle ? "text-center text-sm mb-1 uppercase" : "w-full mb-2"
        )}
      >
        Share
      </H4>
      <div className="flex gap-2">
        {places.map((place) => (
          <Tooltip key={place.alt}>
            <TooltipTrigger>
              <Link
                href={place.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl sm:text-3xl hover:cursor-pointer"
              >
                <place.icon alt={`Share on ${place.alt}`} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>{`Share on ${place.alt}`}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
