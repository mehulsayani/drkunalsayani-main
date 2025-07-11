"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SecondNavbar from "@/components/Navbar/SecondNavbar";
import ScrollTop from "@/components/ScrollTop";
import BookAppointment from "@/components/Navbar/BookAppointment";

export default function ClientLayout({ children }) {


  return (
    <Provider store={store}>
      <BookAppointment />
      <Navbar />
      <SecondNavbar />
      <main>{children}</main>
      <ScrollTop />
      <Footer />
      <CTA />
    </Provider>
  );
}
