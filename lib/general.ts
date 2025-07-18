export const PHONE = "2109711360";
export const ADDRESS = "ΑΝΔΡΟΥΤΣΟΥ 22 ΗΛΙΟΥΠΟΛΗ";
export const FACEBOOK =
  "https://www.facebook.com/p/%CE%99%CE%B1%CF%84%CF%81%CE%B9%CE%BA%CE%AE-%CE%91%CF%80%CE%BF%CE%BA%CE%B1%CF%84%CE%AC%CF%83%CF%84%CE%B1%CF%83%CE%B7-100066614382726/";
export const MAIL = "info@iatriki-apokatastasi.gr";
export const DOMAIN = "iatriki-apokatastasi.gr";
export const START_YEAR = 1987;
export const NAME = "Σταύρος Δημητρακόπουλος";
export const LAST_NAME = "Δημητρακόπουλος";
export const BUSINESS_NAME =
  "ΣΤΑΥΡΟΣ Ν. ΔΗΜΗΤΡΑΚΟΠΟΥΛΟΣ | Ιατρός Αποκατάστασης – Φυσίατρος";
export const MAP_IFRAME =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.985152909698!2d23.7548781!3d37.930777299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd35a7c16a9d%3A0xd965fdf7928cd9b6!2zzqbPhc-Dzq_Osc-Ez4HOv8-CIM6ZzrHPhM-BzrnOus6uIM6Rz4DOv866zrHPhM6sz4PPhM6xz4POtyDOo8-EzrHPjc-Bzr_PgiDOlM63zrzOt8-Ez4HOsc66z4zPgM6_z4XOu86_z4I!5e0!3m2!1sen!2sgr!4v1752700314319!5m2!1sen!2sgr";
export const NAVIGATION = "https://goo.gl/maps/uiR9Q3m2Ag4M9mKAA";

// Additional phone number
export const PHONE2 = "2109711324";

// Full name with title
export const FULL_NAME = "Δρ. Σταύρος Ν. Δημητρακόπουλος";

// Calculate years of experience dynamically
export const getYearsOfExperience = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - START_YEAR;
};

// Working hours
export const workingHours = {
  weekdays: "Δευτέρα - Παρασκευή: 10:00 - 13:00 & 17:00 - 21:00",
  saturday: "Σάββατο - Κυριακή: Κλειστά",
  sunday: "",
  byAppointment: "Κατόπιν ραντεβού",
};

// Social media links
export const social = {
  facebook: FACEBOOK,
  linkedin: "https://linkedin.com/in/stavros-dimitrakopoulos",
  instagram: "https://instagram.com/iatriki_apokatastasi",
};

// Insurance
export const insurance = {
  eopyy: true,
  private: ["NN Hellas", "Ethniki", "Interamerican", "Allianz", "Generali"],
};

// Credentials
export const credentials = [
  "Ιατρός Αποκατάστασης - Φυσίατρος",
  "Ειδικός Αθλητίατρος",
  "Fellow of European Board of PRM",
  "Diploma Acupuncture (UN)",
  "Member of Greek Sports Medicine Society",
  "Εκπαίδευση στο University Clinic of Milano",
];

// Stats labels
export const stats = {
  satisfiedClients: "10,000+",
  yearsLabel: "Έτη Εμπειρίας",
  clientsLabel: "Ικανοποιημένοι Ασθενείς",
  eopyyLabel: "Σύμβαση με ΕΟΠΥΥ",
};

// Services - icons will be added when rendering
export const services = [
  {
    id: "prp",
    title: "Αυτόλογες Εγχύσεις Αιμοπεταλίων (PRP)",
    shortDescription: "Αναγεννητική θεραπεία με πλάσμα πλούσιο σε αιμοπετάλια",
    iconName: "syringe",
  },
  {
    id: "bioresonance",
    title: "Βιοσυντονισμός",
    shortDescription: "Εναλλακτική θεραπευτική μέθοδος",
    iconName: "activity",
  },
  {
    id: "prolotherapy",
    title: "Prolotherapy",
    shortDescription: "Ενίσχυση συνδέσμων και τενόντων",
    iconName: "shield",
  },
  {
    id: "physiotherapy",
    title: "Φυσικοθεραπεία",
    shortDescription: "Αποκατάσταση κινητικότητας και λειτουργικότητας",
    iconName: "heart",
  },
  {
    id: "botox",
    title: "Εφαρμογή Botox",
    shortDescription: "Θεραπευτική χρήση για σπαστικότητα και πόνο",
    iconName: "pill",
  },
  {
    id: "emg",
    title: "Ηλεκτρομυογράφημα",
    shortDescription: "Διαγνωστική εξέταση νευρομυϊκών παθήσεων",
    iconName: "barChart",
  },
  {
    id: "acupuncture",
    title: "Βελονισμός",
    shortDescription: "Παραδοσιακή κινέζικη ιατρική για την αντιμετώπιση πόνου",
    iconName: "target",
  },
  {
    id: "shockwave",
    title: "Θεραπεία Κρουστικών Κυμάτων",
    shortDescription: "Μη επεμβατική θεραπεία για τενοντοπάθειες",
    iconName: "zap",
  },
  {
    id: "kinesio",
    title: "Περίδεση Kinesio Taping",
    shortDescription: "Ελαστική περίδεση για υποστήριξη μυών",
    iconName: "bandage",
  },
  {
    id: "mesotherapy",
    title: "Μεσοθεραπεία",
    shortDescription: "Στοχευμένες ενέσεις για τοπική θεραπεία",
    iconName: "crosshair",
  },
  {
    id: "ozone",
    title: "Οξυγονο-Οζονοθεραπεία",
    shortDescription: "Θεραπεία με ιατρικό όζον",
    iconName: "zap",
  },
];

// Navigation items
export const navigation = [
  { name: "Αρχική", href: "/" },
  { name: "Υπηρεσίες", href: "/services" },
  { name: "Άρθρα", href: "/blogs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Βιογραφικό", href: "/resume" },
  { name: "Επικοινωνία", href: "/contact" },
];

// Footer links
export const footerLinks = {
  services: [
    { name: "PRP Θεραπεία", href: "/services#prp" },
    { name: "Φυσικοθεραπεία", href: "/services#physiotherapy" },
    { name: "Βελονισμός", href: "/services#acupuncture" },
    { name: "Prolotherapy", href: "/services#prolotherapy" },
  ],
  info: [
    { name: "Άρθρα", href: "/blogs" },
    { name: "Βιογραφικό", href: "/resume" },
    { name: "Gallery", href: "/gallery" },
  ],
  legal: [
    { name: "Πολιτική Απορρήτου", href: "/privacy" },
    { name: "Όροι Χρήσης", href: "/terms" },
    { name: "GDPR", href: "/gdpr" },
  ],
};
