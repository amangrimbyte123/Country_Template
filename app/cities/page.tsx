import { getCities, getBasicInfo } from '../lib/database';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const basicInfo = await getBasicInfo();
  
  return {
    title: `Todas as Cidades – ${basicInfo?.siteName || 'ServiceFinder Brazil'}`,
    description: basicInfo?.metaDescription || 'Navegue por todas as cidades e encontre prestadores de serviços confiáveis na sua área.',
    keywords: basicInfo?.metaKeywords || 'cities, service providers, home services',
  };
}

export default async function CitiesPage() {
  const cities = await getCities(1000); // Get all cities
  const basicInfo = await getBasicInfo();
  
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const defaultState = basicInfo?.defaultState || 'Minas Gerais';

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
            Navegar Todas as Cidades
          </h1>
          <p className="text-center text-xl mt-4 opacity-90">
            Descubra prestadores de serviços confiáveis em cidades de {defaultState}
          </p>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="container mx-auto px-4 py-16">
        {cities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <Link
                key={city.$id || city.slug}
                href={`/cities/${city.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col">
                  {/* City Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    {city.image ? (
                      <Image
                        src={city.image}
                        alt={city.name}
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* City Name Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div 
                        className="inline-block px-4 py-2 rounded-lg text-white font-bold shadow-lg"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        {city.name}
                      </div>
                    </div>
                  </div>

                  {/* City Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {city.description || city.introText}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 mt-auto">
                      <span 
                        className="text-sm font-semibold"
                        style={{ color: primaryColor }}
                      >
                        Explorar Serviços
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
            <p className="text-gray-600 text-lg">Nenhuma cidade encontrada. Por favor, verifique novamente mais tarde.</p>
          </div>
        )}
      </div>
    </div>
  );
}

