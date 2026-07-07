import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leadership Diary — Kyle Samonte",
  description:
    "A personal leadership development diary for MDes Summer 2026, Leadership by Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
