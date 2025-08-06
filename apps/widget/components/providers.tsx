"use client";

import * as React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL ||
    (() => {
      throw new Error(
        "NEXT_PUBLIC_CONVEX_URL environment variable is required"
      );
    })()
);

export function Providers({ children }: { children: React.ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
