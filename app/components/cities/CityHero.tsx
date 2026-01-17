import Image from 'next/image';
import type { City } from '@/app/lib/database';

interface CityHeroProps {
  city: City;
  primaryColor: string;
}

export default function CityHero({ city, primaryColor }: CityHeroProps) {
  return (
    <section className="relative h-96 overflow-hidden">
      {city.image ? (
        <Image
          src={city.image}
          alt={city.name}
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
              {city.h1Title || `Prestadores de Serviços Domésticos em ${city.name}`}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {city.introText || city.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

