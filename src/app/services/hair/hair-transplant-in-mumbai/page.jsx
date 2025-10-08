import React from 'react'
import ClientComponent from './ClientComponent'

export const metadata = {
  title: "Best Hair Transplant in Mumbai | By Dr. Kunal Sayani ",
  description: `Get natural-looking hair restoration with advanced hair transplant in Mumbai. Consult Dr. Kunal Sayani for safe, effective hair regrowth and personalized treatment.`,
  keywords: ``,
   metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Hair Transplant in Mumbai | By Dr. Kunal Sayani",
    description: "Get natural-looking hair restoration with advanced hair transplant in Mumbai. Consult Dr. Kunal Sayani for safe, effective hair regrowth and personalized treatment.",
    url: "/services/hair/hair-transplant-in-mumbai",
    siteName: "Dr. Kunal Sayani",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN", // Your requested locale.
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      <ClientComponent/>
    </div>
  )
}
