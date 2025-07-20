"use client";

import { Phone, Clock, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PHONE, workingHours } from "@/lib/general";
import { motion } from "framer-motion";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Κλείστε το Ραντεβού σας
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Για την καλύτερη εξυπηρέτησή σας, τα ραντεβού γίνονται αποκλειστικά τηλεφωνικά
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          {/* Phone CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Καλέστε μας τώρα για άμεση εξυπηρέτηση
            </p>
            
            <Button
              size="lg"
              className="w-full h-16 text-lg font-semibold"
              onClick={() => window.location.href = `tel:${PHONE}`}
            >
              <Phone className="mr-3 h-6 w-6" />
              {PHONE}
            </Button>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-muted/50 rounded-lg p-4"
          >
            <div className="flex items-center justify-center mb-3">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-semibold">Ωράριο Λειτουργίας</h3>
            </div>
            <div className="text-center space-y-1">
              <p className="text-sm">{workingHours.weekdays}</p>
              <p className="text-sm text-muted-foreground">{workingHours.saturday}</p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-2">
              <Calendar className="h-4 w-4 text-primary mr-2" />
              <p className="text-sm font-medium">Άμεση Εξυπηρέτηση</p>
            </div>
            <p className="text-xs text-muted-foreground">
              Το ιατρείο μας λειτουργεί με ραντεβού για την καλύτερη οργάνωση 
              και εξυπηρέτηση των ασθενών μας
            </p>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}