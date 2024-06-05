"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useChatSidebar } from "@/store/use-chat-sidebar";

export const ChatToggle = () => {
   const { collapsed, onExpand, onCollapse } = useChatSidebar((state) => state);

   const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;

   const onToggle = () => {
      if (collapsed) {
         onExpand();
      } else {
         onCollapse();
      }
   };

   const label = collapsed ? "Expand" : "Collapse";

   return (
      <Hint label={label} side="left" asChild>
         <Button
            onClick={onToggle}
            variant=""
            className="rounded-full hover:bg-purple-300 h-auto p-2 "
         >
            <Icon className="h-4 w-4" />
         </Button>
      </Hint>
   );
};
