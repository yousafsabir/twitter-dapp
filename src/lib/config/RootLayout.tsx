"use client";

import { type State, WagmiProvider } from "wagmi";
import { QueryClientProvider } from "@tanstack/react-query";

import { wagmiConfig, queryClient } from "@/lib/config";
import React from "react";

interface Props {
  children: React.ReactNode;
  wagmiState: State | undefined;
}

export function RootLayout({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
