import Image from "next/image";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { games } from "@/constants/games";

export default function GamesList() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="flex flex-wrap justify-center items-center gap-1 m-1">
        {games.map((game) => (
          <li key={game.file} className="basis-1/9 md:basis-1/7 lg:basis-1/9">
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={`/games/${game.file}.png`}
                  width={24}
                  height={24}
                  alt={game.name}
                />
              </TooltipTrigger>
              <TooltipContent>{game.name}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
      <p>and more!</p>
    </div>
  );
}
