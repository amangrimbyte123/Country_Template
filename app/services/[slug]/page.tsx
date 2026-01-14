import { getServiceBySlug, getBasicInfo, getCities } from '@/app/lib/database';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

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
    title: service.seoTitle || `${service.name} Services – ${basicInfo?.siteName || 'ServiceFinder'}`,
    description: service.seoDescription || service.description,
    keywords: `${service.name}, ${service.category || ''}, home services, ${basicInfo?.metaKeywords || ''}`,
    openGraph: {
      title: service.seoTitle || `${service.name} Services`,
      description: service.seoDescription || service.description,
      images: service.imageUrl ? [service.imageUrl] : [],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const basicInfo = await getBasicInfo();
  const cities = await getCities(12);

  if (!service) {
    notFound();
  }

  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';
  const defaultCity = basicInfo?.defaultCity || 'Belo Horizonte';
  const defaultState = basicInfo?.defaultState || 'Minas Gerais';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
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
            style={{ backgroundColor: primaryColor }}
          ></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl">
              {service.category && (
                <div className="mb-4">
                  <span 
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    {service.category}
                  </span>
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {service.h1Title || service.name}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {service.introText || service.description}
              </p>
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
                    Services
                  </Link>
                </li>
                <li>/</li>
                <li className="text-black font-medium">{service.name}</li>
              </ol>
            </nav>

            {/* Service Description */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-4">About {service.name}</h2>
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

            {/* Cities Available */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-8 text-center">
                Available in These Cities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
                  <Link
                    key={city.$id || city.slug}
                    href={`/cities/${city.slug}?service=${service.slug}`}
                    className="group"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                      {city.image && (
                        <div className="relative h-32 w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={city.image}
                            alt={city.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:underline">
                        {city.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {city.description || city.introText}
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <span 
                          className="text-sm font-semibold"
                          style={{ color: primaryColor }}
                        >
                          Find Providers
                        </span>
                        <svg 
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          style={{ color: primaryColor }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Features/Details */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-black mb-6 text-center">
                Why Choose Our {service.name} Service?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${secondaryColor}20` }}
                  >
                    <svg 
                      className="w-6 h-6"
                      style={{ color: secondaryColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Verified Professionals</h3>
                    <p className="text-gray-600">
                      All service providers are verified and background-checked for your peace of mind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${secondaryColor}20` }}
                  >
                    <svg 
                      className="w-6 h-6"
                      style={{ color: secondaryColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Fast Response</h3>
                    <p className="text-gray-600">
                      Get connected with service providers quickly. Most respond within hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${secondaryColor}20` }}
                  >
                    <svg 
                      className="w-6 h-6"
                      style={{ color: secondaryColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-600">
                      Read reviews from real customers to ensure you get the best service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${secondaryColor}20` }}
                  >
                    <svg 
                      className="w-6 h-6"
                      style={{ color: secondaryColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Competitive Pricing</h3>
                    <p className="text-gray-600">
                      Compare prices from multiple providers to get the best value for your money.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div 
              className="rounded-xl p-8 text-center text-white"
              style={{ backgroundColor: secondaryColor }}
            >
              <h3 className="text-3xl font-bold mb-4">
                Need {service.name} in {defaultCity}?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Find trusted {service.name.toLowerCase()} providers near you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/cities/${defaultCity.toLowerCase().replace(/\s+/g, '-')}?service=${service.slug}`}
                  className="px-8 py-3 bg-white text-black rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Find Providers in {defaultCity}
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-bold hover:bg-white/10 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

