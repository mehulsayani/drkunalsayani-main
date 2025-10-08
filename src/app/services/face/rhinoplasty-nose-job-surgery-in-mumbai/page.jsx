import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "",
  description: `Looking for the best rhinoplasty surgeon in Mumbai? Meet Dr. Kunal Sayani — expert in advanced nose reshaping surgery for natural, balanced results.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "",
    description: "Looking for the best rhinoplasty surgeon in Mumbai? Meet Dr. Kunal Sayani — expert in advanced nose reshaping surgery for natural, balanced results.",
    url: "/services/face/rhinoplasty-nose-job-surgery-in-mumbai",
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
