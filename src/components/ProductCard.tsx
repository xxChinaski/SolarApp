"use client";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLLIElement> {
  product: {
    id: string;
    name: string;
    location: string;
    date: string;
    price: string;
    images: string[];
    desc: string;
  };
}
const ProductCard = forwardRef<HTMLLIElement, CardProps>(
  ({ product, ...props }, ref) => {
    const hoverStyle =
      "hover:bg-slate-100 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-400 hover:translate-y-[-7%] hover:scale-105 ";
    const focusStyle =
      "focus-within:bg-slate-100 focus-within:border-slate-300 focus-within:shadow-2xl focus-within:shadow-slate-400 focus-within:translate-y-[-7%] focus-within:scale-105 focus-within:outline-none focus:outline-none";
    return (
      <li
        className={`group cursor-pointer rounded-md border-2 border-transparent transition-all p-2 ${hoverStyle} ${focusStyle}`}
        id={product.id}
        {...props}
      >
        <Link href={`/product/${product.id}`} className="focus:outline-none">
          <div className="relative w-full pb-[81%] overflow-hidden rounded-md transition-all">
            <img
              className="absolute top-0 left-0 object-cover w-full h-full group-hover:scale-110 transition-all"
              src={product.images[0]}
              alt={product.desc}
            />
          </div>
          <h3 className="text-sky-600 font-bold text-xl">{product.name}</h3>
          <p className="font-bold text-xl">{product.price} ₽</p>
          <p className="text-slate-500">{product.location}</p>
          <p className="text-slate-500">{product.date}</p>
        </Link>
      </li>
    );
  }
);
ProductCard.displayName = "Item card";

export default ProductCard;
