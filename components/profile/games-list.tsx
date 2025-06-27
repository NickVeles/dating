import Image from "next/image";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

const games = ["roblox", "minecraft", "rivals"];

export default function GamesList() {
  return (
    <div className="flex justify-center gap-1 m-1">
      {games.map((game) => (
        <Tooltip key={game}>
          <TooltipTrigger>
            <Image
              src={`/images/${game}.png`}
              width={24}
              height={24}
              alt={game}
            />
          </TooltipTrigger>
          <TooltipContent>{game[0].toUpperCase() + game.slice(1)}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
