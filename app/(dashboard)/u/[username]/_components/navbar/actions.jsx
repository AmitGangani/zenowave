import Link from "next/link";
import { LogOut } from "lucide-react";
import { UserButton } from "@/components/auth/user-button";

import { Button } from "@/components/ui/button";

export const Actions = () => {
   return (
      <div className="flex items-center justify-end gap-x-4">
         <Button
            size="sm"
            variant=""
            className=" hover:bg-blue-500 hover:text-primary"
            asChild
         >
            <Link href="/">
               <LogOut className="h-5 w-5 mr-2" />
               Exit
            </Link>
         </Button>
         <UserButton afterSignOutUrl="/" />
      </div>
   );
};
