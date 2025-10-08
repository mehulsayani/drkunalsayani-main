import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Best Breast Lift (Mastopexy) Surgery in Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani offers breast lift (mastopexy) surgery in Mumbai to restore youthful, lifted breasts with expert shaping and natural-looking results.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Breast Lift (Mastopexy) Surgery in Mumbai | Dr. Kunal Sayan",
    description: "Dr. Kunal Sayani offers breast lift (mastopexy) surgery in Mumbai to restore youthful, lifted breasts with expert shaping and natural-looking results.",
    url: "/services/breast/breast-lift-mastopexy-with-shaping-surgery-in-mumbai",
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
