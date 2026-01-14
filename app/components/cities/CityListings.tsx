import type { Listing, City } from '@/app/lib/database';
import ListingsWithFilters from '../listings/ListingsWithFilters';

interface CityListingsProps {
  listings: Listing[];
  city: City;
  primaryColor: string;
}

export default function CityListings({ listings, city, primaryColor }: CityListingsProps) {
  if (!listings || listings.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <ListingsWithFilters 
        listings={listings} 
        primaryColor={primaryColor}
        cityName={city.name}
        citySlug={city.slug}
      />
    </section>
  );
}

