"use client";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import { FC, useState } from "react";
import { getCategoriesData } from "../api/firebase/firebase";

interface FormData {
  title: string;
  location: string;
  pid: string;
  images: string[];
}

const inputStyles =
  "p-2 bg-transparent border-gray  focus-within:outline-none focus-within:shadow-lg shadow-dBlack border rounded-lg w-full";

const NewProduct: FC = () => {
  const [categories, setCategories ] = useState([])
  const [formData, setFormData] = useState({});

  getCategoriesData().then(res => setCategories(res))

  const onFormSubmit = () => {};
  return (
    <>
      <Heading>Новое объявление</Heading>
      <form className="grid grid-cols-2 gap-4 border-gray w-full text-start py-4">
        <label className="font-medium" htmlFor="title">
          Write good name
          <input className={inputStyles} type="text" id="title" name="title" />
        </label>

        <label className="font-medium" htmlFor="price">
          Write good name
          <input
            className={inputStyles}
            onChange={(e) => console.log(e.currentTarget.value)}
            type="number"
            id="price"
            name="price"
          />
        </label>

        <label className="font-medium" htmlFor="category">
          Chose category:
          <select className={inputStyles} id="category-1" name="category">
            <option>one option</option>
          </select>
        </label>

        <label className="font-medium" htmlFor="brand">
          Chose brand:
          <select className={inputStyles} id="brand" name="brand">
            <option value="apple">Apple</option>
            <option value="dell">DELL</option>
            <option value="hyperx">Hyperx</option>
            <option value="aoc">AOC</option>
          </select>
        </label>

        <label className="font-medium col-span-2" htmlFor="desc">
          Write description
          <textarea className={inputStyles} id="desc" name="desc"></textarea>
        </label>

        <label className="font-medium" htmlFor="loca">
          Write location
          <input className={inputStyles} type="text" id="loca" name="loca" />
        </label>

        <label className="font-medium" htmlFor="images">
          Add images
          <input
            className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-lightGray file:text-dBlack hover:file:bg-accent transition-all focus-within:file:outline-none focus-within:outline-none w-full"
            type="file"
            id="images"
            name="images"
            accept="image/*"
          />
        </label>

        <Button type="submit">Add good</Button>
      </form>
    </>
  );
};

NewProduct.displayName = "new product";
export default NewProduct;
