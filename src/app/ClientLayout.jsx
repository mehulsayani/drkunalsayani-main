"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SecondNavbar from "@/components/Navbar/SecondNavbar";
import ScrollTop from "@/components/ScrollTop";
import BookAppointment from "@/components/Navbar/BookAppointment";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const canonicalUrl = `https://www.drkunalsayani.com${pathname}`;

  return (
    <Provider store={store}>
      <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
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
