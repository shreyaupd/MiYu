import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MiYu",
  description: "MiYu  is a AI powered website that enables you to communicate with other learners in the community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
      <body
        className={`${josefinSans.className} antialiased`}
      >
        <Header isPro/>
        {children}
      </body>
    </html>
      </ClerkProvider>
  );
}
