import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";

import { Web3Provider, Navbar } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Web3",
  description:
    "A web3 version of twitter where you can view & compose tweets that live on blockchian.",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-mono`}>
        <Web3Provider wagmiCookie={headers().get("cookie")}>
          <Navbar />
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
