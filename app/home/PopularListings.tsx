import type { BasicInfo } from '../lib/database';

interface PopularListingsProps {
  basicInfo: Partial<BasicInfo>;
}

export default function PopularListings({ basicInfo }: PopularListingsProps) {
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const defaultCity = basicInfo?.defaultCity || 'Belo Horizonte';
  const defaultState = basicInfo?.defaultState || 'Minas Gerais';
  
  const listings = [
    {
      id: 1,
      name: 'Restaurante Tropical',
      category: 'Restaurant',
      location: 'São Paulo, SP',
      rating: 4.8,
      image: '🍽️',
    },
    {
      id: 2,
      name: 'Hotel Copacabana Palace',
      category: 'Hotel',
      location: 'Rio de Janeiro, RJ',
      rating: 4.9,
      image: '🏨',
    },
    {
      id: 3,
      name: 'Shopping Iguatemi',
      category: 'Shopping Mall',
      location: 'São Paulo, SP',
      rating: 4.7,
      image: '🛍️',
    },
    {
      id: 4,
      name: 'Tech Solutions Brazil',
      category: 'IT Services',
      location: 'Brasília, DF',
      rating: 4.6,
      image: '💼',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Popular Listings in {defaultCity}, {defaultState}
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="bg-gray-100 h-48 flex items-center justify-center text-6xl">
                {listing.image}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black mb-2">{listing.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{listing.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{listing.location}</span>
                  <span className="text-yellow-500 font-semibold">⭐ {listing.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

