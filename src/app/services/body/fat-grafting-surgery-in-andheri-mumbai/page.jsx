import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Best Fat Grafting & Body Contouring in Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani offers fat grafting surgery in Andheri, Mumbai to restore lost volume, enhance curves, and achieve natural facial or body contour results.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Fat Grafting & Body Contouring in Mumbai | Dr. Kunal Sayani",
    description: "Dr. Kunal Sayani offers fat grafting surgery in Andheri, Mumbai to restore lost volume, enhance curves, and achieve natural facial or body contour results.",
    url: "/services/body/fat-grafting-surgery-in-andheri-mumbai",
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
