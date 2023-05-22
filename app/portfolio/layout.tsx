import { Comfortaa } from "next/font/google";
import "@/app/globals.css";

const comfortaa = Comfortaa({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "My Projects",
  description: "Antonio's Fullstack Developer Portfolio",
  keywords:
    "Antonio, Fullstack, Developer, Portfolio, Homepage, Next.js, TailwindCSS, TypeScript, React, Vercel, Server Components, Server Component,",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
