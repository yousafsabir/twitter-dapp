"use client";

import { ConnectKitButton } from "connectkit";

export default function Home() {
  return (
    <main className="min-h-screen font-mono flex justify-center items-center gap-4">
      <h1 className="text-3xl font-bold text-blue-600">Twitter DApp</h1>
      <ConnectKitButton />
    </main>
  );
}
