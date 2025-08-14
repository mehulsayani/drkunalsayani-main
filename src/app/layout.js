import "./globals.css";
import { Noto_Sans, Roboto } from "next/font/google";
import Script from "next/script";
import ClientLayout from "./ClientLayout";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "700"],
});

export const metadata = {
  title: "#1 Best Plastic & Cosmetic Surgeon in Andheri, Mumbai",
  description:
    "Consult Dr. Kunal Sayani, top rated plastic & cosmetic surgeon in Andheri, Mumbai. Specializing in advanced procedures at a leading cosmetic surgery clinic in Mumbai M.H.",
  keywords: `Best Plastic Surgeon in Mumbai, Best Cosmetic Surgeon in Mumbai, Plastic Surgery in Mumbai, Cosmetic Surgery in Mumbai, Cosmetic Surgery in Andheri, Best Cosmetic Surgery in Andheri, Cosmetic surgeon in Mumbai, Best Cosmetic surgeon in Mumbai, Plastic Surgery Clinic in Mumbai, Best Plastic Surgeon in Andheri Mumbai, Plastic Surgeon in Andheri Mumbai, Best Plastic Surgeon in Andheri, Plastic Surgeon in Andheri, plastic surgery cost, cosmetic surgeon near me, cosmetic surgeries near me `,
  verification: {
    google: "TRM5uN2AbAEpuMZ-oECmvatuvFw9rdvoKtm-UK8NCsI",
  },
  metadataBase: new URL("https://www.drkunalsayani.com"),
  openGraph: {
    title: "#1 Best Plastic & Cosmetic Surgeon in Andheri, Mumbai",
    description:
      "Consult Dr. Kunal Sayani, top rated plastic & cosmetic surgeon in Andheri, Mumbai. Specializing in advanced procedures at a leading cosmetic surgery clinic in Mumbai M.H.",
    url: "/", // Base URL for the site. Child pages can override this.
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

export default function RootLayout({ children }) {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Dr. Kunal Sayani",
        url: "https://www.drkunalsayani.com/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.drkunalsayani.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "MedicalClinic",
        name: "Dr. Kunal Sayani - Plastic and Cosmetic Surgeon",
        image:
          "https://www.drkunalsayani.com/images/your-main-clinic-photo.jpg", // ✅ CORRECTED: Use a direct, absolute URL to a high-quality source image.
        url: "https://www.drkunalsayani.com/",
        logo: "https://www.drkunalsayani.com/images/your-logo.png", // ✅ CORRECTED: Use a direct URL to a proper logo file, not a favicon.
        telephone: "+919967267567",
        priceRange: "$$$", // Optional: Indicate price range (e.g., $, $$, $$$)
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "501/502 Sapphire Plaza, Dadabhai Road, Swami Vivekananda Rd, Vile Parle West",
          addressLocality: "Mumbai", // ✅ CORRECTED: City
          addressRegion: "MH", // ✅ CORRECTED: State (abbreviation is common)
          postalCode: "400056",
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          // Highly recommended for local businesses
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        sameAs: [
          // Social media and other official profiles
          "https://www.facebook.com/drkunalsayani.plasticsurgeon",
          "https://www.instagram.com/drkunalsayani",
          "https://www.youtube.com/@drkunalsayani",
        ],
        medicalSpecialty: "PlasticSurgery", // ✅ CORRECTED: Uses the valid 'medicalSpecialty' property
        founder: {
          "@type": "Person",
          name: "Dr. Kunal Sayani",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${roboto.variable} ${notoSans.variable}`}>
      <head>
        {/* ✅ Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KP58PKB7');
          `}
        </Script>
        {/* ✅ Single, Combined, and Corrected JSON-LD Schema Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
      </head>

      <body className="antialiased">
        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KP58PKB7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2VGL1KMKTY"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2VGL1KMKTY');
          `}
        </Script>

        {/* ✅ Client Layout Wrapper */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
