"use client";

import { ConnectionState, Track } from "livekit-client";
import {
   useConnectionState,
   useRemoteParticipant,
   useTracks,
} from "@livekit/components-react";

import { Skeleton } from "@/components/ui/skeleton";

import { OfflineVideo } from "./offline-video";
import { LoadingVideo } from "./loading-video";
import { LiveVideo } from "./live-video";

export const Video = ({ hostName, hostIdentity }) => {
   const connectionState = useConnectionState();
   const participant = useRemoteParticipant(hostIdentity);
   const tracks = useTracks([
      Track.Source.Camera,
      Track.Source.Microphone,
   ]).filter((track) => track.participant.identity === hostIdentity);

   let content;

   if (!participant && connectionState === ConnectionState.Connected) {
      content = <OfflineVideo username={hostName} />;
   } else if (!participant || tracks.length === 0) {
      content = <LoadingVideo label={connectionState} />;
   } else {
      content = <LiveVideo participant={participant} />;
   }

   return <div className="aspect-video border-b group relative">{content}</div>;
};

export const VideoSkeleton = () => {
   return (
      <div className="rounded-xl aspect-video border-x border-background">
         <Skeleton className="h-full w-full rounded-none" />
      </div>
   );
};
