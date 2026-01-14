import type { City } from '@/app/lib/database';

interface CityWhyChooseProps {
  city: City;
  primaryColor: string;
}

export default function CityWhyChoose({ city, primaryColor }: CityWhyChooseProps) {
  const reasons = [
    {
      icon: '🏆',
      title: 'Top-Rated Providers',
      description: `Access to the most trusted and highly-rated service providers in ${city.name}`,
    },
    {
      icon: '⚡',
      title: 'Quick Response',
      description: 'Get connected with providers who respond quickly to your service requests',
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Compare prices from multiple providers to get the best value',
    },
    {
      icon: '🛡️',
      title: 'Verified & Insured',
      description: 'All listed providers are verified, licensed, and insured for your peace of mind',
    },
  ];

  return (
    <section className="py-16 mb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Why Choose Service Providers in {city.name}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

