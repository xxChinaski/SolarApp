import "@/styles/globals.css";
import Header from "@/components/layout/Header/Header";
import ReduxProvider from "@/components/DataProviders/ReduxProvider";
import { Metadata } from "next";
import  ThemeProvider  from "@/components/DataProviders/ThemeProvider";

export const metadata: Metadata = {
  title: "SolarDB APP | Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
    <html lang="en" className="antialiased bg-white text-slate-900">
      <ReduxProvider>
        <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
          <Header />
          <main className="container mx-auto px-2 py-8">{children}</main>
        </body>

      </ReduxProvider>
    </html>
    </ThemeProvider>
  );
}
