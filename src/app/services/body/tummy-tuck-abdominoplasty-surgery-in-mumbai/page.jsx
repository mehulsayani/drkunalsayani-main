import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Best Tummy Tuck Surgery in Mumbai | Dr. Kunal Sayani – Abdominoplasty Expert",
  description: `Dr. Kunal Sayani offers expert tummy tuck (abdominoplasty) surgery in Mumbai to remove belly fat, tighten muscles, and contour a flat, toned abdomen.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Tummy Tuck Surgery in Mumbai | Dr. Kunal Sayani – Abdominoplasty Exper",
    description: "Dr. Kunal Sayani offers expert tummy tuck (abdominoplasty) surgery in Mumbai to remove belly fat, tighten muscles, and contour a flat, toned abdomen.",
    url: "/services/body/tummy-tuck-abdominoplasty-surgery-in-mumbai",
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
