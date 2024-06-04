"use client";

import { ConnectKitButton } from "connectkit";

export function Navbar() {
  return (
    <nav className="max-w-container mx-auto px-7 py-5 flex justify-between">
      <h1 className="text-3xl font-bold text-blue-600">Twitter Web3</h1>
      <ConnectKitButton />
    </nav>
  );
}
