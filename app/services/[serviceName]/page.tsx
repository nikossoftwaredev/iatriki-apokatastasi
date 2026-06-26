export const revalidate = 3600; // revalidate every 1 hour

import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/lib/services';
import fs from 'fs/promises';
import path from 'path';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CircleIcon } from '@/components/CircleIcon';
import { PHONE, DOMAIN, BUSINESS_NAME, FULL_NAME } from '@/lib/general';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import VideoTestimonials from '@/components/VideoTestimonials';
import {
  Stethoscope,
  Activity,
  Syringe,
  Dumbbell,
  Hand,
  Waves,
  Bone,
  Brain,
  Droplet,
  Footprints,
  Radio,
  Heart,
  Phone,
  ArrowLeft,
  Search,
  HeartPulse,
  Calendar,
  Zap,
  Atom,
  Magnet,
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

  const categoryLabel = service.category === 'diagnostic-support' ? 'Διαγνωστική Πράξη' : 'Θεραπευτική Πράξη';

  return {
    title: `${service.title} | ${categoryLabel} | ${FULL_NAME}`,
    description: service.shortDescription,
    keywords: `${service.title}, φυσίατρος ηλιούπολη, ${categoryLabel.toLowerCase()}, αποκατάσταση, ${FULL_NAME}`,
    authors: [{ name: FULL_NAME }],
    alternates: {
      canonical: `https://${DOMAIN}/services/${serviceName}`,
    },
    openGraph: {
      title: `${service.title} | ${BUSINESS_NAME}`,
      description: service.shortDescription,
      type: 'article',
      locale: 'el_GR',
      url: `https://${DOMAIN}/services/${serviceName}`,
      siteName: BUSINESS_NAME,
      images: [{
        url: `https://${DOMAIN}/images/og-default.png`,
        width: 1200,
        height: 630,
        alt: service.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ${FULL_NAME}`,
      description: service.shortDescription,
      images: [`https://${DOMAIN}/images/og-default.png`],
    },
  };
}

async function getServiceContent(markdownFile: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), 'app/services/markdown', markdownFile);
    const content = await fs.readFile(filePath, 'utf-8');
    return content.replace(/^#\s+.+\n+/, '');
  } catch {
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
  bone: <Bone className="h-8 w-8" />,
  brain: <Brain className="h-8 w-8" />,
  droplet: <Droplet className="h-8 w-8" />,
  footprints: <Footprints className="h-8 w-8" />,
  radio: <Radio className="h-8 w-8" />,
  heart: <Heart className="h-8 w-8" />,
  zap: <Zap className="h-8 w-8" />,
  atom: <Atom className="h-8 w-8" />,
  magnet: <Magnet className="h-8 w-8" />,
};

const categoryBadgeConfig = {
  "diagnostic-support": {
    label: "Διαγνωστική Πράξη",
    icon: Search,
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
  therapeutic: {
    label: "Θεραπευτική Πράξη",
    icon: HeartPulse,
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
} as const;

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceName } = await params;
  const service = getServiceBySlug(serviceName);

  if (!service) {
    notFound();
  }

  const markdownContent = await getServiceContent(service.markdownFile);
  const catBadge = categoryBadgeConfig[service.category];
  const CatIcon = catBadge.icon;

  // Get related services (same category, excluding current)
  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.title,
    "description": service.shortDescription,
    "url": `https://${DOMAIN}/services/${serviceName}`,
    "procedureType": service.category === "diagnostic-support" ? "DiagnosticProcedure" : "TherapeuticProcedure",
    "provider": {
      "@type": "MedicalBusiness",
      "name": BUSINESS_NAME,
      "url": `https://${DOMAIN}`,
      "telephone": PHONE,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero header */}
      <div
        className="relative text-white py-10 sm:py-16 lg:py-20"
        style={{
          background: `linear-gradient(135deg, ${service.iconColor}dd 0%, ${service.iconColor}99 50%, ${service.iconColor}66 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 sm:mb-8 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Όλες οι Υπηρεσίες
          </Link>

          <div className="max-w-4xl">
            <Badge variant="outline" className={`mb-3 sm:mb-4 ${catBadge.className} border`}>
              <CatIcon className="h-3 w-3 mr-1" />
              {catBadge.label}
            </Badge>

            <div className="flex items-start gap-3 sm:gap-5 mb-4 sm:mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shrink-0">
                <div className="text-white [&_svg]:h-6 [&_svg]:w-6 sm:[&_svg]:h-8 sm:[&_svg]:w-8">
                  {iconMap[service.iconName] || <Heart className="h-8 w-8" />}
                </div>
              </div>
              <div>
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 break-words">
                  {service.title}
                </h1>
                <p className="text-sm sm:text-lg text-white/90 max-w-2xl leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {markdownContent ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-8 lg:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-table:overflow-hidden prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 break-words overflow-wrap-anywhere [word-break:break-word]">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: () => null,
                    p: ({ children, ...props }) => {
                      if (children && typeof children === 'string') {
                        if (children.includes('{{VIDEO_TESTIMONIALS}}')) {
                          return <VideoTestimonials />;
                        }
                        const youtubeMatch = children.match(/\{\{YOUTUBE:([^:}]+)(?::([^}]*))?\}\}/);
                        if (youtubeMatch) {
                          const videoId = youtubeMatch[1];
                          const title = youtubeMatch[2] || '';
                          return (
                            <div className="my-6">
                              <div className="aspect-video">
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                                  title={title}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="rounded-lg shadow-lg"
                                />
                              </div>
                              {title && <p className="text-sm text-gray-600 mt-2">{title}</p>}
                            </div>
                          );
                        }
                      }
                      return <p {...props}>{children}</p>;
                    },
                    img: ({ alt, ...props }) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        {...props}
                        alt={alt || ""}
                        className="rounded-lg shadow-lg mx-auto"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    ),
                    table: (props) => (
                      <div className="overflow-x-auto my-6">
                        <table className="min-w-full divide-y divide-gray-200" {...props} />
                      </div>
                    ),
                    thead: (props) => (
                      <thead className="bg-gray-50" {...props} />
                    ),
                    th: (props) => (
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
                    ),
                    td: (props) => (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" {...props} />
                    ),
                    tr: (props) => (
                      <tr className="hover:bg-gray-50" {...props} />
                    ),
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <p className="text-center text-muted-foreground">
                Το περιεχόμενο για αυτή την υπηρεσία θα είναι σύντομα διαθέσιμο.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ενδιαφέρεστε για {service.title};
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Επικοινωνήστε μαζί μας για να κλείσετε ραντεβού ή για περισσότερες πληροφορίες.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Κλείστε Ραντεβού
                </Button>
              </Link>
              <Link href={`tel:+30${PHONE}`}>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  {PHONE.slice(0, 3)} {PHONE.slice(3, 7)} {PHONE.slice(7)}
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Σχετικές {service.category === "diagnostic-support" ? "Διαγνωστικές" : "Θεραπευτικές"} Υπηρεσίες
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedServices.map((related) => (
                  <Link
                    key={related.id}
                    href={`/services/${related.slug}`}
                    className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <CircleIcon
                        color={related.iconColor}
                        icon={iconMap[related.iconName] || <Heart className="h-8 w-8" />}
                        size={40}
                      />
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-sm leading-tight">
                        {related.title}
                      </h4>
                    </div>
                    <p className="text-gray-500 text-xs line-clamp-2">
                      {related.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}