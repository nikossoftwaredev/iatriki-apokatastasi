"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";
import { stats } from "@/lib/general";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Μαρτυρίες Ασθενών
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Διαβάστε τις εμπειρίες ασθενών που εμπιστεύτηκαν την υγεία τους 
            στα χέρια μας και βελτίωσαν την ποιότητα ζωής τους.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem 
                key={testimonial.id} 
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard
                  name={testimonial.name}
                  profession={testimonial.profession}
                  treatment={testimonial.treatment}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  date={testimonial.date}
                  imageUrl={testimonial.imageUrl}
                  videoUrl={testimonial.videoUrl}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600">
            Πάνω από <span className="font-semibold text-primary">{stats.satisfiedClients} {stats.clientsLabel.toLowerCase()}</span> εμπιστεύονται 
            την υγεία τους στα χέρια μας
          </p>
        </motion.div>
      </div>
    </section>
  );
}