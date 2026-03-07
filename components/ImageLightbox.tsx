"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogTitle,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface ImageLightboxProps {
  src: string;
  alt?: string;
  children: React.ReactNode;
}

export default function ImageLightbox({ src, alt = "", children }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        {children}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogOverlay className="bg-black/90" />
          <DialogPrimitive.Content
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setOpen(false)}
          >
            <DialogTitle className="sr-only">{alt || "Image preview"}</DialogTitle>

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-50 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Κλείσιμο</span>
            </button>

            {/* Image */}
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </>
  );
}
