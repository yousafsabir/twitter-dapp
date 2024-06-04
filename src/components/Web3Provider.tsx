"use client";

import { WagmiProvider } from "wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";
import { cookieToInitialState } from "wagmi";

import { wagmiConfig, queryClient } from "@/lib/config";
import React from "react";

interface Props {
  children: React.ReactNode;
  wagmiCookie?: string | null;
}

export function Web3Provider({ children, wagmiCookie }: Props) {
  const wagmiInitialState = cookieToInitialState(wagmiConfig, wagmiCookie);

  return (
    <WagmiProvider config={wagmiConfig} initialState={wagmiInitialState}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
