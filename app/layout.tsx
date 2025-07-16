import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const robotoFont = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Ιατρική Αποκαταστάση Ηλιούπολη",
  description: "ΣΤΑΥΡΟΣ Ν. ΔΗΜΗΤΡΑΚΟΠΟΥΛΟΣ | Ιατρός Αποκατάστασης – Φυσίατρος. Ιατρείο Ηλιούπολη. Φυσικοθεραπεία, Αποκατάσταση, Πόνος, Σπονδυλική Στήλη, Αρθρώσεις, Νευρολογικά Νοσήματα.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
