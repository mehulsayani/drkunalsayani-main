import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Best Breast & Axillary Reduction Surgery in Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani offers advanced breast reduction and axillary breast excision surgery in Andheri, Mumbai to relieve discomfort and enhance body contour.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Breast & Axillary Reduction Surgery in Mumbai | Dr. Kunal Sayani",
    description: "Dr. Kunal Sayani offers advanced breast reduction and axillary breast excision surgery in Andheri, Mumbai to relieve discomfort and enhance body contour.",
    url: "/services/breast/breast-reduction-&-axillary-breasts-excision-surgery-in-andheri-mumbai",
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
