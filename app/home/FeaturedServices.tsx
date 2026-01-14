import type { BasicInfo } from '../lib/database';

interface FeaturedServicesProps {
  basicInfo: Partial<BasicInfo>;
}

export default function FeaturedServices({ basicInfo }: FeaturedServicesProps) {
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const categories = [
    { name: 'Restaurants', icon: '🍽️', count: 1250 },
    { name: 'Hotels', icon: '🏨', count: 850 },
    { name: 'Shopping', icon: '🛍️', count: 2100 },
    { name: 'Services', icon: '💼', count: 1680 },
    { name: 'Healthcare', icon: '🏥', count: 920 },
    { name: 'Education', icon: '📚', count: 750 },
    { name: 'Entertainment', icon: '🎭', count: 620 },
    { name: 'Real Estate', icon: '🏠', count: 1420 },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Browse by Services
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.count} listings</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

