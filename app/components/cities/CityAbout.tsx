import type { City } from '@/app/lib/database';

interface CityAboutProps {
  city: City;
}

export default function CityAbout({ city }: CityAboutProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 mb-12 border border-gray-100">
      <h2 className="text-3xl font-bold text-black mb-4">About {city.name}</h2>
      <div className="prose max-w-none">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          {city.description}
        </p>
        {city.introText && city.introText !== city.description && (
          <p className="text-gray-700 text-lg leading-relaxed">
            {city.introText}
          </p>
        )}
      </div>
    </div>
  );
}

