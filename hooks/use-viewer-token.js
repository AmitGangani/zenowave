"use client"
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { createViewerToken } from "@/actions/token";

export const useViewerToken = (hostIdentity) => {
   const [token, setToken] = useState("");
   const [name, setName] = useState("");
   const [identity, setIdentity] = useState("");

   useEffect(() => {
      const createToken = async () => {
         try {
            const viewerToken = await createViewerToken(hostIdentity);
            setToken(viewerToken);

            const decodedToken = jwtDecode(viewerToken)
            const name = decodedToken?.name;
            const identity = decodedToken.sub;
            // console.log(decodedToken);
            if (identity) {
               setIdentity(identity);
            }

            if (name) {
               setName(name);
            }

         } catch {
            toast.error("Something went wrong");
         }
      }

      createToken();
   }, [hostIdentity]);
   return {
      token,
      name,
      identity,
   };
};
