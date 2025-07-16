"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleIcon } from "@/components/CircleIcon";
import { Phone, Mail, MapPin, Clock, User, Calendar, MessageSquare, Briefcase } from "lucide-react";
import { ADDRESS, PHONE, PHONE2, MAIL, workingHours, services, MAP_IFRAME } from "@/lib/general";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    
    // Simulate form submission (replace with actual API call)
    try {
      // Here you would normally send the form data to your server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage("Το αίτημά σας ελήφθη επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setMessage("Υπήρξε κάποιο πρόβλημα. Παρακαλώ δοκιμάστε ξανά.");
    }
    
    setLoading(false);
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Επικοινωνία</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Επικοινωνήστε μαζί μας για να κλείσετε το ραντεβού σας
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/clinic-exterior.jpg"
                  alt="Ιατρείο Φυσικής Ιατρικής και Αποκατάστασης"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-2xl font-bold">Επισκεφτείτε μας</h3>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Στοιχεία Επικοινωνίας</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`https://maps.google.com/?q=${ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-primary transition-colors"
                >
                  <CircleIcon
                    color="#06b6d4"
                    size={48}
                    icon={<MapPin className="w-5 h-5" />}
                  />
                  <span>{ADDRESS}</span>
                </a>

                <div>
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-4 hover:text-primary transition-colors mb-2"
                  >
                    <CircleIcon
                      color="#06b6d4"
                      size={48}
                      icon={<Phone className="w-5 h-5" />}
                    />
                    <span>{PHONE}</span>
                  </a>                
                </div>

                <a
                  href={`mailto:${MAIL}`}
                  className="flex items-center gap-4 hover:text-primary transition-colors"
                >
                  <CircleIcon
                    color="#06b6d4"
                    size={48}
                    icon={<Mail className="w-5 h-5" />}
                  />
                  <span>{MAIL}</span>
                </a>

                <div className="flex items-center gap-4">
                  <CircleIcon
                    color="#06b6d4"
                    size={48}
                    icon={<Clock className="w-5 h-5" />}
                  />
                  <div>
                    <p className="font-medium">Ωράριο Λειτουργίας</p>
                    <p className="text-sm text-gray-600">{workingHours.weekdays}</p>
                    <p className="text-sm text-gray-600">{workingHours.saturday}</p>
                    <p className="text-sm text-gray-600 mt-1">{workingHours.byAppointment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="overflow-hidden">
              <iframe
                src={MAP_IFRAME}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </Card>
          </div>

          {/* Appointment Form */}
          <div>
            <Card id="appointment">
              <CardHeader>
                <CardTitle>Κλείστε Ραντεβού</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ονοματεπώνυμο *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Τηλέφωνο *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="69XXXXXXXX"
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Υπηρεσία *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                      >
                        <option value="">Επιλέξτε υπηρεσία</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Προτιμώμενη Ημερομηνία
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Μήνυμα
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    {loading ? "Αποστολή..." : "Αποστολή Αιτήματος"}
                  </Button>

                  {message && (
                    <p className={`text-center text-sm ${message.includes("ελήφθη") ? "text-green-600" : "text-red-600"}`}>
                      {message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}