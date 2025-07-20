"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleIcon } from "@/components/CircleIcon";
import { Phone, Mail, MapPin, Clock, CalendarDays } from "lucide-react";
import { ADDRESS, PHONE, MAIL, workingHours, MAP_IFRAME, DOMAIN } from "@/lib/general";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useBooking } from "@/contexts/BookingContext";

export function ContactSection() {
  const { openDialog } = useBooking();

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
              <CardHeader>
                <CardTitle>Ο χώρος μας</CardTitle>
                <p className="text-sm text-gray-600">
                  Ένας σύγχρονος και πλήρως εξοπλισμένος χώρος αποκατάστασης στην καρδιά της Ηλιούπολης
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {[
                      { src: `https://www.${DOMAIN}/images/stories/slideshow/1-iatreio_1.jpg`, title: "Χώρος αναμονής" },
                      { src: `https://www.${DOMAIN}/images/stories/slideshow/2-iatreio_2.jpg`, title: "Χώρος βελτίωσης μυικής απόδοσης" },
                      { src: `https://www.${DOMAIN}/images/stories/slideshow/3-iatreio_3.jpg`, title: "Χώρος θεραπευτικών ασκήσεων" },
                      { src: `https://www.${DOMAIN}/images/stories/slideshow/4-iatreio_4.jpg`, title: "Γυμναστήριο" },
                      { src: `https://www.${DOMAIN}/images/stories/slideshow/5-iatreio_5.jpg`, title: "Χώρος θεραπευτικής μάλαξης και βελονισμού" },
                      { src: `https://www.${DOMAIN}/images/stories/slideshow/6-iatreio_6.jpg`, title: "Χώρος εφαρμογής φυσικών μέσων" },
                      { src: `https://www.${DOMAIN}/images/stories/slideshow/7-iatreio_7.jpg`, title: "Κρουστικοί Υπέρηχοι" },
                    ].map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-64">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h4 className="text-white font-semibold">
                              {image.title}
                            </h4>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex left-2" />
                  <CarouselNext className="hidden sm:flex right-2" />
                </Carousel>
              </CardContent>
            </Card>

            <Card>
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

          {/* Appointment CTA */}
          <div>
            <Card id="appointment" className="h-full">
              <CardHeader>
                <CardTitle>Κλείστε Ραντεβού</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-8">
                  <div className="mb-6">
                    <CalendarDays className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Προγραμματίστε την Επίσκεψή σας</h3>
                    <p className="text-gray-600">
                      Για την καλύτερη εξυπηρέτησή σας, τα ραντεβού κλείνονται τηλεφωνικά
                    </p>
                  </div>
                  
                  <Button
                    size="lg"
                    onClick={() => openDialog()}
                    className="w-full md:w-auto"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Κάντε Ραντεβού
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Γιατί να μας επιλέξετε</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Άμεση εξυπηρέτηση και ευέλικτο πρόγραμμα ραντεβού</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Εξατομικευμένη θεραπευτική προσέγγιση</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Σύγχρονος εξοπλισμός και μέθοδοι θεραπείας</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Πάνω από 30 χρόνια εμπειρίας</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="text-sm font-medium mb-2">Τηλεφωνήστε μας τώρα</p>
                  <a 
                    href={`tel:${PHONE}`}
                    className="text-xl font-bold text-primary hover:underline"
                  >
                    {PHONE}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}