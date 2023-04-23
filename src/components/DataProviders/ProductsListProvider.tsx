"use client";
import { getProductsList } from "@/app/api/firebase/firebase";
import { updateProductsData } from "@/app/store/slices/dataSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProductsListProvider = ({ children }: { children?: React.ReactNode }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsList().then((res) => {
      for (let item in res) {
        dispatch(updateProductsData(res[item]));
      }
    });
  }, []);
  return <>{children}</>;
};

export default ProductsListProvider;
