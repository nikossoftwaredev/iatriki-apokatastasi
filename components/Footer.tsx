"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { FULL_NAME, PHONE, MAIL, ADDRESS, navigation, social } from "@/lib/general";
import { services } from "@/lib/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{FULL_NAME}</h3>
            <p className="text-gray-400 mb-4">
              Εξειδικευμένες υπηρεσίες φυσικής ιατρικής και αποκατάστασης με σύγχρονες μεθόδους θεραπείας.
            </p>
            <div className="flex space-x-4">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Γρήγοροι Σύνδεσμοι</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Υπηρεσίες</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Επικοινωνία</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://maps.google.com/?q=${ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-primary transition-colors"
                >
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{ADDRESS}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>{PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${MAIL}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>{MAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © Copyright {currentYear} Δρ. Σταύρος Δημητρακόπουλος. Όλα τα δικαιώματα κατοχυρωμένα.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Made by{" "}
                <a
                  href="https://github.com/nikos-dimitrakopoulos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Nikos Dimitrakopoulos
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}