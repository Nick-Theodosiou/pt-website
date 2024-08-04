import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GP Coaching - Nutrition & Fitness",
  description: "Helping you integrate fitness into your routine to reach your goals without making it a chore.",
  icons: {
    icon: "/logo-white.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-white" lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          {children}
          <Analytics />
        </NextUIProvider>
      </body>
    </html>
  );
}
