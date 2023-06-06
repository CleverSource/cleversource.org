import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Sidebar from "@/components/sidebar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan",
  description: "Software developer.",
  openGraph: {
    title: "Ryan",
    description: "Software developer.",
    url: "https://cleversource.org",
    siteName: "CleverSource",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-w-full min-h-full background-gradient">
      <body
        className={clsx(
          "antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto",
          inter.className
        )}
      >
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
