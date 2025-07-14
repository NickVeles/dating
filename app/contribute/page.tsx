"use client"

import TitleContainer from "@/components/utilities/title-container";
import { HandHeartIcon } from "@phosphor-icons/react";

export default function Contribute() {
  return (
    <main className="flex flex-col flex-1 gap-4">
      <TitleContainer Icon={HandHeartIcon}>How To Contribute</TitleContainer>
    </main>
  )
}