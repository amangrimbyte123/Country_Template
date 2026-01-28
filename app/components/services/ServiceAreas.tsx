'use client';

import Link from 'next/link';
import type { Service, City } from '@/app/lib/database';

interface ServiceAreasProps {
  cities: City[];
  service: Service;
  primaryColor: string;
  secondaryColor: string;
}

export default function ServiceAreas({ cities, service, primaryColor, secondaryColor }: ServiceAreasProps) {
  if (!cities || cities.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Atendemos Toda a Região
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Se você está buscando por "{service.name.toLowerCase()} próximo de mim"? Estamos prontos para te atender nos principais bairros da região:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {cities.map((city) => (
            <Link
              key={city.$id || city.slug}
              href={`/cities/${city.slug}?service=${service.slug}`}
              className="text-gray-700 hover:text-black hover:underline transition-colors text-sm"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

