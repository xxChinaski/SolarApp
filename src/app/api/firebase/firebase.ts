import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://solardb-1e507-default-rtdb.europe-west1.firebasedatabase.app/",
  timeout: 20000,
  headers: { "X-Custom-Header": "foobar" },
});

export const getProductsList = async () => {
  const productsList = await instance.get("products.json");
  return await productsList.data;
};

export const getProductData = async (id: string) => {
  const productData = await instance.get(`products/${id}.json`);
  return await productData.data;
};

export const getCategoriesData = async () => {
  const categoriesData = await instance.get(`categories.json`);
  return await categoriesData.data;
};
