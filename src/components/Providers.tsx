"use client";

import { ThemeProvider } from "next-theme";
import { FC, ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

Providers.displayName = "Providers";

export default Providers;
