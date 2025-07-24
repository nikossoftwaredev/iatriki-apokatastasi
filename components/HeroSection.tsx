"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Award, Activity } from "lucide-react";
import Link from "next/link";
import { 
  FULL_NAME,
  credentials,
  getYearsOfExperience 
} from "@/lib/general";
import { 
  getServicesByCategory, 
  serviceCategories 
} from "@/lib/services";
import { CircleIcon } from "@/components/CircleIcon";
import {
  Bone,
  Hand,
  Heart,
  Syringe,
  Atom,
  Stethoscope,
  Dumbbell,
  Waves,
  Brain,
  Droplet,
  Footprints,
  Radio
} from "lucide-react";

// Service icon mapping
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  bone: Bone,
  hand: Hand,
  heart: Heart,
  syringe: Syringe,
  atom: Atom,
  stethoscope: Stethoscope,
  activity: Activity,
  dumbbell: Dumbbell,
  waves: Waves,
  brain: Brain,
  droplet: Droplet,
  footprints: Footprints,
  radio: Radio,
};

export default function HeroSection() {
  const therapeuticServices = getServicesByCategory("therapeutic");
  const diagnosticServices = getServicesByCategory("diagnostic-support");

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Doctor Info and Diagnostic Services Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Doctor Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 h-full"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 h-full">
              {/* Doctor Image */}
              <div className="w-32 h-40 sm:w-36 sm:h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden p-2 flex-shrink-0">
                <div className="relative w-full h-full bg-white rounded overflow-hidden shadow-inner">
                  <img 
                    src="/images/doctor.jpg" 
                    alt={FULL_NAME}
                    className="object-cover w-full h-full filter grayscale"
                  />
                </div>
              </div>
              
              {/* Doctor Info and Stats */}
              <div className="flex-1 text-center sm:text-left">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                    Δρ. ΣΤΑΥΡΟΣ Ν. ΔΗΜΗΤΡΑΚΟΠΟΥΛΟΣ
                  </h1>
                  <p className="text-sm sm:text-base text-gray-700 mb-1">
                    Ιατρός Αποκατάστασης - <Link href="/blogs/what-is-a-physiatrist" className="text-primary underline hover:text-primary/80 transition-colors">Φυσίατρος</Link>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    Μετεκπαιδευθείς στην Πανεπιστημιακή Κλινική Του Μιλάνου
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    Fellow of the European Board of PRM
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    Διπλωματούχος Βελονισμού E.C.P.D (ΟΗΕ)
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    Μέλος της Αθλητιατρικής Εταιρείας Ελλάδος
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3">
                    Μέλος της Ευρωπαϊκής εταιρείας της προλοθεραπείας (ESP)
                  </p>
                  <div className="bg-primary/5 rounded-lg px-3 sm:px-4 py-2 inline-block">
                    <span className="text-base sm:text-lg font-semibold text-primary">{getYearsOfExperience()}+ χρόνια εμπειρίας</span>
                    <span className="text-sm sm:text-base text-gray-600 ml-1 sm:ml-2">στην αποκατάσταση του πόνου</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Diagnostic Services Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-lg p-6 border border-primary/20 h-full"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <CircleIcon
                color="#06b6d4"
                icon={<Activity className="h-4 w-4" />}
                size={32}
              />
              <span className="ml-3">Διαγνωστικές Υπηρεσίες</span>
            </h3>
            
            <div className="space-y-4">
              {/* Electrophysiological Check */}
              <div className="bg-white/80 rounded-lg p-4 hover:bg-white transition-colors">
                <div className="flex items-start">
                  <CircleIcon
                    color="#10b981"
                    icon={<Radio className="h-3 w-3" />}
                    size={24}
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">Ηλεκτροφυσιολογικός έλεγχος</h4>
                  </div>
                </div>
              </div>
              
              {/* Electromyography */}
              <div className="bg-white/80 rounded-lg p-4 hover:bg-white transition-colors">
                <div className="flex items-start">
                  <CircleIcon
                    color="#f59e0b"
                    icon={<Activity className="h-3 w-3" />}
                    size={24}
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Ηλεκτρομυογράφημα</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Κινητική και αισθητική ταχ. αγωγής νεύρων (ΗΜΓ, ΚΤΑ, ΑΤΑ) για ακριβή διάγνωση αυχενικού συνδρόμου, οσφυαλγίας, ισχιαλγίας, συνδρόμου καρπιαίου σωλήνα, κλπ.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Biomechanical Investigation */}
              <div className="bg-white/80 rounded-lg p-4 hover:bg-white transition-colors">
                <div className="flex items-start">
                  <CircleIcon
                    color="#8b5cf6"
                    icon={<Footprints className="h-3 w-3" />}
                    size={24}
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Εμβιομηχανική διερεύνηση και αξιολόγηση στάσης σώματος</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Λειτουργική εκτίμηση όρθιας στάσης, βάδισης για αποκατάσταση κινητικού ελέγχου
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Two Column Layout - Credentials/Resume and Services */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Credentials (Hidden on mobile, shown after medical conditions) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 hidden lg:block"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Βιογραφικό & Πιστοποιήσεις</h2>
            
            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3">
                <CircleIcon
                  color="#06b6d4"
                  icon={<GraduationCap className="h-5 w-5" />}
                  size={40}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Εκπαίδευση & Εξειδίκευση
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {credentials[5]}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3">
                <CircleIcon
                  color="#06b6d4"
                  icon={<Award className="h-5 w-5" />}
                  size={40}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Διεθνείς Πιστοποιήσεις
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {credentials[2]}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3">
                <CircleIcon
                  color="#06b6d4"
                  icon={<Users className="h-5 w-5" />}
                  size={40}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Επαγγελματικές Ενώσεις
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• {credentials[4]}</li>
                    <li>• {credentials[6]}</li>
                    <li>• {credentials[7]}</li>
                    <li>• Συνεργάτης ΕΟΠΥΥ</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <Button size="lg" asChild>
                <Link href="/#services">
                  Οι Υπηρεσίες μας
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resume">
                  Δείτε το Βιογραφικό
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Medical Conditions Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Αντιμετώπιση οξύ και χρόνιου πόνου</h2>
                <p className="text-sm text-gray-600">και αποκατάσταση λειτουργικών διαταραχών:</p>
              </div>
              
              <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold text-gray-800">Αθλητικές κακώσεις</span>
                      <span className="text-gray-600"> (μυοσκελετικές παθήσεις)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold text-gray-800">Νευρολογικές παθήσεις:</span>
                      <span className="text-gray-600"> (Ημιπληγία, παραλύσεις νεύρων, κλπ)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span className="font-semibold text-gray-800">Ρευματολογικές παθήσεις</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold text-gray-800">Παθήσεις σπονδυλικής στήλης - αρθρώσεων</span>
                      <span className="text-gray-600 text-sm block ml-2">(οσφυαλγία, ισχιαλγία, αυχενικό σύνδρομο, αρθρίτιδες, μεταταρσαλγία, πόνοι στην ποδοκνημική, τενοντίτιδες, κτλ.)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold text-gray-800">Επώδυνων προβλημάτων:</span>
                      <span className="text-gray-600"> οξύ και χρόνιου πόνου</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold text-gray-800">Εξειδικευμένη αντιμετώπιση τενοντίτιδων:</span>
                      <span className="text-gray-600"> (επικονδυλίτιδα, περιαρθρίτιδα)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span className="font-semibold text-gray-800">Αναπνευστικές παθήσεις</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold text-gray-800">Ακρωτηριασμούς - κολοβώματα</span>
                      <span className="text-gray-600"> (πόνος «μέλος φάντασμα»)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span className="font-semibold text-gray-800">Λειτουργική εκτίμηση - κινητικός έλεγχος</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span className="font-semibold text-gray-800">Μετατραυματικές αρθρίτιδες</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span className="font-semibold text-gray-800">Ινομυαλγία</span>
                  </div>
                </div>
            </div>

          </motion.div>
        </div>

        {/* Mobile Only - Credentials Section (Below Medical Conditions) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:hidden space-y-4 mt-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Βιογραφικό & Πιστοποιήσεις</h2>
          
          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-3">
              <CircleIcon
                color="#06b6d4"
                icon={<GraduationCap className="h-5 w-5" />}
                size={40}
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Εκπαίδευση & Εξειδίκευση
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {credentials[5]}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-3">
              <CircleIcon
                color="#06b6d4"
                icon={<Award className="h-5 w-5" />}
                size={40}
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Διεθνείς Πιστοποιήσεις
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {credentials[2]}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-3">
              <CircleIcon
                color="#06b6d4"
                icon={<Users className="h-5 w-5" />}
                size={40}
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Επαγγελματικές Ενώσεις
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• {credentials[4]}</li>
                  <li>• {credentials[6]}</li>
                  <li>• {credentials[7]}</li>
                  <li>• Συνεργάτης ΕΟΠΥΥ</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <Button size="lg" asChild>
              <Link href="/#services">
                Οι Υπηρεσίες μας
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resume">
                Δείτε το Βιογραφικό
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}