"use client";

// import { useIsClient } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

import { ToggleSkeleton } from "./toggle";
import { useEffect, useState } from "react";
import { FollowingSkeleton } from "./following";
import { RecommendedSkeleton } from "./recommended";

export const Wrapper = ({ children }) => {
   // const isClient = useIsClient();
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
   }, []);

   const { collapsed } = useSidebar((state) => state);
   // console.log(collapsed);
   if (!isClient) {
      return (
         <aside className="rounded-2xl fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
            <ToggleSkeleton />
            <FollowingSkeleton />
            <RecommendedSkeleton />
         </aside>
      );
   }

   return (
      <aside
         className={cn(
            "rounded-xl fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
            collapsed && "w-[70px]"
         )}
      >
         {children}
      </aside>
   );
};
