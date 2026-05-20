import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoomScroll Blocker – Block Social Apps Until You Go Outside",
  description: "Block social media until GPS confirms you've left your home. Built for remote workers, students, and digital wellness enthusiasts.",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d1117" />
        <link rel="icon" href="/favicon.ico" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3c1de17d-425d-44fd-ad0c-84663543d4b9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
