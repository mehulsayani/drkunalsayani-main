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
      <meta property="og:image" content="https://drkunalsayani.com/favicon.ico" />
              <meta property="og:url" content={`https://drkunalsayani.com${pathname}`} />
              <meta property="og:type" content="website" />
              <meta property="og:locale" content="en_IN" />
      <BookAppointment />
      <Navbar />
      <SecondNavbar />
       <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <main>{children}</main>
      <ScrollTop />
      <Footer />
      <CTA />
    </Provider>
  );
}
