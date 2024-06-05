import { Suspense } from "react";

import { Navbar } from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
import { Container } from "./_components/container";

const BrowseLayout = ({ children }) => {
   return (
      <>
         <Navbar />
         <div className="mt-1.5 flex h-full pt-20">
            <Suspense fallback={<SidebarSkeleton />}>
               <Sidebar />
            </Suspense>

            <Container>{children}</Container>
         </div>
      </>
   );
};

export default BrowseLayout;
