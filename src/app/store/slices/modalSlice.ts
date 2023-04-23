import { createSlice } from "@reduxjs/toolkit";

type ModalVariant = "Login" | "Register";
export interface ModalState {
  variant: ModalVariant;
  isOpen: boolean;
}

const initialState: ModalState = {
  variant: "Login",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleVariant: (state) => {
      state.variant === "Login"
        ? (state.variant = "Register")
        : (state.variant = "Login");
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModal, toggleVariant } = modalSlice.actions;

export default modalSlice.reducer;
