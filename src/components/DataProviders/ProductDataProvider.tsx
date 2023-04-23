"use client";
import { getProductData, getProductsList } from "@/app/api/firebase/firebase";
import { updateProductsData } from "@/app/store/slices/dataSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProductDataProvider = ({
  params,
  searchParams,
  children,
}: {
  params?: { pid: string };
  searchParams?: { [key: string]: string | string[] | undefined };
  children?: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getProductData(params.pid).then((res) => dispatch(updateProductsData(res)));
  }, []);
  return <>{children}</>;
};

export default ProductDataProvider;
