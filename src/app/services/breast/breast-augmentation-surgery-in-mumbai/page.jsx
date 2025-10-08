import React from 'react'
import ClientComponent from './ClientComponent'


export const metadata = {
  title: "Best Breast Augmentation Surgery in Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani is a best breast augmentation surgeon in Mumbai, Offering safe, natural-looking enhancement with personalized care. Book Appointment Now.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Breast Augmentation Surgery in Mumbai | Dr. Kuanl Sayani",
    description: "Dr. Kunal Sayani is a best breast augmentation surgeon in Mumbai, Offering safe, natural-looking enhancement with personalized care. Book Appointment Now.",
    url: "/services/breast/breast-augmentation-surgery-in-mumbai",
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