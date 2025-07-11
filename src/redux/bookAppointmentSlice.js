import { createSlice } from "@reduxjs/toolkit";

const bookAppointmentSlice = createSlice({
  name: "bookAppointment",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openModal, closeModal, toggleModal } = bookAppointmentSlice.actions;
export default bookAppointmentSlice.reducer;
