import { FcGoogle } from "react-icons/fc";

import { signIn } from "@/next-auth";
import { Button } from "@/components/ui/button";

export const SignIn = () => {
   return (
      <div className="p-4 bg-muted rounded-xl">
         <form
            action={async () => {
               "use server";

               await signIn("google");
            }}
         >
            <Button variant="">
               <FcGoogle className="h-4 w-4 mr-2" />
               Sign in with Google
            </Button>
         </form>
      </div>
   );
};
