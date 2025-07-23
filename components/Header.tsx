"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";
import { navigation } from "@/lib/general";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-primary font-medium tracking-wider" style={{ fontSize: '0.875rem', letterSpacing: '0.05em' }}>
              ΙΑΤΡΙΚΗ ΑΠΟΚΑΤΑΣΤΑΣΗ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              // Determine if this should be a scroll link or navigation
              const isScrollLink = item.href === "/contact";
              const href = isScrollLink ? `/#${item.href.replace("/", "")}` : item.href;
              
              return (
                <Link
                  key={item.name}
                  href={href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
            <AppointmentButton className="ml-4" />
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Μενού</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
              <SheetHeader className="mb-8">
                <SheetTitle>Μενού Πλοήγησης</SheetTitle>
                <SheetDescription className="sr-only">
                  Κύριο μενού πλοήγησης του ιστότοπου
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const isScrollLink = item.href === "/contact";
                  const href = isScrollLink ? `/#${item.href.replace("/", "")}` : item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-6 mt-6 border-t">
                  <AppointmentButton 
                    className="w-full" 
                    size="lg"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
              </nav>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}