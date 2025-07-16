"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

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
  return (
    <Button 
      size={size}
      className={className}
      variant={variant}
      asChild
    >
      <Link href="/#appointment" onClick={onClick}>
        {showIcon && <Calendar className="mr-2 h-4 w-4" />}
        {children}
      </Link>
    </Button>
  );
}