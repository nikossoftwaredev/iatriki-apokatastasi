"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleIcon } from "@/components/CircleIcon";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2, User, MessageSquare, Stethoscope } from "lucide-react";
import { ADDRESS, PHONE, MAIL, workingHours, MAP_IFRAME } from "@/lib/general";
import { services } from "@/lib/services";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useBooking } from "@/contexts/BookingContext";
import { submitContactForm } from "@/app/actions/contact";
import { useState, useRef } from "react";

export function ContactSection() {
  const { openDialog } = useBooking();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("sending");
    setErrorMsg("");
    const result = await submitContactForm(formData);
    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
      setSelectedService("");
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Κάτι πήγε στραβά. Δοκιμάστε ξανά.");
    }
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
                    { src: "/images/slideshow/1-iatreio_1.jpg", title: "Χώρος αναμονής" },
                    { src: "/images/slideshow/2-iatreio_2.jpg", title: "Χώρος βελτίωσης μυικής απόδοσης" },
                    { src: "/images/slideshow/3-iatreio_3.jpg", title: "Χώρος θεραπευτικών ασκήσεων" },
                    { src: "/images/slideshow/4-iatreio_4.jpg", title: "Γυμναστήριο" },
                    { src: "/images/slideshow/5-iatreio_5.jpg", title: "Χώρος θεραπευτικής μάλαξης και βελονισμού" },
                    { src: "/images/slideshow/6-iatreio_6.jpg", title: "Χώρος εφαρμογής φυσικών μέσων" },
                    { src: "/images/slideshow/7-iatreio_7.jpg", title: "Κρουστικοί Υπέρηχοι" },
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

              <div className="pt-4 border-t">
                <Button
                  size="lg"
                  onClick={() => openDialog()}
                  className="w-full"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Κλείστε Ραντεβού
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Right - Contact Form */}
          <Card id="contact-form" className="h-full">
            <CardHeader>
              <CardTitle>Στείλτε μας μήνυμα</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ονοματεπώνυμο *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Τηλέφωνο
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Υπηρεσία ενδιαφέροντος
                  </label>
                  <input type="hidden" name="service" value={selectedService} />
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="w-full">
                      <Stethoscope className="h-4 w-4 text-gray-400 shrink-0" />
                      <SelectValue placeholder="-- Επιλέξτε υπηρεσία --" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="max-h-60 overflow-y-auto">
                      {services.map((s) => (
                        <SelectItem key={s.id} value={s.title}>{s.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Μήνυμα *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">{errorMsg}</p>
                )}

                {status === "success" ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Το μήνυμά σας στάλθηκε επιτυχώς!</span>
                  </div>
                ) : (
                  <Button type="submit" className="w-full" disabled={status === "sending"}>
                    {status === "sending" ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {status === "sending" ? "Αποστολή..." : "Αποστολή"}
                  </Button>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
