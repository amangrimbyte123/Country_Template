import { getCityBySlug, getBasicInfo, getSingleService, getListingsByCityId } from '@/app/lib/database';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CityHero from '@/app/components/cities/CityHero';
import Breadcrumb from '@/app/components/cities/Breadcrumb';
import CityAbout from '@/app/components/cities/CityAbout';
import CityStats from '@/app/components/cities/CityStats';
import CityServices from '@/app/components/cities/CityServices';
import CityListings from '@/app/components/cities/CityListings';
import CityWhyChoose from '@/app/components/cities/CityWhyChoose';
import CityTestimonials from '@/app/components/cities/CityTestimonials';
import CityFAQ from '@/app/components/cities/CityFAQ';
import CityCTA from '@/app/components/cities/CityCTA';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = await getCityBySlug(slug);
  const basicInfo = await getBasicInfo();

  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: city.seoTitle || `${city.name} Home Services – ${basicInfo?.siteName || 'ServiceFinder'}`,
    description: city.seoDescription || city.description,
    keywords: `${city.name}, home services, ${basicInfo?.metaKeywords || ''}`,
    openGraph: {
      title: city.seoTitle || `${city.name} Home Services`,
      description: city.seoDescription || city.description,
      images: city.image ? [city.image] : [],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = await getCityBySlug(slug);
  const basicInfo = await getBasicInfo();
  const service = await getSingleService(); // Get single service instead of multiple
  const listings = city?.$id ? await getListingsByCityId(city.$id, 50) : [];

  if (!city) {
    notFound();
  }

  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <CityHero city={city} primaryColor={primaryColor} />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <Breadcrumb city={city} />

            {/* City Description */}
            <CityAbout city={city} />

            {/* City Listings */}
            <CityListings listings={listings} city={city} primaryColor={primaryColor} />

            {/* City Stats */}
            <CityStats city={city} primaryColor={primaryColor} secondaryColor={secondaryColor} />

            {/* Single Service Available */}
            {service && <CityServices service={service} city={city} primaryColor={primaryColor} />}

            {/* Why Choose Section */}
            <CityWhyChoose city={city} primaryColor={primaryColor} />

            {/* Testimonials */}
            <CityTestimonials city={city} primaryColor={primaryColor} />

            {/* FAQ Section */}
            <CityFAQ city={city} primaryColor={primaryColor} />

            {/* Call to Action */}
            <CityCTA city={city} secondaryColor={secondaryColor} />
          </div>
        </div>
      </section>
    </div>
  );
}

