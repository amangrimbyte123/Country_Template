'use client';

import { useState, useMemo } from 'react';
import type { Listing } from '@/app/lib/database';
import ListingListItem from './ListingListItem';
import ListingFilters, { FilterState } from './ListingFilters';

interface ListingsWithFiltersProps {
  listings: Listing[];
  primaryColor: string;
  cityName?: string;
  citySlug?: string;
}

export default function ListingsWithFilters({ listings, primaryColor, cityName, citySlug }: ListingsWithFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    minRating: null,
    verified: null,
    featured: null,
    types: [],
    openNow: null,
  });

  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'reviews'>('rating');

  // Filter and sort listings
  const filteredListings = useMemo(() => {
    let filtered = [...listings];

    // Apply filters
    if (filters.minRating !== null) {
      filtered = filtered.filter(listing => 
        listing.rating != null && listing.rating >= filters.minRating!
      );
    }

    if (filters.verified === true) {
      filtered = filtered.filter(listing => listing.verified === true);
    }

    if (filters.featured === true) {
      filtered = filtered.filter(listing => listing.featured === true);
    }

    if (filters.types.length > 0) {
      filtered = filtered.filter(listing => 
        listing.types && filters.types.some(type => listing.types?.includes(type))
      );
    }

    if (filters.openNow === true) {
      filtered = filtered.filter(listing => {
        if (!listing.openingHours) return false;
        try {
          const hours = JSON.parse(listing.openingHours);
          return checkIfOpen(hours);
        } catch {
          return false;
        }
      });
    }

    // Sort listings
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'reviews':
          return (b.ratingCount || 0) - (a.ratingCount || 0);
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [listings, filters, sortBy]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-black mb-2">
            {cityName ? `Service Providers in ${cityName}` : 'Service Providers'}
          </h2>
          <p className="text-gray-600">
            Showing {filteredListings.length} of {listings.length} providers
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <label className="text-sm text-gray-600 mr-2">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'rating' | 'name' | 'reviews')}
            className="px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ 
              '--tw-ring-color': primaryColor,
            } as React.CSSProperties & { '--tw-ring-color'?: string }}
          >
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviews</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Main Content with Filters and Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Filters */}
        <div className="lg:col-span-1">
          <ListingFilters 
            primaryColor={primaryColor} 
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Right Side - Listing List */}
        <div className="lg:col-span-3">
          {filteredListings.length > 0 ? (
            <div className="max-h-[800px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              {filteredListings.map((listing) => (
                <ListingListItem
                  key={listing.$id || listing.slug}
                  listing={listing}
                  primaryColor={primaryColor}
                  citySlug={citySlug}
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-12 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-black mb-2">No listings found</h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more results
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper function to check if business is open
function checkIfOpen(openingHours: Record<string, string>): boolean {
  const now = new Date();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const currentTime = now.getHours() * 100 + now.getMinutes();
  
  const hours = openingHours[dayName];
  if (!hours || hours === 'Closed') return false;

  // Simple check - in production, you'd want more robust parsing
  const [open, close] = hours.split('–').map(time => {
    const [hour, minute] = time.trim().replace(/[APM]/g, '').split(':').map(Number);
    const isPM = time.includes('PM');
    return (hour === 12 ? 0 : hour) * 100 + (minute || 0) + (isPM ? 1200 : 0);
  });

  return currentTime >= open && currentTime <= close;
}

