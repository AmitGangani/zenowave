import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "ZenoWave",
   description: "Streaming application",
};

export default async function RootLayout({ children }) {
   const session = await auth();
   return (
      <html lang="en">
         <body className={inter.className}>
            <SessionProvider session={session}>
               <main>
                  <ThemeProvider attribute="class" defaultTheme="dark">
                     <Toaster theme="light" position="bottom-center" />
                     {children}
                  </ThemeProvider>
               </main>
            </SessionProvider>
         </body>
      </html>
   );
}
