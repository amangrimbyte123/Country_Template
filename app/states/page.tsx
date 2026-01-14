import { getStates, getBasicInfo } from '../lib/database';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const basicInfo = await getBasicInfo();
  
  return {
    title: `All States – ${basicInfo?.siteName || 'ServiceFinder Brazil'}`,
    description: basicInfo?.metaDescription || 'Browse all states and find trusted service providers in your area.',
    keywords: basicInfo?.metaKeywords || 'states, service providers, home services',
  };
}

export default async function StatesPage() {
  const states = await getStates(1000); // Get all states
  const basicInfo = await getBasicInfo();
  
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="text-white py-16"
        style={{ 
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)` 
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Browse All States
          </h1>
          <p className="text-center text-xl mt-4 opacity-90">
            Discover trusted service providers across all states in Brazil
          </p>
        </div>
      </div>

      {/* States Grid */}
      <div className="container mx-auto px-4 py-16">
        {states.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {states.map((state) => (
              <Link
                key={state.$id || state.slug}
                href={`/states/${state.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col">
                  {/* State Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    {state.image ? (
                      <Image
                        src={state.image}
                        alt={state.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <svg 
                          className="w-16 h-16"
                          style={{ color: primaryColor }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* State Name Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div 
                        className="inline-block px-4 py-2 rounded-lg text-white font-bold shadow-lg"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        {state.name}
                      </div>
                    </div>
                  </div>

                  {/* State Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {state.description || state.introText}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 mt-auto">
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
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No states found. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}

