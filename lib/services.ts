export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  iconColor: string;
  markdownFile: string;
  category: "therapeutic" | "diagnostic-support";
}

export const services: Service[] = [
  {
    id: "1",
    slug: "prolotherapeia",
    title: "Προλοθεραπεία (prolotherapy)",
    shortDescription:
      "Μη χειρουργική αναγεννητική μέθοδος για συνδέσμους και τένοντες αρθρώσεων.",
    iconName: "bone",
    iconColor: "#f97316", // Orange - regenerative therapy
    markdownFile: "prolotherapeia.md",
    category: "therapeutic",
  },
  {
    id: "2",
    slug: "fysiotherapeia",
    title: "Φυσικοθεραπεία",
    shortDescription:
      "Ιατρικός βελονισμός, ηλεκτροβελονισμός για μυοσκελετικά σύνδρομα και νευρολογικές παθήσεις.",
    iconName: "hand",
    iconColor: "#10b981", // Emerald green - healing/therapy
    markdownFile: "fysiotherapeia.md",
    category: "diagnostic-support",
  },
  {
    id: "13",
    slug: "prp-therapeia",
    title: "Αυτόλογα Εν. Αιμοπετάλια (PRP)",
    shortDescription:
      "Μη χειρουργική θεραπεία με χρήση των αιμοπεταλίων του ασθενή.",
    iconName: "heart",
    iconColor: "#ef4444", // Red - blood/cardiovascular
    markdownFile: "prp-therapeia.md",
    category: "therapeutic",
  },
  {
    id: "5",
    slug: "botox-dysport",
    title: "Εφαρμογή Botox",
    shortDescription:
      "Θεραπευτικές εγχύσεις για σπαστικότητα και νευρολογικές διαταραχές.",
    iconName: "syringe",
    iconColor: "#8b5cf6", // Purple - pharmaceutical/injection
    markdownFile: "botox-dysport.md",
    category: "therapeutic",
  },
  {
    id: "8",
    slug: "ozonotherapeia",
    title: "Οξυγόνο-Οζονοθεραπεία",
    shortDescription:
      "Διέγερση του ανοσοποιητικού συστήματος και των μηχανισμών ίασης.",
    iconName: "atom",
    iconColor: "#06b6d4", // Cyan - oxygen/air
    markdownFile: "ozonotherapeia.md",
    category: "therapeutic",
  },
  {
    id: "3",
    slug: "diagnosi-apokatastasi",
    title: "Διάγνωση και Αποκατάσταση",
    shortDescription:
      "Αντιμετώπιση αθλητικών κακώσεων, καταγμάτων, μυοσκελετικών, νευρολογικών και ρευματολογικών προβλημάτων.",
    iconName: "stethoscope",
    iconColor: "#0ea5e9", // Sky blue - medical diagnosis
    markdownFile: "diagnosi-apokatastasi.md",
    category: "diagnostic-support",
  },
  {
    id: "6",
    slug: "therapeftiki-gymnastiki",
    title: "Ειδική θεραπευτική γυμναστική",
    shortDescription:
      "Εξειδικευμένα θεραπευτικά πρωτόκολλα για την αποκατάσταση.",
    iconName: "dumbbell",
    iconColor: "#22c55e", // Green - physical exercise/health
    markdownFile: "therapeftiki-gymnastiki.md",
    category: "diagnostic-support",
  },
  {
    id: "7",
    slug: "shock-wave",
    title: "Κρουστικοί Υπέρηχοι",
    shortDescription:
      "Θεραπεία τενοντίτιδων, μυϊκών πόνων, επικονδυλίτιδας και περιαρθρίτιδας.",
    iconName: "waves",
    iconColor: "#3b82f6", // Blue - wave therapy
    markdownFile: "shock-wave.md",
    category: "diagnostic-support",
  },
  {
    id: "9",
    slug: "neuraltherapy",
    title: "Neuraltherapy",
    shortDescription:
      "Αντιμετώπιση οξέων και χρόνιων πόνων και λειτουργικών διαταραχών.",
    iconName: "brain",
    iconColor: "#ec4899", // Pink - neural/brain therapy
    markdownFile: "neuraltherapy.md",
    category: "therapeutic",
  },
  {
    id: "10",
    slug: "mesotherapeia",
    title: "Εφαρμογή Μεσοθεραπείας",
    shortDescription:
      "Μικροεγχύσεις βιταμινών και υαλουρονικού οξέος για αναζωογόνηση.",
    iconName: "droplet",
    iconColor: "#14b8a6", // Teal - fluid/injection therapy
    markdownFile: "mesotherapeia.md",
    category: "therapeutic",
  },
  {
    id: "11",
    slug: "orthotika-pelmata",
    title: "Κατασκευή ειδικών ορθοτικών πελμάτων",
    shortDescription:
      "Για μεταταρσαλγία, άκανθα πτέρνας και παραμορφώσεις ποδιών.",
    iconName: "footprints",
    iconColor: "#a855f7", // Purple - foot orthotics
    markdownFile: "orthotika-pelmata.md",
    category: "diagnostic-support",
  },
  {
    id: "14",
    slug: "posture-assessment",
    title: "Αξιολόγηση και Διόρθωση Στάσης Σώματος",
    shortDescription:
      "Ανάλυση και διόρθωση στάσης σώματος για πρόληψη και θεραπεία μυοσκελετικών προβλημάτων.",
    iconName: "footprints",
    iconColor: "#e11d48", // Rose - posture assessment
    markdownFile: "posture-assessment.md",
    category: "diagnostic-support",
  },
  {
    id: "15",
    slug: "iatrikos-velonismos",
    title: "Ιατρικός Βελονισμός",
    shortDescription:
      "Παραδοσιακή κινεζική θεραπευτική μέθοδος για αντιμετώπιση πόνου και αποκατάσταση της ισορροπίας του οργανισμού.",
    iconName: "activity",
    iconColor: "#84cc16", // Lime - acupuncture/traditional medicine
    markdownFile: "iatrikos-velonismos.md",
    category: "therapeutic",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: "therapeutic" | "diagnostic-support"): Service[] {
  return services.filter(service => service.category === category);
}

export const serviceCategories = {
  therapeutic: {
    title: "Θεραπευτικές Τεχνικές",
    description: "Σύγχρονες θεραπευτικές μέθοδοι για την αντιμετώπιση του πόνου"
  },
  "diagnostic-support": {
    title: "Διαγνωστικές & Υποστηρικτικές Υπηρεσίες",
    description: "Εξειδικευμένες διαγνωστικές εξετάσεις και υποστηρικτικές θεραπείες"
  }
};