import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: {template: "CHOI JOON HYUK | %s", default: "CHOI JOON HYUK"},
  description: "CHOI JOON HYUK",
};

export default function RootLayout({
  children,
  about,
  project_page,
  blog,
  contact,
}: Readonly<{
  children: React.ReactNode;
  about: React.ReactNode;
  project_page: React.ReactNode;
  blog: React.ReactNode;
  contact: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800  h-dvh overflow-x-hidden`}
      >
        <main>
          <Navigation />
          {children}
          {about}
          {project_page}
          {blog}
          {contact}
        </main>
        <Footer />
      </body>
    </html>
  );
}
