import type { Metadata } from "next";
import { Geist, Geist_Mono, Josefin_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jarkata-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Speed",
  description: "Move Faster, Ride Smarter with speed",
  icons: {
    icon: "/speed-landing-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
