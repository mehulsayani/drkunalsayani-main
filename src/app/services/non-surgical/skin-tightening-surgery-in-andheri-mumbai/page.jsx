import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Non-Surgical Skin Tightening in Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani offers advanced non-surgical skin tightening in Andheri, Mumbai to firm sagging skin, smooth wrinkles & restore youthful facial contours.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Non-Surgical Skin Tightening in Mumbai | Dr. Kunal Sayani",
    description: "Dr. Kunal Sayani offers advanced non-surgical skin tightening in Andheri, Mumbai to firm sagging skin, smooth wrinkles & restore youthful facial contours.",
    url: "/services/non-surgical/skin-tightening-surgery-in-andheri-mumbai",
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
