'use client';

import { useState } from 'react';

interface ListingFiltersProps {
  primaryColor: string;
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  minRating: number | null;
  verified: boolean | null;
  featured: boolean | null;
  types: string[];
  openNow: boolean | null;
}

export default function ListingFilters({ primaryColor, onFilterChange }: ListingFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    minRating: null,
    verified: null,
    featured: null,
    types: [],
    openNow: null,
  });

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleTypeToggle = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(newTypes);
    handleFilterChange('types', newTypes);
  };

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      minRating: null,
      verified: null,
      featured: null,
      types: [],
      openNow: null,
    };
    setFilters(clearedFilters);
    setSelectedTypes([]);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = filters.minRating !== null || 
    filters.verified !== null || 
    filters.featured !== null || 
    filters.types.length > 0 || 
    filters.openNow !== null;

  const businessTypes = [
    'Air conditioning system supplier',
    'HVAC contractor',
    'Appliance repair service',
    'Plumbing service',
    'Electrical contractor',
    'Home improvement store',
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-black">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm font-semibold hover:underline"
            style={{ color: primaryColor }}
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Rating Filter */}
        <div>
          <h4 className="text-sm font-semibold text-black mb-3">Minimum Rating</h4>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.minRating === rating}
                  onChange={() => handleFilterChange('minRating', rating)}
                  className="w-4 h-4"
                  style={{ accentColor: primaryColor }}
                />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">& up</span>
                </div>
              </label>
            ))}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === null}
                onChange={() => handleFilterChange('minRating', null)}
                className="w-4 h-4"
                style={{ accentColor: primaryColor }}
              />
              <span className="text-sm text-gray-600">Any rating</span>
            </label>
          </div>
        </div>

        {/* Verified Filter */}
        <div>
          <h4 className="text-sm font-semibold text-black mb-3">Verification</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.verified === true}
                onChange={(e) => handleFilterChange('verified', e.target.checked ? true : null)}
                className="w-4 h-4 rounded"
                style={{ accentColor: primaryColor }}
              />
              <span className="text-sm text-gray-700">Verified only</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.featured === true}
                onChange={(e) => handleFilterChange('featured', e.target.checked ? true : null)}
                className="w-4 h-4 rounded"
                style={{ accentColor: primaryColor }}
              />
              <span className="text-sm text-gray-700">Featured only</span>
            </label>
          </div>
        </div>

        {/* Business Type Filter */}
        <div>
          <h4 className="text-sm font-semibold text-black mb-3">Business Type</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {businessTypes.map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeToggle(type)}
                  className="w-4 h-4 rounded"
                  style={{ accentColor: primaryColor }}
                />
                <span className="text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Open Now Filter */}
        <div>
          <h4 className="text-sm font-semibold text-black mb-3">Availability</h4>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.openNow === true}
              onChange={(e) => handleFilterChange('openNow', e.target.checked ? true : null)}
              className="w-4 h-4 rounded"
              style={{ accentColor: primaryColor }}
            />
            <span className="text-sm text-gray-700">Open now</span>
          </label>
        </div>
      </div>
    </div>
  );
}

