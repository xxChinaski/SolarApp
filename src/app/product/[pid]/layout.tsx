import { Metadata } from "next";
import ProductDataProvider from "@/components/DataProviders/ProductDataProvider";
import "@/styles/globals.css";
import { getProductData } from "@/app/api/firebase/firebase";

export const metadata: Metadata = {
  title: "SolarDB APP | Product",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  params,
  children,
}: {
  params: { pid: string };
  searchParams: { [key: string]: string | string[] | undefined };
  children: React.ReactNode;
}) {
  return <ProductDataProvider params={params}>{children}</ProductDataProvider>;
}
