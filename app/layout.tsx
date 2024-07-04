import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  about,
}: Readonly<{
  children: React.ReactNode;
  about: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative overflow-x-hidden bg-slate-800 w-dvw h-dvh`}
      >
        <main>
          <Navigation />
          {children}
          {about}
        </main>
      </body>
    </html>
  );
}
