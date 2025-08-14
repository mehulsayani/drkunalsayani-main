import React from 'react'
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Best Liposuction Surgeon in Andheri, Mumbai | Dr. Kunal Sayani",
  description: `Looking for expert liposuction surgery in Andheri, Mumbai? Dr. Kunal Sayani specializes in advanced body contouring and fat reduction with safe, natural-looking results.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Liposuction Surgeon in Andheri, Mumbai | Dr. Kunal Sayani",
    description: "Looking for expert liposuction surgery in Andheri, Mumbai? Dr. Kunal Sayani specializes in advanced body contouring and fat reduction with safe, natural-looking results.",
    url: "/services/body/liposuction-surgeon-in-andheri-mumbai",
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
