import { Metadata } from "next";
import { ContactSection } from "@/components/sections/Contact";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FULL_NAME, ADDRESS, PHONE, PHONE2, MAIL, workingHours } from "@/lib/general";

export const metadata: Metadata = {
  title: `Επικοινωνία - ${FULL_NAME}`,
  description: "Επικοινωνήστε μαζί μας για να κλείσετε ραντεβού ή για οποιαδήποτε πληροφορία",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-16 lg:py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Επικοινωνία
            </h1>
            <p className="text-lg text-gray-600">
              Είμαστε εδώ για να σας βοηθήσουμε. Επικοινωνήστε μαζί μας για να 
              κλείσετε ραντεβού ή για οποιαδήποτε απορία σχετικά με τις υπηρεσίες μας.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Address */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Διεύθυνση</h3>
              <p className="text-gray-600">{ADDRESS}</p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Τηλέφωνο</h3>
              <p className="text-gray-600">
                <a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE}</a>           
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href={`mailto:${MAIL}`} className="hover:text-primary break-all">
                  {MAIL}
                </a>
              </p>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ωράριο</h3>
              <p className="text-gray-600 text-sm">
                {workingHours.weekdays}
                <br />
                {workingHours.byAppointment}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </div>
  );
}