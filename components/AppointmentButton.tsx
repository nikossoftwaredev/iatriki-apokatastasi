"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

interface AppointmentButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  showIcon?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function AppointmentButton({ 
  size = "default", 
  className = "bg-primary hover:bg-primary/90",
  variant = "default",
  showIcon = true,
  children = "Κλείστε Ραντεβού",
  onClick
}: AppointmentButtonProps) {
  const { openDialog } = useBooking();

  const handleClick = () => {
    openDialog();
    if (onClick) onClick();
  };

  return (
    <Button 
      size={size}
      className={className}
      variant={variant}
      onClick={handleClick}
    >
      {showIcon && <Calendar className="mr-2 h-4 w-4" />}
      {children}
    </Button>
  );
}