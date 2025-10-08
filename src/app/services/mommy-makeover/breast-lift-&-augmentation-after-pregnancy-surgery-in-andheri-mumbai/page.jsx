import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Breast Lift & Augmentation After Pregnancy Surgery in Mumbai",
  description: `Dr. Kunal Sayani performs breast lift and augmentation surgery in Mumbai to restore breast shape, volume, and firmness after pregnancy and breastfeeding.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Breast Lift & Augmentation After Pregnancy Surgery in Mumbai",
    description: "Dr. Kunal Sayani performs breast lift and augmentation surgery in Mumbai to restore breast shape, volume, and firmness after pregnancy and breastfeeding.",
    url: "/services/mommy-makeover/breast-lift-&-augmentation-after-pregnancy-surgery-in-mumbai",
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
