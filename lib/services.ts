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
    title: "Προλοθεραπεία",
    shortDescription:
      "Μη χειρουργική, αναγεννητική, θεραπευτική μέθοδος για μυοσκελετικούς πόνους (οξύ και χρόνιο πόνο, αυχενικό σύνδρομο, οσφυαλγία, ινομυαλγία, αρθρίτιδα, τενοντοπάθειες, αθλητικές κακώσεις, μετατραυματικές αρθρίτιδες).",
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
      "Ολοκληρωμένα προγράμματα φυσικοθεραπείας ειδικές τεχνικές κινητοποίησης, κινησιοθεραπεία.",
    iconName: "hand",
    iconColor: "#10b981", // Emerald green - healing/therapy
    markdownFile: "fysiotherapeia.md",
    category: "therapeutic",
  },
  {
    id: "13",
    slug: "prp-therapeia",
    title: "PRP (Platelet Rich Plasma)",
    shortDescription:
      "Αυτόλογη κυτταρική αναγέννηση - βιοδιέγερση κυττάρων δέρματος, μυών, χόνδρου, τενόντων, μέσω ένεσης με εμπλουτισμένο πλάσμα αίματος με αιμοπετάλια του ίδιου του ασθενούς. Για παθήσεις χόνδρων αρθρώσεων, κακώσεις - βλάβες μυών, τενόντων.",
    iconName: "heart",
    iconColor: "#ef4444", // Red - blood/cardiovascular
    markdownFile: "prp-therapeia.md",
    category: "therapeutic",
  },
  {
    id: "5",
    slug: "botox-dysport",
    title: "Έγχυση BOTOX-DYSPORT",
    shortDescription:
      "Αντιμετώπιση σπαστικότητας και δυστονιών, ρυτίδων κλπ.",
    iconName: "syringe",
    iconColor: "#8b5cf6", // Purple - pharmaceutical/injection
    markdownFile: "botox-dysport.md",
    category: "therapeutic",
  },
  {
    id: "8",
    slug: "ozonotherapeia",
    title: "Οξυγονο-οζονοθεραπεία",
    shortDescription:
      "Για αντιμετώπιση μυοσκελετικού πόνου, κυτταρίτιδας, αλλεργικών παθήσεων κλπ.",
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
      "Με πρωτόκολλα θεραπείας για βελτίωση μυϊκής αποδοσης, ευκαμψίας και φυσικής κατάστασης.",
    iconName: "dumbbell",
    iconColor: "#22c55e", // Green - physical exercise/health
    markdownFile: "therapeftiki-gymnastiki.md",
    category: "therapeutic",
  },
  {
    id: "7",
    slug: "shock-wave",
    title: "Κρουστικά κύματα",
    shortDescription:
      "Shock wave για εξειδικευμένη αποκατάσταση σε τενοντίτιδες, μυϊκούς πόνους, επικονδυλίτιδα, περιαρθρίτιδα, μυοπεριτοναϊκό σύνδρομο, οσφυαλγία, αυχεναλγία, πελματιαία απονευρωσίτιδα, άκανθα πτέρνας κλπ.",
    iconName: "waves",
    iconColor: "#3b82f6", // Blue - wave therapy
    markdownFile: "shock-wave.md",
    category: "therapeutic",
  },
  {
    id: "9",
    slug: "neuraltherapy",
    title: "Neuraltherapy",
    shortDescription:
      "Η μέθοδος 'Neuraltherapy' είναι μία πρωτοποριακή ιατρική τεχνική, που λειτουργεί και έχει σαν στόχο την ομαλοποίηση-σταθεροποίηση των διαταραχών του νευρικού συστήματος και της φυσιολογίας των νεύρων προβληματικών περιοχών. Με τη μέθοδο αυτή η αδρανοποίηση των 'πεδίων διαταραχών' γίνεται με τη διήθηση τους με τοπικό αναισθητικό, όπως προκαΐνης η λιδοκαΐνης, κάβαρη, αναστολή εξάρσεων. Άμεσως μετά την έγχυση, ο ασθενής ανακουφίζεται άμεσα από τον πόνο του στόχο την μακροχρόνια αναστολή φαρμάκων, διορθώνοντας έτσι το νευρικό του έλλειμμα.",
    iconName: "brain",
    iconColor: "#ec4899", // Pink - neural/brain therapy
    markdownFile: "neuraltherapy.md",
    category: "therapeutic",
  },
  {
    id: "14",
    slug: "neuroprolotherapy",
    title: "Νευροπρολοθεραπεία",
    shortDescription:
      "Επιφανειακή προλοθεραπεία (P.I.T - Perineural Injection Treatment) για θεραπεία νευρογενούς πόνου. Λιγότερο επεμβατική τεχνική με υποδόριες ενέσεις γλυκόζης που στοχεύει τα δερματικά νεύρα, με ποσοστό επιτυχίας 80-100% σε χρόνιο πόνο.",
    iconName: "activity",
    iconColor: "#a855f7", // Purple - neural activity
    markdownFile: "neuroprolotherapy.md",
    category: "therapeutic",
  },
  {
    id: "10",
    slug: "mesotherapeia",
    title: "Μεσοθεραπεία",
    shortDescription:
      "Αντιμετώπιση επώδυνων μυοσκελετικών προβλημάτων, κυτταρίτιδας, αισθητικής κλπ.",
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
    category: "therapeutic",
  },
  {
    id: "12",
    slug: "posture-assessment",
    title: "Αξιολόγηση και Διόρθωση Στάσης Σώματος",
    shortDescription:
      "Ανάλυση και διόρθωση στάσης σώματος για πρόληψη και θεραπεία μυοσκελετικών προβλημάτων.",
    iconName: "footprints",
    iconColor: "#e11d48", // Rose - posture assessment
    markdownFile: "posture-assessment.md",
    category: "therapeutic",
  },
  {
    id: "15",
    slug: "iatrikos-velonismos",
    title: "Ιατρικός Βελονισμός",
    shortDescription:
      "Αντιμετώπιση μυοσκελετικών πόνων (αυχένα, μέση, ώμοι, κλπ), νευρολογικών παθήσεων, ημικρανίων, κεφαλαλγιών, εμβοών, αλλεργιών, δερματολογικών παθήσεων.",
    iconName: "activity",
    iconColor: "#84cc16", // Lime - acupuncture/traditional medicine
    markdownFile: "iatrikos-velonismos.md",
    category: "therapeutic",
  },
  {
    id: "16",
    slug: "cheirismoi-spondylikis-stilis",
    title: "Χειρισμοί σπονδυλικής στήλης-αρθρώσεων",
    shortDescription:
      "Ανατάξεις ): αντιμετώπιση πόνων από αποκλεισμό στπλν αρθρώσεων.",
    iconName: "bone",
    iconColor: "#059669", // Emerald - spinal manipulation
    markdownFile: "cheirismoi-spondylikis-stilis.md",
    category: "therapeutic",
  },
  {
    id: "17",
    slug: "neural-prolotherapeia",
    title: "Neural-προλοθεραπεία",
    shortDescription:
      "Έγχυση και ενυπωσιακή ανακούφιση του πόνου με φυσικό τρόπο (παυμένος ώμος, ισχιαλγία, αυχεναλγία, σύνδρομο καρπιαίου σωλήνα, επικονδυλίτιδα κλπ).",
    iconName: "zap",
    iconColor: "#f59e0b", // Amber - neural therapy
    markdownFile: "neural-prolotherapeia.md",
    category: "therapeutic",
  },
  {
    id: "18",
    slug: "egchyseis-endarthrikees",
    title: "Εγχύσεις ενδαρθρικές, παρασπονδυλικές, διηθήσεις",
    shortDescription:
      "Σε επώδυνα σημεία, στο facets.",
    iconName: "syringe",
    iconColor: "#0891b2", // Cyan - injection therapy
    markdownFile: "egchyseis-endarthrikees.md",
    category: "therapeutic",
  },
  {
    id: "19",
    slug: "ilektrofysiologikos-elegchos",
    title: "Ηλεκτροφυσιολογικός έλεγχος",
    shortDescription:
      "Διαγνωστική εξέταση για την αξιολόγηση της λειτουργίας του νευρικού συστήματος.",
    iconName: "activity",
    iconColor: "#7c3aed", // Violet - electrical tests
    markdownFile: "ilektrofysiologikos-elegchos.md",
    category: "diagnostic-support",
  },
  {
    id: "20",
    slug: "ilektromyografima",
    title: "Ηλεκτρομυογράφημα",
    shortDescription:
      "Κινητική και αισθητική ταχ. αγωγής νεύρωνω (ΗΜΓ, ΚΤΑ, ΑΤΑ) για ακριβή διάγνωση αυχενικού συνδρόμου, οσφυαλγίας, ισχιαλγίας, συνδρόμου καρπιαίου σωλήνα κλπ.",
    iconName: "waves",
    iconColor: "#1e40af", // Blue - EMG waves
    markdownFile: "ilektromyografima.md",
    category: "diagnostic-support",
  },
  {
    id: "21",
    slug: "emviomichaniki-dierevnisi",
    title: "Εμβιομηχανική διερεύνηση και αξιολόγηση στάσης σώματος",
    shortDescription:
      "Λειτουργική εκτίμηση όρθιας στάσης, βάδισης για αποκατάσταση κινητικού ελέγχου.",
    iconName: "footprints",
    iconColor: "#0f766e", // Teal - biomechanics
    markdownFile: "emviomichaniki-dierevnisi.md",
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
    title: "Διαγνωστικές Υπηρεσίες",
    description: "Εξειδικευμένες διαγνωστικές εξετάσεις και υποστηρικτικές θεραπείες"
  }
};