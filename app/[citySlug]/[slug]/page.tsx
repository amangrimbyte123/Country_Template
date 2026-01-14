import { getListingBySlug, getServiceBySlug, getBasicInfo, getCityById, getCityBySlug, getListingsByCityId } from '@/app/lib/database';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface DynamicPageProps {
  params: Promise<{ citySlug: string; slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  const { citySlug, slug } = await params;
  const city = await getCityBySlug(citySlug);
  const basicInfo = await getBasicInfo();

  if (!city) {
    return {
      title: 'Page Not Found',
    };
  }

  // Check if it's a service first
  const service = await getServiceBySlug(slug);
  if (service) {
    const title = `${city.name} / ${service.name}`;
    return {
      title: `${title} – ${basicInfo?.siteName || 'ServiceFinder'}`,
      description: `${service.name} in ${city.name}. ${service.description || ''}`,
      keywords: `${service.name}, ${city.name}, ${service.category || ''}, home services`,
      openGraph: {
        title: title,
        description: `${service.name} - ${service.description}`,
        images: service.imageUrl ? [service.imageUrl] : [],
      },
    };
  }

  // Check if it's a listing
  const listing = await getListingBySlug(slug);
  if (listing && listing.cityId === city.$id) {
    const title = `${city.name} / ${listing.title}`;
    return {
      title: `${title} – ${basicInfo?.siteName || 'ServiceFinder'}`,
      description: `${listing.title} in ${city.name}. ${listing.types || ''}`,
      keywords: `${listing.title}, ${city.name}, ${listing.types || ''}`,
      openGraph: {
        title: title,
        description: `${listing.title} - ${listing.address}`,
        images: listing.thumbnail ? [listing.thumbnail] : [],
      },
    };
  }

  return {
    title: 'Page Not Found',
  };
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { citySlug, slug } = await params;
  const city = await getCityBySlug(citySlug);
  const basicInfo = await getBasicInfo();

  if (!city) {
    notFound();
  }

  // Check if it's a service first
  const service = await getServiceBySlug(slug);
  if (service) {
    return <ServicePageContent service={service} city={city} basicInfo={basicInfo} />;
  }

  // Check if it's a listing
  const listing = await getListingBySlug(slug);
  if (listing && listing.cityId === city.$id) {
    return <ListingPageContent listing={listing} city={city} basicInfo={basicInfo} />;
  }

  notFound();
}

// Service Page Component
async function ServicePageContent({ service, city, basicInfo }: { service: any; city: any; basicInfo: any }) {
  const listings = city.$id ? await getListingsByCityId(city.$id, 20) : [];
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

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
                {city.name} / {service.name}
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
                  <Link href="/cities" className="hover:text-black transition-colors">
                    Cities
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href={`/cities/${city.slug}`} className="hover:text-black transition-colors">
                    {city.name}
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

            {/* Service Providers in City */}
            {listings.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  {service.name} Providers in {city.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {listings.slice(0, 9).map((listing: any) => (
                    <Link
                      key={listing.$id || listing.slug}
                      href={`/${city.slug}/${listing.slug}`}
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        {listing.thumbnail && (
                          <div className="relative h-32 w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src={listing.thumbnail}
                              alt={listing.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-black mb-2 group-hover:underline">
                          {listing.title}
                        </h3>
                        {listing.rating && (
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(listing.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-sm font-semibold text-black">{listing.rating.toFixed(1)}</span>
                            {listing.ratingCount && (
                              <span className="text-sm text-gray-600">({listing.ratingCount})</span>
                            )}
                          </div>
                        )}
                        {listing.address && (
                          <p className="text-gray-600 text-sm line-clamp-2">{listing.address}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
                {listings.length > 9 && (
                  <div className="text-center mt-8">
                    <Link
                      href={`/cities/${city.slug}`}
                      className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity inline-block"
                      style={{ backgroundColor: primaryColor }}
                    >
                      View All Providers in {city.name}
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Call to Action */}
            <div 
              className="rounded-xl p-8 text-center text-white"
              style={{ backgroundColor: secondaryColor }}
            >
              <h3 className="text-3xl font-bold mb-4">
                Need {service.name} in {city.name}?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Find trusted {service.name.toLowerCase()} providers near you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/cities/${city.slug}`}
                  className="px-8 py-3 bg-white text-black rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  View All Providers
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

// Listing Page Component
async function ListingPageContent({ listing, city, basicInfo }: { listing: any; city: any; basicInfo: any }) {

  const relatedListings = listing.cityId ? await getListingsByCityId(listing.cityId, 6) : [];
  const filteredRelatedListings = relatedListings.filter(l => l.slug !== listing.slug);

  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  const parseOpeningHours = (hoursString?: string | null) => {
    if (!hoursString) return null;
    try {
      return JSON.parse(hoursString);
    } catch {
      return null;
    }
  };

  const openingHours = parseOpeningHours(listing.openingHours);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden">
        {listing.thumbnail ? (
          <Image
            src={listing.thumbnail}
            alt={listing.title}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-6">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-2">
                {listing.verified && (
                  <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                    ✓ Verified
                  </span>
                )}
                {listing.featured && (
                  <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full">
                    ⭐ Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {city.name} / {listing.title}
              </h1>
              {listing.types && (
                <p className="text-lg text-white/90">{listing.types}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
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
                  <Link href="/cities" className="hover:text-black transition-colors">
                    Cities
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href={`/cities/${city.slug}`} className="hover:text-black transition-colors">
                    {city.name}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-black font-medium">{listing.title}</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Business Info Card */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-black mb-4">About This Business</h2>
                  <div className="space-y-4">
                    {listing.address && (
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 mb-1">Address</p>
                          <p className="text-gray-700">{listing.address}</p>
                        </div>
                      </div>
                    )}

                    {listing.phone && (
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 mb-1">Phone</p>
                          <a href={`tel:${listing.phone}`} className="text-gray-700 hover:text-black transition-colors">
                            {listing.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {listing.website && (
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 mb-1">Website</p>
                          <a 
                            href={listing.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-black transition-colors break-all"
                          >
                            {listing.website}
                          </a>
                        </div>
                      </div>
                    )}

                    {listing.rating && (
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 mb-1">Rating</p>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-5 h-5 ${i < Math.floor(listing.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-lg font-semibold text-black">{listing.rating.toFixed(1)}</span>
                            {listing.ratingCount && (
                              <span className="text-gray-600">({listing.ratingCount} reviews)</span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Opening Hours */}
                {openingHours && (
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 className="text-2xl font-bold text-black mb-4">Opening Hours</h2>
                    <div className="space-y-2">
                      {Object.entries(openingHours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                          <span className="font-semibold text-black">{day}</span>
                          <span className="text-gray-600">{String(hours)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Action Card */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 sticky top-4">
                  {listing.website && (
                    <a
                      href={listing.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 text-center rounded-lg text-white font-semibold hover:opacity-90 transition-opacity block mb-4"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Visit Website
                    </a>
                  )}
                  {listing.phone && (
                    <a
                      href={`tel:${listing.phone}`}
                      className="w-full px-6 py-3 text-center rounded-lg border-2 font-semibold hover:bg-gray-50 transition-colors block"
                      style={{ borderColor: primaryColor, color: primaryColor }}
                    >
                      Call Now
                    </a>
                  )}
                </div>

                {/* Related Listings */}
                {filteredRelatedListings.length > 0 && (
                  <div className="mt-6 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-black mb-4">More in {city.name}</h3>
                    <div className="space-y-3">
                      {filteredRelatedListings.slice(0, 3).map((relatedListing) => (
                        <Link
                          key={relatedListing.$id || relatedListing.slug}
                          href={`/${city.slug}/${relatedListing.slug}`}
                          className="block p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                        >
                          <p className="font-semibold text-black text-sm mb-1 line-clamp-1">
                            {relatedListing.title}
                          </p>
                          {relatedListing.rating && (
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-400 text-xs">★</span>
                              <span className="text-xs text-gray-600">{relatedListing.rating.toFixed(1)}</span>
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`/cities/${city.slug}`}
                      className="mt-4 block text-center text-sm font-semibold hover:underline"
                      style={{ color: primaryColor }}
                    >
                      View All in {city.name} →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

