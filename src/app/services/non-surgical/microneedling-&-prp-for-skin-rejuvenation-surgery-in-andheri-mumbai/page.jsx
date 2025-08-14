import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Microneedling & PRP for Skin Rejuvenation in Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani offers PRP with microneedling in Andheri, Mumbai to reduce acne scars, pigmentation & fine lines while restoring firm, radiant skin.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Microneedling & PRP for Skin Rejuvenation in Mumbai | Dr. Kunal Sayani",
    description: "Dr. Kunal Sayani offers PRP with microneedling in Andheri, Mumbai to reduce acne scars, pigmentation & fine lines while restoring firm, radiant skin.",
    url: "/services/non-surgical/microneedling-&-prp-for-skin-rejuvenation-surgery-in-andheri-mumbai",
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
