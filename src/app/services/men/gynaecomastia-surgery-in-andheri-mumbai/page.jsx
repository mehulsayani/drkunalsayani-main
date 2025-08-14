import React from 'react'
import ClientComponent from './ClientComponent';


export const metadata = {
  title: "Best Gynecomastia Surgeon in Andheri, Mumbai | Gynecomastia Surgery",
  description: `Looking for the best gynecomastia surgery in Andheri, Mumbai? Dr. Kunal Sayani specializes in safe, advanced male breast reduction with natural results.`,
  keywords: ``,
    metadataBase: new URL("https://www.drkunalsayani.com"),
    openGraph: {
    title: "Best Gynecomastia Surgeon in Andheri, Mumbai | Gynecomastia Surgery",
    description: "Looking for the best gynecomastia surgery in Andheri, Mumbai? Dr. Kunal Sayani specializes in safe, advanced male breast reduction with natural results.",
    url: "/services/men/gynaecomastia-surgery-in-andheri-mumbai",
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
