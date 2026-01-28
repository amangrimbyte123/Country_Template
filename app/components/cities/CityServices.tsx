import Image from 'next/image';
import Link from 'next/link';
import type { Service, City } from '@/app/lib/database';

interface CityServicesProps {
  service: Service;
  city: City;
  primaryColor: string;
}

export default function CityServices({ service, city, primaryColor }: CityServicesProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Serviço Disponível em {city.name}
      </h2>
      <div className="max-w-2xl mx-auto">
        <Link
          href={`/${city.slug}/${service.slug}`}
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
                Ver Prestadores
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
    </section>
  );
}

