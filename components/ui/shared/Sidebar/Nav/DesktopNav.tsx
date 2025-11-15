"use client";

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

function DesktopNav() {
  const paths = useNavigation();

  return (
    <Card
      className="hidden lg:flex 
      lg:flex-col lg:justify-between
      items-center lg:h-full lg:w-16
      px-2 py-8"
    >
      <nav>
        <ul className="flex flex-col items-center gap-4">
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
        </ul>
      </nav>

      <div className="flex flex-col items-center gap-4">
        <UserButton />
      </div>
    </Card>
  );
}

export default DesktopNav;
