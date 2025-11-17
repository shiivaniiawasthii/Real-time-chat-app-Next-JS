"use client";

import { useConversation } from "@/app/hooks/useConversation";
import { useNavigation } from "@/app/hooks/useNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserButton } from "@clerk/clerk-react";
import Link from "next/link"; // ✅ Correct import
import React from "react";
import { ModeToggle } from "../../ThemeToggleButton/page";

function MobileNav() {
  const paths = useNavigation();

 const { isActive } =  useConversation()

if(isActive) return null

  return (
    <Card
      className="fixed bottom-4 w-[calc(100vw-32px)]
  flex items-center h-16 p-2 gap-4 lg:hidden"
    >
      <nav className="w-full">
        <ul className="flex justify-evenly items-center ">
          {paths.map((path, id) => {
            const Icon = path.icon; // ✅ Use component

            return (
              <li key={id} className="relative">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={path.href}>
                      <Button
                        size="icon"
                        variant={path.isActive ? "default" : "outline"} // ✅ Correct property
                      >
                        <Icon className="h-5 w-5" />
                      </Button>
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent side="right">
                    <p>{path.name}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
<li>         <ModeToggle />
</li>
<li>         <UserButton />
</li>
        </ul>
      </nav>

      
    </Card>
  );
}

export default MobileNav;
