import { currentUser } from "@/lib/auth";

import { getUserByUsername } from "@/lib/user-service";
import { StreamPlayer } from "@/components/stream-player";

const CreatorPage = async ({ params }) => {
   const loggedInUser = await currentUser();
   const user = await getUserByUsername(params.username);

   if (!user || loggedInUser?.id !== user.id || !user.stream) {
      throw new Error("Unauthorized");
   }

   return (
      <div className="h-full">
         <StreamPlayer user={user} stream={user.stream} isFollowing />
      </div>
   );
};

export default CreatorPage;
