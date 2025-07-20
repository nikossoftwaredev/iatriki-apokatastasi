import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_NAME, FULL_NAME, PHONE, DOMAIN } from "@/lib/general";
import Script from "next/script";
import { BookingProvider } from "@/contexts/BookingContext";
import GlobalBookingDialog from "@/components/GlobalBookingDialog";

const robotoFont = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Φυσίατρος Ηλιούπολη | Προλοθεραπεία, Πόνοι Μέση Αυχένας | Δρ. Δημητρακόπουλος",
  description: "Φυσίατρος Ηλιούπολη - Προλοθεραπεία για πόνους στη μέση, αυχένα, γόνατο. Φυσικοθεραπεία, βελονισμός, PRP. Τι είναι η προλοθεραπεία; Κλείστε ραντεβού: " + PHONE,
  keywords: "προλοθεραπεία, τι είναι η προλοθεραπεία, φυσίατρος ηλιούπολη, φυσικοθεραπεία ηλιούπολη, πόνοι στη μέση ηλιούπολη, πόνοι στον αυχένα ηλιούπολη, πόνοι στο γόνατο ηλιούπολη, βελονισμός ηλιούπολη, prp ηλιούπολη, prolotherapy ηλιούπολη",
  authors: [{ name: FULL_NAME }],
  alternates: {
    canonical: `https://${DOMAIN}`,
  },
  openGraph: {
    title: "Φυσίατρος Ηλιούπολη | Προλοθεραπεία & Θεραπεία Πόνου",
    description: "Εξειδικευμένες θεραπείες για πόνους στη μέση, αυχένα, γόνατο. Προλοθεραπεία, PRP, βελονισμός στην Ηλιούπολη.",
    type: "website",
    locale: "el_GR",
    url: `https://${DOMAIN}`,
    siteName: BUSINESS_NAME,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual Google verification code
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `https://${DOMAIN}`,
  "name": BUSINESS_NAME,
  "description": "Ιατρείο Φυσικής Ιατρικής και Αποκατάστασης στην Ηλιούπολη. Εξειδίκευση σε προλοθεραπεία, θεραπεία πόνου, PRP, βελονισμό.",
  "url": `https://${DOMAIN}`,
  "telephone": PHONE,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ανδρούτσου 22",
    "addressLocality": "Ηλιούπολη",
    "addressRegion": "Αττική",
    "postalCode": "16341",
    "addressCountry": "GR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.9307773,
    "longitude": 23.7548781
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "13:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "17:00",
      "closes": "21:00"
    }
  ],
  "priceRange": "€€",
  "medicalSpecialty": ["PhysicalMedicine", "PhysicalTherapy", "PainManagement"],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Προλοθεραπεία",
      "description": "Μη χειρουργική αναγεννητική θεραπεία για συνδέσμους και τένοντες"
    },
    {
      "@type": "MedicalProcedure",
      "name": "PRP Θεραπεία",
      "description": "Αυτόλογες εγχύσεις αιμοπεταλίων για αναγέννηση ιστών"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Βελονισμός",
      "description": "Ιατρικός βελονισμός για θεραπεία πόνου"
    }
  ],
  "areaServed": {
    "@type": "City",
    "name": "Ηλιούπολη",
    "containedInPlace": {
      "@type": "State",
      "name": "Αττική"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${robotoFont.variable} font-sans antialiased`}
      >
        <BookingProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <GlobalBookingDialog />
        </BookingProvider>
      </body>
    </html>
  );
}
