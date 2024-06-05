import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { getTheme } from "../lib/getTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "A social media managment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
