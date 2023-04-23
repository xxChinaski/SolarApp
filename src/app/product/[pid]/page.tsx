"use client";
import { showPhoneNumber } from "@/app/store/slices/dataSlice";
import { RootState } from "@/app/store/store";
import Button from "@/components/ui/Button";
import { Copy, ExternalLink } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import ProductPageSkeleton from "./skeleton";
import Navigation from "@/components/ui/productPageComponents/Navigation";
import PhotoElement from "@/components/ui/productPageComponents/PhotoElement";

const ProductPage = ({
  params,
}: {
  params: { pid: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const dispatch = useDispatch();
  const productData = useSelector(
    (state: RootState) => state.data.products[params.pid]
  );
  if (!productData) {
    return <ProductPageSkeleton />;
  }
  const photosList = productData.data.images.map((item, index) => (
    <PhotoElement
      image={item}
      index={index}
      key={`${params.pid}-${index}`}
      pid={params.pid}
    />
  ));

  return (
    <>
      <Navigation city={productData.data.location} />
      <div className="flex font-semibold text-3xl py-4">
        <h2 className="w-2/3">{productData.data.name}</h2>
        <h2>{productData.data.price} ₽</h2>
      </div>
      <div className="flex gap-6">
        <div className="relative w-2/3 pb-[35%] overflow-hidden rounded-md">
          <img
            className="absolute top-0 left-0 w-full object-cover translate-y-[-35%] blur-xl"
            src={productData.data.images[productData.currentPictureID]}
            alt={productData.data.desc}
          />
          <img
            className="absolute top-0 left-1/2 h-full w-auto translate-x-[-50%]"
            src={productData.data.images[productData.currentPictureID]}
            alt={productData.data.desc}
          />
        </div>
        <div className="w-1/3 flex flex-col gap-8">
          {productData.isShown ? (
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                navigator.clipboard.writeText(productData.data.phone);
              }}
            >
              <Copy className="w-5 h-5 ml-2" />
              {productData.data.phone}
            </Button>
          ) : (
            <Button
              variant="blue"
              size="lg"
              onClick={() => {
                dispatch(showPhoneNumber(params.pid));
              }}
            >
              Показать номер телефона
            </Button>
          )}
          <div>
            <h3 className="font-semibold text-2xl pb-3">Address</h3>
            <p>{productData.data.location}</p>
            <a
              className="text-sky-600 hover:text-sky-500 flex productDatas-center gap-1"
              href="#"
            >
              Open on map <ExternalLink className="w-5 h-5 ml-1" />
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-2xl pb-3">Description</h3>
            <p>{productData.data.desc}</p>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex gap-4 w-2/3 py-4 h-fit pr-4">{photosList}</ul>
      </div>
    </>
  );
};
export default ProductPage;
