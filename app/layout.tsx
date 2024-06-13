import type { Metadata } from "next";

import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { Providers } from "@/components/providers/providers";
import TailwindIndicator from "@/components/tailwind-indicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", inter.className)}
      >
        <Providers>
          <Header />
          <main className="container my-4 max-w-screen-2xl">{children}</main>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
