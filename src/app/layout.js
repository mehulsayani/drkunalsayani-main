// ✅ Import global styles
import "./globals.css";

// ✅ Import Google Fonts via next/font
import { Noto_Sans, Roboto } from "next/font/google";

// ✅ Import Next.js Script component for injecting third-party scripts
import Script from "next/script";

// ✅ Import client layout wrapper to include client-specific logic/UI
import ClientLayout from "./ClientLayout"; // 👈 Client-side layout wrapper

// ✅ Configure Roboto font with multiple weights and styles
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

// ✅ Configure Noto Sans font with basic weights
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "700"],
});

// ✅ Define site metadata for SEO
export const metadata = {
  title: "#1 Best Plastic & Cosmetic Surgeon in Andheri, Mumbai",
  description: `Consult Dr. Kunal Sayani, top rated plastic & cosmetic surgeon in Andheri, Mumbai. Specializing in advanced procedures at a leading cosmetic surgery clinic in Mumbai M.H.`,
  keywords: `
    Best Plastic Surgeon in Mumbai,
    Best Cosmetic Surgeon in Mumbai,
    Plastic Surgery in Mumbai,
    Cosmetic Surgery in Mumbai,
    Cosmetic Surgery in Andheri,
    Best Cosmetic Surgery in Andheri,
    Cosmetic surgeon in Mumbai,
    Best Cosmetic surgeon in Mumbai,
    Plastic Surgery Clinic in Mumbai,
    Best Plastic Surgeon in Andheri Mumbai,
    Plastic Surgeon in Andheri Mumbai,
    Best Plastic Surgeon in Andheri,
    Plastic Surgeon in Andheri,
    plastic surgery cost,
    cosmetic surgeon near me,
    cosmetic surgeries near me, 
  `,
  verification: {
    google: "TRM5uN2AbAEpuMZ-oECmvatuvFw9rdvoKtm-UK8NCsI",
  },
};

// ✅ Root layout component wraps all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${notoSans.variable}`}>
      <head>
        {/* ✅ Open Graph (OG) & Twitter meta tags for social sharing */}
        <meta property="og:title" content="#1 Best Plastic & Cosmetic Surgeon in Andheri, Mumbai" />
        <meta
          property="og:description"
          content="Consult Dr. Kunal Sayani, top rated plastic & cosmetic surgeon in Andheri, Mumbai. Specializing in advanced procedures at a leading cosmetic surgery clinic in Mumbai M.H."
        />
        <meta property="og:image" content="https://drkunalsayani.com/favicon.ico" />
        <meta property="og:url" content="https://drkunalsayani.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Structured Data: Medical Clinic schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Dr.KUNAL SAYANI- Plastic and Cosmetic Surgeon in Andheri, Mumbai",
            "image": "https://www.drkunalsayani.com/_next/image?url=%2Fimages%2Fhomepage%2Faboutdoctor%2Fkunal_sayani1.png&w=384&q=75",
            "@id": "https://www.drkunalsayani.com/",
            "url": "https://www.drkunalsayani.com/",
            "telephone": "+91-9967267567, 02246056767",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "501/502 Sapphire Plaza, Dadabhai Road, Swami Vivekananda Rd, Vile Parle West",
              "addressLocality": "Mumbai",
              "postalCode": "400056",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.105925,
              "longitude": 72.841313
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              "opens": "09:00",
              "closes": "09:00"
            },
            "department": {
              "@type": "PlasticSurgery",
              "name": "Dr.KUNAL SAYANI- Plastic and Cosmetic Surgeon in Andheri, Mumbai",
              "image": "https://www.drkunalsayani.com/_next/image?url=%2Fimages%2Fhomepage%2Fgallery%2Fgallery3.png&w=1080&q=75",
              "telephone": "+91-9967267567, 02246056767"
            }
          }`}
        </script>

        {/* ✅ Structured Data: WebSite schema with SearchAction */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Dr. Kunal Sayani",
            "url": "https://www.drkunalsayani.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.drkunalsayani.com/search/{search_term_string}/1",
              "query-input": "required name=search_term_string"
            }
          }`}
        </script>

        {/* ✅ Basic WebSite schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.drkunalsayani.com/"
          }`}
        </script>

        {/* ✅ Organization Schema with social links */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dr. Kunal Sayani",
            "alternateName": "TVAMEVA AESTHETICS",
            "url": "https://www.drkunalsayani.com/",
            "logo": "https://www.drkunalsayani.com/favicon.ico",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9967267567, 02246056767",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/drkunalsayani.plasticsurgeon",
              "https://www.instagram.com/drkunalsayani",
              "https://www.youtube.com/@drkunalsayani"
            ]
          }`}
        </script>

        {/* ✅ Extended Organization schema with address and founders */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dr. Kunal Sayani",
            "legalName": "TVAMEVA AESTHETICS",
            "url": "https://www.drkunalsayani.com/",
            "logo": "https://www.drkunalsayani.com/favicon.ico",
            "foundingDate": "",
            "founders": [{
              "@type": "Person",
              "name": "Dr. Kunal Sayani"
            }],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "501/502 Sapphire Plaza Dadabhai road, Swami Vivekananda Rd, Vile Parle West",
              "addressLocality": "Dadabhai road, Swami Vivekananda Rd, Vile Parle West",
              "addressRegion": "Mumbai Maharashtra",
              "postalCode": "400056",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Office",
              "telephone": "[+91-9967267567, 02246056767]",
              "email": "contact@drkunalsayani.com"
            },
            "sameAs": [
              "https://www.facebook.com/drkunalsayani.plasticsurgeon",
              "https://www.instagram.com/drkunalsayani",
              "https://www.youtube.com/@drkunalsayani"
            ]
          }`}
        </script>

        {/* ✅ Google Tag Manager (GTM) script */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KP58PKB7');
          `}
        </Script>
      </head>

      <body className="antialiased">
        {/* ✅ GTM fallback for non-JS environments */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KP58PKB7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Google Analytics tracking script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2VGL1KMKTY" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2VGL1KMKTY');
          `}
        </Script>

        {/* ✅ Render the client-side layout with dynamic content */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
