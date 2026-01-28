import { getServiceBySlug, getBasicInfo, getCities, getStates } from '@/app/lib/database';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ServiceSubServices from '@/app/components/services/ServiceSubServices';
import ServiceBenefits from '@/app/components/services/ServiceBenefits';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import AboutUs from '@/app/home/AboutUs';
import RefrigeratorServices from '@/app/components/RefrigeratorServices';
import RefrigeratorCTA from '@/app/components/RefrigeratorCTA';
import RefrigeratorSymptoms from '@/app/components/RefrigeratorSymptoms';
import RefrigeratorAdvantages from '@/app/components/RefrigeratorAdvantages';
import RefrigeratorBrands from '@/app/components/RefrigeratorBrands';
import ServiceAreasSection from '@/app/components/ServiceAreasSection';
import WhyWeAreFirstChoice from '@/app/home/WhyWeAreFirstChoice';
import OurProcess from '@/app/home/OurProcess';
import Testimonials from '@/app/home/Testimonials';
import FAQ from '@/app/home/FAQ';
import PopularCitiesSection from '@/app/components/PopularCitiesSection';
import CTA from '@/app/home/CTA';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const basicInfo = await getBasicInfo();

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.seoTitle || `${service.name} – ${basicInfo?.siteName || 'ServiceFinder'}`,
    description: service.seoDescription || service.description,
    keywords: `${service.name}, ${service.category || ''}, home services, ${basicInfo?.metaKeywords || ''}`,
    openGraph: {
      title: service.seoTitle || `${service.name}`,
      description: service.seoDescription || service.description,
      images: service.imageUrl ? [service.imageUrl] : [],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const basicInfo = await getBasicInfo();
  const cities = await getCities(50);
  const states = await getStates(12);

  if (!service) {
    notFound();
  }

  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';
  const defaultCity = basicInfo?.defaultCity || 'Belo Horizonte';
  const defaultState = basicInfo?.defaultState || 'Minas Gerais';
  const contactPhone = basicInfo?.contactPhone || '+55 31 99999-9999';
  
  // Prepare siteData for home page components (same structure as home page)
  const siteData = basicInfo || {
    siteName: 'ServiceFinder Brazil',
    tagline: 'Encontre Prestadores de Serviços Locais Confiáveis Perto de Você',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg',
    bannerAlt: 'Diretório de Serviços Locais no Brasil',
    primaryColor: '#0F4C81',
    secondaryColor: '#F59E0B',
    defaultCity: 'Belo Horizonte',
    defaultState: 'Minas Gerais',
    defaultService: 'Reparo de Ar Condicionado',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden pt-[72px]">
        {service.imageUrl ? (
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div 
            className="w-full h-full"
            style={{ 
              background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`
            }}
          ></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {service.h1Title || service.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                {service.introText || service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-black rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
                  style={{ backgroundColor: secondaryColor, color: 'white' }}
                >
                  Solicite Já
                </Link>
                <a
                  href={`https://wa.me/${contactPhone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center gap-2 text-gray-600">
                <li>
                  <Link href="/" className="hover:text-black transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/services" className="hover:text-black transition-colors">
                    Serviço
                  </Link>
                </li>
                <li>/</li>
                <li className="text-black font-medium">{service.name}</li>
              </ol>
            </nav>

            {/* Service Sub-Services Section */}
            <ServiceSubServices service={service} primaryColor={primaryColor} secondaryColor={secondaryColor} />

            {/* Service Description */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-4">Sobre {service.name}</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.introText && service.introText !== service.description && (
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.introText}
                  </p>
                )}
              </div>
            </div>

            {/* Types We Service Section */}
            {(() => {
              let typesArray: string[] = [];
              if (service.types) {
                if (typeof service.types === 'string') {
                  try {
                    typesArray = JSON.parse(service.types);
                  } catch (e) {
                    typesArray = [service.types];
                  }
                } else {
                  typesArray = service.types;
                }
              }

              return typesArray.length > 0 ? (
                <div className="bg-white rounded-xl shadow-md p-8 mb-12 border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl font-bold text-black mb-4">
                        Tipos de {service.name.replace(/Conserto de |Reparo de |Serviço de /gi, '')} que Consertamos
                      </h2>
                      {service.typesIntro && (
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {service.typesIntro}
                        </p>
                      )}
                      <ul className="space-y-3 mb-6">
                        {typesArray.map((type, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span 
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: secondaryColor }}
                            ></span>
                            <span className="text-gray-700 text-lg">{type}</span>
                          </li>
                        ))}
                      </ul>
                      {service.typesConclusion && (
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {service.typesConclusion}
                        </p>
                      )}
                    </div>
                    
                    {service.icon && (
                      <div className="relative h-96 w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        <Image
                          src={service.icon}
                          alt={`${service.name} Types`}
                          fill
                          className="object-contain p-8"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : null;
            })()}

            {/* Benefits Section */}
            <ServiceBenefits service={service} primaryColor={primaryColor} secondaryColor={secondaryColor} />
          </div>
        </div>
      </section>

      {/* Home Page Sections - In Same Order as Home Page */}
      <AboutUs basicInfo={siteData} />
      <RefrigeratorServices basicInfo={siteData} />
      <RefrigeratorCTA basicInfo={siteData} />
      <RefrigeratorSymptoms basicInfo={siteData} />
      <PopularCitiesSection basicInfo={siteData} cities={cities.slice(0, 12)} />
      <RefrigeratorCTA basicInfo={siteData} />
      <RefrigeratorAdvantages basicInfo={siteData} />
      <RefrigeratorBrands basicInfo={siteData} />
      <ServiceAreasSection basicInfo={siteData} states={states} />
      <WhyWeAreFirstChoice basicInfo={siteData} />
      <OurProcess basicInfo={siteData} />
      <Testimonials basicInfo={siteData} />
      <FAQ basicInfo={siteData} />
      <CTA basicInfo={siteData} />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton phone={contactPhone} />
    </div>
  );
}
