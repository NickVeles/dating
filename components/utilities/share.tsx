import Link from "next/link";
import { H4 } from "./typography";
import { XLogoIcon } from "@phosphor-icons/react";
import { TooltipContent, Tooltip, TooltipTrigger } from "../ui/tooltip";
import { getRandomItem } from "@/lib/utils";
import { useEffect, useState } from "react";
import Loading from "./loading";

interface ShareProps {
  url: string;
  children?: string;
  excludeTitle?: boolean;
}

const defaultTwitterMessages = [
  "Just read this awesome dating guide! 💕 Check it out for tips on finding meaningful connections. #DatingSimplified #Love",
  "Struggling with dating? This guide helped me understand what really matters! Worth a read. #DatingSimplified #FindLove",
  "Ready to level up your dating game? Here’s a must-read guide with practical tips! #DatingSimplified #RelationshipGoals",
  "Dating doesn’t have to be confusing. This guide breaks it down simply and clearly! #DatingSimplified #LoveLife",
  "Want better dates and stronger connections? This blog post is packed with solid advice! #DatingSimplified #HealthyRelationships",
];

const defaultFacebookMessages = [
  "Just discovered this amazing dating guide packed with practical tips to help you find meaningful relationships. If you’re dating or thinking about it, give it a read! #DatingSimplified #LoveJourney",
  "Dating can be confusing, but this guide makes it so much easier to understand what really matters. Highly recommend it for anyone looking to improve their love life! #DatingSimplified #FindLove",
  "If you’re tired of bad dates and want to attract the right person, this dating guide is a game-changer. Easy to read and full of useful advice! #DatingSimplified #RelationshipGoals",
  "Whether you’re new to dating or getting back out there, this guide will help you approach it with confidence and clarity. Check it out! #DatingSimplified #LoveLife",
  "Want to make dating fun and less stressful? This blog post offers simple but powerful tips to help you on your journey. #HealthyRelationships #DatingSimplified",
];

const defaultWhatsappMessages = [
  "Just read this awesome dating guide! 💕 Check it out for tips on finding meaningful connections. #DatingSimplified #Love",
  "Struggling with dating? This guide helped me understand what really matters! Worth a read. #DatingSimplified #FindLove",
  "Ready to level up your dating game? Here’s a must-read guide with practical tips! #DatingSimplified #RelationshipGoals",
  "Dating doesn’t have to be confusing. This guide breaks it down simply and clearly! #DatingSimplified #LoveLife",
  "Want better dates and stronger connections? This blog post is packed with solid advice! #DatingSimplified #HealthyRelationships",
];

export default function Share({
  url,
  children,
  excludeTitle = false,
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
  ];
  
  // Ensure everything is loaded before rendering
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      {!excludeTitle && <H4 className="w-full mb-2 font-semibold">Share</H4>}
      <div className="flex gap-2">
        {places.map((place) => (
          <Tooltip key={place.alt}>
            <TooltipTrigger>
              <Link
                href={place.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:cursor-pointer"
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
