import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_NAME } from "@/lib/general";

const robotoFont = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Ιατρική Αποκατάσταση Ηλιούπολη | Δρ. Σταύρος Ν. Δημητρακόπουλος",
  description: BUSINESS_NAME + " | Ιατρείο Φυσικής Ιατρικής και Αποκατάστασης στην Ηλιούπολη. Εξειδίκευση σε θεραπείες πόνου, αποκατάσταση, μυοσκελετικές παθήσεις.",
  keywords: "φυσίατρος, αποκατάσταση, φυσικοθεραπεία, ηλιούπολη, prp, prolotherapy, βελονισμός",
  openGraph: {
    title: "Ιατρική Αποκατάσταση Ηλιούπολη | Δρ. Σταύρος Ν. Δημητρακόπουλος",
    description: "Ολοκληρωμένες υπηρεσίες φυσικής ιατρικής και αποκατάστασης",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body
        className={`${robotoFont.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
