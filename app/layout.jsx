import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "ZenoWave",
   description: "Streaming application",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <main>
               <ThemeProvider attribute="class" defaultTheme="dark">
                  <Toaster theme="light" position="bottom-center" />
                  {children}
               </ThemeProvider>
            </main>
         </body>
      </html>
   );
}
