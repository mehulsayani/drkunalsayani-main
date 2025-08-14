import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Best Buttock Augmentation (BBL) Surgery in Andheri, Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani offers expert buttock augmentation (BBL) surgery in Andheri, Mumbai. Achieve fuller, natural curves with safe and aesthetic results.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Dr. Kunal Sayani offers expert buttock augmentation (BBL) surgery in Andheri, Mumbai. Achieve fuller, natural curves with safe and aesthetic results.",
    description: "Dr. Kunal Sayani offers expert buttock augmentation (BBL) surgery in Andheri, Mumbai. Achieve fuller, natural curves with safe and aesthetic results.",
    url: "/services/body/buttock-augmentation-bbl-surgery-in-andheri-mumbai",
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
