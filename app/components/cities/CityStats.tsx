import type { City } from '@/app/lib/database';

interface CityStatsProps {
  city: City;
  primaryColor: string;
  secondaryColor: string;
}

export default function CityStats({ city, primaryColor, secondaryColor }: CityStatsProps) {
  // Mock stats - in a real app, these would come from the database
  const stats = [
    {
      label: 'Service Providers',
      value: '500+',
      icon: '👷',
    },
    {
      label: 'Services Available',
      value: '50+',
      icon: '🔧',
    },
    {
      label: 'Happy Customers',
      value: '10K+',
      icon: '😊',
    },
    {
      label: 'Average Rating',
      value: '4.8★',
      icon: '⭐',
    },
  ];

  return (
    <section className="py-12 mb-12 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          {city.name} at a Glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: primaryColor }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

