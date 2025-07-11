import { configureStore } from '@reduxjs/toolkit';
import bookAppointmentSlice from './bookAppointmentSlice';

const store = configureStore({
  reducer: {
    bookAppointment: bookAppointmentSlice,
  },
});

export default store;
