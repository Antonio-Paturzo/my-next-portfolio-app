import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Antonio's Homepage",
  description: "Antonio's Fullstack Developer Portfolio Homepage",
  keywords:
    "Antonio, Fullstack, Developer, Portfolio, Homepage, Next.js, TailwindCSS, TypeScript, React, Vercel, Server Components, Server Component,",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-primary-dark" lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
