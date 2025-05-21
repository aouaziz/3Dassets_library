import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Printforge",
  description: "Printforge 3D assets library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.className}  bg-[#F4F3F2] `}
      >
        {children}
      </body>
    </html>
  );
}
// dark:bg-[#111111]