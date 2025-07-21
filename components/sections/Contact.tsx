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

        {/* 2x2 Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Left - Our Place Carousel */}
          <Card className="overflow-hidden h-full">
            <CardHeader>
              <CardTitle>Ο χώρος μας</CardTitle>
              <p className="text-sm text-gray-600">
                Ένας σύγχρονος και πλήρως εξοπλισμένος χώρος αποκατάστασης
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
                      <div className="relative h-[350px]">
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

          {/* Top Right - Google Maps */}
          <Card className="overflow-hidden h-full">
            <CardHeader>
              <CardTitle>Βρείτε μας στον χάρτη</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src={MAP_IFRAME}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </CardContent>
          </Card>

          {/* Bottom Left - Contact Information */}
          <Card className="h-full">
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

              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 hover:text-primary transition-colors"
              >
                <CircleIcon
                  color="#06b6d4"
                  size={48}
                  icon={<Phone className="w-5 h-5" />}
                />
                <span>{PHONE}</span>
              </a>

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

          {/* Bottom Right - Appointment Schedule */}
          <Card id="appointment" className="h-full">
            <CardHeader>
              <CardTitle>Κλείστε Ραντεβού</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center h-[calc(100%-5rem)]">
              <div className="text-center">
                <CalendarDays className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-gray-600 mb-6">
                  Τα ραντεβού κλείνονται μόνο τηλεφωνικά
                </p>
                
                <Button
                  size="lg"
                  onClick={() => openDialog()}
                  className="w-full max-w-xs mx-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Κάντε Ραντεβού
                </Button>
                
                <div className="mt-4">
                  <a 
                    href={`tel:${PHONE}`}
                    className="text-lg font-bold text-primary hover:underline"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}