import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductItem {
  name: string;
  price: string;
  location: string;
  date: string;
  images: string[];
  desc: string;
  id: string;
  phone: string;
}

export interface ServerData {
  products: {
    [id: string]: ProductItem;
  };
}

export interface DataState {
  products: {
    [id: string]: {
      data: ProductItem;
      isShown: boolean;
      currentPictureID: number;
    };
  };
}

const initialState: DataState = {
  products: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateProductsData: (state, product: PayloadAction<ProductItem>) => {
      state.products = {
        ...state.products,
        [product.payload.id]: {
          data: { ...product.payload },
          isShown: false,
          currentPictureID: 0,
        },
      };
    },
    showPhoneNumber: (state, pid: PayloadAction<string>) => {
      state.products = {
        ...state.products,
        [pid.payload]: {
          ...state.products[pid.payload],
          isShown: true,
        },
      };
    },
    setCurrentPictureForProduct: (
      state,
      data: PayloadAction<(string | number)[]>
    ) => {
      state.products = {
        ...state.products,
        [data.payload[1]]: {
          ...state.products[data.payload[1]],
          currentPictureID: data.payload[0],
        },
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateProductsData,
  setCurrentPictureForProduct,
  showPhoneNumber,
} = dataSlice.actions;

export default dataSlice.reducer;
