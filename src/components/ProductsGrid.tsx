"use client";
import ProductPageSkeleton from "@/app/product/[pid]/skeleton";
import { RootState } from "@/app/store/store";
import { HTMLAttributes, ReactElement, forwardRef } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

interface GridProps extends HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode;
}

const ProductsGrid = forwardRef<HTMLUListElement, GridProps>(
  ({ children }, ref) => {
    const productsList = useSelector((state: RootState) => state.data.products);
    if (!productsList) {
      return <ProductPageSkeleton />;
    }
    let content: ReactElement[] = [];
    for (const item in productsList) {
      content.push(<ProductCard product={productsList[item].data} />);
    }

    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {content}
      </ul>
    );
  }
);

ProductsGrid.displayName = "Products grid";
export default ProductsGrid;
