import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Best Botox & Anti-Ageing Treatment in Andheri, Mumbai | Dr. Kunal Sayani",
  description: `Dr. Kunal Sayani provides expert Botox anti-ageing treatments in Andheri, Mumbai to smooth wrinkles, reduce fine lines, and restore youthful skin naturally.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Botox & Anti-Ageing Treatment in Andheri, Mumbai | Dr. Kunal Sayani",
    description: "Dr. Kunal Sayani provides expert Botox anti-ageing treatments in Andheri, Mumbai to smooth wrinkles, reduce fine lines, and restore youthful skin naturally.",
    url: "/services/non-surgical/botox-wrinkles-anti-ageing-treatment-in-andheri-mumbai",
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
