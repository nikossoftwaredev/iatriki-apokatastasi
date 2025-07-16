import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/services';
import fs from 'fs/promises';
import path from 'path';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircleIcon } from '@/components/CircleIcon';
import { PHONE } from '@/lib/general';
import { 
  Stethoscope, 
  Activity, 
  Syringe, 
  Dumbbell, 
  Hand, 
  Waves,
  Wind,
  Bone,
  Brain,
  Droplet,
  Footprints,
  Radio,
  Heart,
  Phone
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ serviceName: string }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { serviceName } = await params;
  const service = getServiceBySlug(serviceName);

  if (!service) {
    return {
      title: 'Υπηρεσία δεν βρέθηκε',
    };
  }

  return {
    title: `${service.title} - Δρ. Σταύρος Ν. Δημητρακόπουλος`,
    description: service.shortDescription,
  };
}

async function getServiceContent(markdownFile: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), 'app/services/markdown', markdownFile);
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Convert markdown to HTML (basic conversion for now)
    const htmlContent = content
      .split('\n\n')
      .map(paragraph => {
        // Headers
        if (paragraph.startsWith('### ')) {
          return `<h3 class="text-xl font-semibold mt-6 mb-3">${paragraph.substring(4)}</h3>`;
        }
        if (paragraph.startsWith('## ')) {
          return `<h2 class="text-2xl font-bold mt-8 mb-4">${paragraph.substring(3)}</h2>`;
        }
        if (paragraph.startsWith('# ')) {
          return `<h1 class="text-3xl font-bold mb-6">${paragraph.substring(2)}</h1>`;
        }
        
        // Lists
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').map(item => 
            `<li class="ml-4">${item.substring(2)}</li>`
          ).join('');
          return `<ul class="list-disc list-inside mb-4 space-y-1">${items}</ul>`;
        }
        
        // Bold text
        paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Check marks
        paragraph = paragraph.replace(/✓/g, '<span class="text-green-600">✓</span>');
        
        // Regular paragraphs
        return `<p class="mb-4 leading-relaxed">${paragraph}</p>`;
      })
      .join('\n');
    
    return htmlContent;
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return null;
  }
}

const iconMap: { [key: string]: React.ReactNode } = {
  stethoscope: <Stethoscope className="h-8 w-8" />,
  activity: <Activity className="h-8 w-8" />,
  syringe: <Syringe className="h-8 w-8" />,
  dumbbell: <Dumbbell className="h-8 w-8" />,
  hand: <Hand className="h-8 w-8" />,
  waves: <Waves className="h-8 w-8" />,
  wind: <Wind className="h-8 w-8" />,
  bone: <Bone className="h-8 w-8" />,
  brain: <Brain className="h-8 w-8" />,
  droplet: <Droplet className="h-8 w-8" />,
  footprints: <Footprints className="h-8 w-8" />,
  radio: <Radio className="h-8 w-8" />,
  heart: <Heart className="h-8 w-8" />,
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceName } = await params;
  const service = getServiceBySlug(serviceName);

  if (!service) {
    notFound();
  }

  const markdownContent = await getServiceContent(service.markdownFile);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/#services">
          <Button variant="ghost" className="mb-8">
            ← Πίσω στις Υπηρεσίες
          </Button>
        </Link>

        <div className="mb-8">
          <div className="mb-4">
            <CircleIcon 
              color="#06b6d4" 
              icon={iconMap[service.iconName] || <Heart className="h-8 w-8" />}
              size={80}
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-muted-foreground">{service.shortDescription}</p>
        </div>

        {markdownContent ? (
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
          </div>
        ) : (
          <div className="bg-muted rounded-lg p-8">
            <p className="text-center text-muted-foreground">
              Το περιεχόμενο για αυτή την υπηρεσία θα είναι σύντομα διαθέσιμο.
            </p>
          </div>
        )}

        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">Ενδιαφέρεστε για αυτή την υπηρεσία;</h2>
          <p className="mb-6">
            Επικοινωνήστε μαζί μας για να κλείσετε ραντεβού ή για περισσότερες πληροφορίες.
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button size="lg">Επικοινωνία</Button>
            </Link>
            <Link href={`tel:+30${PHONE}`}>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                {PHONE.slice(0, 3)} {PHONE.slice(3, 7)} {PHONE.slice(7)}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}