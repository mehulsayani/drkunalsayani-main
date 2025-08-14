import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Laser Skin Rejuvenation Treatment in Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani provides expert laser skin rejuvenation in Andheri, Mumbai to treat acne scars, dark spots, fine lines, & improve skin tone and clarity.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Laser Skin Rejuvenation Treatment in Mumbai | Dr. Kunal Sayani",
    description: "Dr. Kunal Sayani provides expert laser skin rejuvenation in Andheri, Mumbai to treat acne scars, dark spots, fine lines, & improve skin tone and clarity.",
    url: "/services/non-surgical/laser-skin-rejuvenation-treatment-in-andheri-mumbai",
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
