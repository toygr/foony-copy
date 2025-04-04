import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";
import SVGs from "@/components/SVGs";
import { fontExo2 } from "@/font";
import StoreProvider from "@/store/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pool Game",
  description: "Best Free Online Multiplayer Games With Friends | Foony",
  icons: "https://foony.com/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontExo2.className} italic antialiased`}
      >
        <SVGs />
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
