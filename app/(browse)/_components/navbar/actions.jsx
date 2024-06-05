import Link from "next/link";
import { Clapperboard } from "lucide-react";
import { SignInButton } from "@/components/auth/signin-button";
import { currentUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Actions = async () => {
   const user = await currentUser();

   return (
      <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
         {!user && <SignInButton />}
         {!!user && (
            <div className="flex items-center gap-x-4">
               <Button
                  size="sm"
                  variant=""
                  className=" hover:text-white hover:bg-blue-500"
                  asChild
               >
                  <Link href={`/u/${user.username}`}>
                     <Clapperboard className="h-5 w-5 lg:mr-2" />
                     <span className="hidden lg:block">Dashboard</span>
                  </Link>
               </Button>
               <UserButton afterSignOutUrl="/" />
            </div>
         )}
      </div>
   );
};
