"use client";

import BookingDialog from "@/components/BookingDialog";
import { useBooking } from "@/contexts/BookingContext";

export default function GlobalBookingDialog() {
  const { isOpen, closeDialog } = useBooking();
  
  return <BookingDialog open={isOpen} onOpenChange={closeDialog} />;
}