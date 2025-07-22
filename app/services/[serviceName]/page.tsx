import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/services';
import fs from 'fs/promises';
import path from 'path';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircleIcon } from '@/components/CircleIcon';
import { PHONE } from '@/lib/general';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
    return content;
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
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-table:overflow-hidden">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    className="rounded-lg shadow-lg mx-auto"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200" {...props} />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead className="bg-gray-50" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" {...props} />
                ),
                tr: ({ node, ...props }) => (
                  <tr className="hover:bg-gray-50" {...props} />
                ),
              }}
            >
              {markdownContent}
            </ReactMarkdown>
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