import { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import FilterableGallery from "@/components/gallery/FilterableGallery";

export const metadata: Metadata = {
  title: "Ψηφιακό Υλικό - Ιατρείο Φυσικής Ιατρικής και Αποκατάστασης",
  description: "Ψηφιακό υλικό από το ιατρείο, τον εξοπλισμό και τις θεραπευτικές διαδικασίες",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <GalleryHero />
      <FilterableGallery />
    </div>
  );
}