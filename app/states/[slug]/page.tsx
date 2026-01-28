import { getStateBySlug, getBasicInfo, getSingleService, getCitiesByStateId } from '@/app/lib/database';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface StatePageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const state = await getStateBySlug(slug);
  const basicInfo = await getBasicInfo();

  if (!state) {
    return {
      title: 'State Not Found',
    };
  }

  return {
    title: state.seoTitle || `${state.name} Home Services – ${basicInfo?.siteName || 'ServiceFinder'}`,
    description: state.seoDescription || state.description,
    keywords: `${state.name}, home services, ${basicInfo?.metaKeywords || ''}`,
    openGraph: {
      title: state.seoTitle || `${state.name} Home Services`,
      description: state.seoDescription || state.description,
      images: state.image ? [state.image] : [],
    },
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { slug } = await params;
  const state = await getStateBySlug(slug);
  const basicInfo = await getBasicInfo();
  const service = await getSingleService(); // Get single service instead of multiple
  const cities = state?.$id ? await getCitiesByStateId(state.$id, 20) : [];

  if (!state) {
    notFound();
  }

  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        {state.image ? (
          <Image
            src={state.image}
            alt={state.name}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {state.h1Title || `${state.name} Home Service Providers`}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {state.introText || state.description}
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
                  <Link href="/states" className="hover:text-black transition-colors">
                    States
                  </Link>
                </li>
                <li>/</li>
                <li className="text-black font-medium">{state.name}</li>
              </ol>
            </nav>

            {/* State Description */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-4">About {state.name}</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {state.description}
                </p>
                {state.introText && state.introText !== state.description && (
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {state.introText}
                  </p>
                )}
              </div>
            </div>

            {/* Cities in State */}
            {cities.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  Cities in {state.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cities.map((city) => (
                    <Link
                      key={city.$id || city.slug}
                      href={`/cities/${city.slug}`}
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
                            Explore Services
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
            )}

            {/* Single Service Available */}
            {service && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  Service Available in {state.name}
                </h2>
                <div className="max-w-2xl mx-auto">
                  <Link
                    href={`/services/${service.slug}?state=${state.slug}`}
                    className="group block"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                      {service.imageUrl && (
                        <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={service.imageUrl}
                            alt={service.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}
                      {service.category && (
                        <div className="mb-3">
                          <span 
                            className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white"
                            style={{ backgroundColor: secondaryColor }}
                          >
                            {service.category}
                          </span>
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-black mb-3 group-hover:underline">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description || service.introText}
                      </p>
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-base font-semibold"
                          style={{ color: primaryColor }}
                        >
                          View Providers
                        </span>
                        <svg 
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div 
              className="rounded-xl p-8 text-center text-white"
              style={{ backgroundColor: secondaryColor }}
            >
              <h3 className="text-3xl font-bold mb-4">
                Need Service in {state.name}?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Connect with verified service providers across {state.name}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {service && (
                  <Link
                    href={`/services/${service.slug}`}
                    className="px-8 py-3 bg-white text-black rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    View Service
                  </Link>
                )}
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

