import "./globals.css";
import { Noto_Sans, Roboto } from "next/font/google";
import Script from "next/script";
import ClientLayout from "./ClientLayout"; // 👈 Import new client wrapper

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
  title:
    "#1 Best Plastic & Cosmetic Surgeon in Andheri, Mumbai | Dr. Kunal Sayani ",
  description: `Consult Dr. Kunal Sayani, top rated plastic & cosmetic surgeon in Andheri, 
  Mumbai. Specializing in advanced procedures at a leading cosmetic surgery clinic in Mumbai M.H.`,
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${notoSans.variable}`}>
      <head>
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KP58PKB7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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

        {/* Wrap client components here */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
