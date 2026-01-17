import Image from 'next/image';
import Link from 'next/link';
import type { Service, City } from '@/app/lib/database';

interface CityServicesProps {
  services: Service[];
  city: City;
  primaryColor: string;
}

export default function CityServices({ services, city, primaryColor }: CityServicesProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Serviços Disponíveis em {city.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.$id || service.slug}
            href={`/${city.slug}/${service.slug}`}
            className="group"
          >
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              {service.imageUrl && (
                <div className="relative h-32 w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-black mb-2 group-hover:underline">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {service.description || service.introText}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span 
                  className="text-sm font-semibold"
                  style={{ color: primaryColor }}
                >
                  Ver Prestadores
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
    </section>
  );
}

