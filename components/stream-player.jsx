"use client";
import { useViewerToken } from "@/hooks/use-viewer-token";

export const StreamPlayer = ({ user, stream, isFollowing }) => {
   const { token, name, identity } = useViewerToken(user.id);
   // const { collapsed } = useChatSidebar((state) => state);
   console.log(token, name, identity);
   if (!token || !name || !identity) {
      return <div>cannot watch the stream</div>;
   }
   return <div>Allowed to watch the stream</div>;
};
