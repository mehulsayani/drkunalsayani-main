import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Best Mommy Makeover Surgeon in Andheri Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani offers custom mommy makeover surgery in Mumbai, combining tummy tuck, breast lift, and body contouring to restore your post-pregnancy figure.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Mommy Makeover Surgeon in Andheri Mumbai | Dr. Kunal Sayani",
    description: "Dr. Kunal Sayani offers custom mommy makeover surgery in Mumbai, combining tummy tuck, breast lift, and body contouring to restore your post-pregnancy figure.",
    url: "/services/mommy-makeover/mommy-makeover-package-custom-combination-of-procedures-in-mumbai",
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
