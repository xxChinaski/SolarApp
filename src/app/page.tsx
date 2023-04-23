'use client'
import Heading from "@/components/ui/Heading";
import ProductsGrid from "@/components/ProductsGrid";
import ProductsListProvider from "@/components/DataProviders/ProductsListProvider";
import { getCategoriesData } from "./api/firebase/firebase";

export default function Home() {
  getCategoriesData()
  return (
    <>
      <ProductsListProvider>
        <Heading>Рекомендации для вас</Heading>
        <ProductsGrid />
      </ProductsListProvider>
    </>
  );
}
