import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import NextProviderUI from "../components/providers/next-ui-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J Chat",
  description: "J chat applictation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} dark text-foreground bg-background`}
        >
          <NextProviderUI>
            <div className="max-w-[1336px] mx-auto">{children}</div>
          </NextProviderUI>
        </body>
      </html>
    </ClerkProvider>
  );
}
