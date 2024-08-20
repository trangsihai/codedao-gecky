import type { Metadata } from "next";
import { Poor_Story, Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const font = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

const poorStoryFont = Poor_Story({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--poor-story-font",
});

export const metadata: Metadata = {
  title: "Meet Gecky",
  description: `Gecky is an anthropomorphic gecko character based on «The Night Riders», a famous comic book by artist & illustrator Matt Furie.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(font.className, poorStoryFont.variable)}>
        {children}
      </body>
    </html>
  );
}
