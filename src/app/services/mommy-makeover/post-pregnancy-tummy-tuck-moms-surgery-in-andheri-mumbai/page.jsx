import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Post-Pregnancy Tummy Tuck Surgery in Mumbai ",
  description: `Dr. Kunal Sayani offers post-pregnancy tummy tuck surgery in Mumbai to restore a flat, toned abdomen and boost body confidence after childbirth.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Post-Pregnancy Tummy Tuck Surgery in Mumbai",
    description: "Dr. Kunal Sayani offers post-pregnancy tummy tuck surgery in Mumbai to restore a flat, toned abdomen and boost body confidence after childbirth.",
    url: "/services/mommy-makeover/post-pregnancy-tummy-tuck-moms-surgery-in-mumbai",
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
