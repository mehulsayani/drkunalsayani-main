import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Best Genital Cosmetic Surgeon in Andheri Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani offers genital cosmetic surgery in Andheri, Mumbai to restore feminine wellness, improve appearance, and boost confidence post-pregnancy.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Genital Cosmetic Surgeon in Andheri Mumbai | Dr. Kunal Sayani",
    description: "Dr. Kunal Sayani offers genital cosmetic surgery in Andheri, Mumbai to restore feminine wellness, improve appearance, and boost confidence post-pregnancy.",
    url: "/services/mommy-makeover/genital-cosmetic-surgeries-in-andheri-mumbai",
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
