import { RowConfig } from 'types/general';

const data = [
  { title: 'Πώς να ενισχύσουμε την άμυνα μας κατά του Coronavirus;	' },
  { title: 'TecarTherapy	' },
  { title: 'Θεραπεία με Αυτόλογα Ενεργοποιημένα Αιμοπετάλια	' },
  { title: 'Neural Fascial Prolotherapy (NFP) Brian Shiple	' },
  { title: 'Prolotherapy for the Treatment of Back Pain	' },
  { title: 'ΠΡΟΛΟΘΕΡΑΠΕΙΑ ΑΝΩΓΕΙΑ 06-07-08-09 ΙΟΥΝΙΟΥ 2017	' },
  { title: 'Joint Pain Relief Without Surgery	' },
  { title: 'Η Βιταμίνη Κ2 και ο ρόλος της στον οργανισμό	' },
  { title: 'Neuraltherapy: μια επαναστατική ιατρική τεχνική	' },
  { title: 'Βιοσυντονισμός	' },
  { title: 'Δωρεάν εφαρμογή προλοθεραπείας	' },
  { title: 'Προλοθεραπεία (prolotherapy)	' },
  { title: 'Οξυγόνο-οζονοθεραπεία	' },
  { title: 'Εφαρμογή Μεσοθεραπείας (Τι είναι η μεσοθεραπεία)	' },
  { title: 'Φυσιοθεραπεία	' },
  { title: 'Τι είναι και τι κάνει η Βοτουλινική Τοξίνη(ΒΟΤΟΧ-DYSPORT)	' },
  { title: 'Κρουστικά Κύματα (ShockWaves)	' },
  { title: 'Ενδείξεις του βελονισμού	' },
  { title: 'Ο Βελονισμός σαν μέθοδος αναλγησίας	' },
  { title: 'Ασκηση και οστεοπόρωση	' },
  { title: 'Κακώσεις άρθρωσης ποδοκνημικής	' },
  { title: 'Προσθέσεις κάτω άκρων σε κολοβώματα...	' },
  { title: 'Η ειδικότητα ΦΙΑπ	' },
  { title: 'Ιατρικοί Χειρισμοί (ανατάξεις)	' },
  { title: 'Ιατρική Αποκατάσταση' }
];

export const scientificArticles: RowConfig[] = data.map((sa, idx) => ({
  id: idx,
  title: sa.title
}));
