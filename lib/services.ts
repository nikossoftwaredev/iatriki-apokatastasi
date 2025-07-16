export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  markdownFile: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "prolotherapeia",
    title: "Προλοθεραπεία (prolotherapy)",
    shortDescription: "Μη χειρουργική αναγεννητική μέθοδος για συνδέσμους και τένοντες αρθρώσεων.",
    iconName: "bone",
    markdownFile: "prolotherapeia.md"
  },
  {
    id: "2",
    slug: "fysiotherapeia",
    title: "Φυσικοθεραπεία",
    shortDescription: "Ιατρικός βελονισμός, ηλεκτροβελονισμός για μυοσκελετικά σύνδρομα και νευρολογικές παθήσεις.",
    iconName: "hand",
    markdownFile: "fysiotherapeia.md"
  },
  {
    id: "3",
    slug: "diagnosi-apokatastasi",
    title: "Διάγνωση και Αποκατάσταση",
    shortDescription: "Αντιμετώπιση αθλητικών κακώσεων, καταγμάτων, μυοσκελετικών, νευρολογικών και ρευματολογικών προβλημάτων.",
    iconName: "stethoscope",
    markdownFile: "diagnosi-apokatastasi.md"
  },
  {
    id: "4",
    slug: "ilektromyografima",
    title: "Ηλεκτροφυσιολογικός έλεγχος-Ηλεκτρομυογράφημα",
    shortDescription: "Ακριβής διάγνωση αυχενικού συνδρόμου, οσφυαλγίας και ισχιαλγίας.",
    iconName: "activity",
    markdownFile: "ilektromyografima.md"
  },
  {
    id: "5",
    slug: "botox-dysport",
    title: "Έγχυση BOTOX-DYSPORT",
    shortDescription: "Θεραπευτικές εγχύσεις για σπαστικότητα και νευρολογικές διαταραχές.",
    iconName: "syringe",
    markdownFile: "botox-dysport.md"
  },
  {
    id: "6",
    slug: "therapeftiki-gymnastiki",
    title: "Ειδική θεραπευτική γυμναστική",
    shortDescription: "Εξειδικευμένα θεραπευτικά πρωτόκολλα για την αποκατάσταση.",
    iconName: "dumbbell",
    markdownFile: "therapeftiki-gymnastiki.md"
  },
  {
    id: "7",
    slug: "shock-wave",
    title: "Κρουστικοί υπέρηχοι (shock wave)",
    shortDescription: "Θεραπεία τενοντίτιδων, μυϊκών πόνων, επικονδυλίτιδας και περιαρθρίτιδας.",
    iconName: "waves",
    markdownFile: "shock-wave.md"
  },
  {
    id: "8",
    slug: "ozonotherapeia",
    title: "Οξυγόνο-οζονοθεραπεία",
    shortDescription: "Διέγερση του ανοσοποιητικού συστήματος και των μηχανισμών ίασης.",
    iconName: "wind",
    markdownFile: "ozonotherapeia.md"
  },
  {
    id: "9",
    slug: "neuraltherapy",
    title: "Neuraltherapy",
    shortDescription: "Αντιμετώπιση οξέων και χρόνιων πόνων και λειτουργικών διαταραχών.",
    iconName: "brain",
    markdownFile: "neuraltherapy.md"
  },
  {
    id: "10",
    slug: "mesotherapeia",
    title: "Μεσοθεραπεία",
    shortDescription: "Μικροεγχύσεις βιταμινών και υαλουρονικού οξέος για αναζωογόνηση.",
    iconName: "droplet",
    markdownFile: "mesotherapeia.md"
  },
  {
    id: "11",
    slug: "orthotika-pelmata",
    title: "Κατασκευή ειδικών ορθοτικών πελμάτων",
    shortDescription: "Για μεταταρσαλγία, άκανθα πτέρνας και παραμορφώσεις ποδιών.",
    iconName: "footprints",
    markdownFile: "orthotika-pelmata.md"
  },
  {
    id: "12",
    slug: "biosyntonismos",
    title: "Βιοσυντονισμός",
    shortDescription: "Εναλλακτική θεραπεία βασισμένη στη συχνότητα του σώματος.",
    iconName: "radio",
    markdownFile: "biosyntonismos.md"
  },
  {
    id: "13",
    slug: "prp-therapeia",
    title: "Θεραπεία με αυτόλογα Ενεργοποιημένα Αιμοπετάλια (PRP)",
    shortDescription: "Μη χειρουργική θεραπεία με χρήση των αιμοπεταλίων του ασθενή.",
    iconName: "heart",
    markdownFile: "prp-therapeia.md"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}