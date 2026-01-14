import Image from 'next/image';
import Link from 'next/link';
import type { Listing } from '@/app/lib/database';

interface ListingListItemProps {
  listing: Listing;
  primaryColor: string;
  citySlug?: string;
}

export default function ListingListItem({ listing, primaryColor, citySlug }: ListingListItemProps) {
  const parseOpeningHours = (hoursString?: string | null) => {
    if (!hoursString) return null;
    try {
      return JSON.parse(hoursString);
    } catch {
      return null;
    }
  };

  const openingHours = parseOpeningHours(listing.openingHours);
  const isOpen = openingHours ? checkIfOpen(openingHours) : null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Thumbnail */}
        <div className="md:w-32 md:flex-shrink-0">
          {listing.thumbnail ? (
            <div className="relative h-32 w-full md:h-24 rounded-lg overflow-hidden">
              <Image
                src={listing.thumbnail}
                alt={listing.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div 
              className="h-32 w-full md:h-24 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: primaryColor + '20' }}
            >
              <span className="text-3xl">🏢</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            {/* Left Side - Main Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2 mb-2">
                <h3 className="text-lg font-bold text-black line-clamp-2 flex-1">
                  {listing.title}
                </h3>
                <div className="flex gap-2 flex-shrink-0">
                  {listing.verified && (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                      ✓ Verified
                    </span>
                  )}
                  {listing.featured && (
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>

              {listing.types && (
                <p className="text-sm text-gray-600 mb-2">{listing.types}</p>
              )}

              {/* Rating */}
              {listing.rating && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(listing.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-black">{listing.rating.toFixed(1)}</span>
                  {listing.ratingCount && (
                    <span className="text-sm text-gray-600">({listing.ratingCount} reviews)</span>
                  )}
                </div>
              )}

              {/* Address */}
              {listing.address && (
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-gray-600 line-clamp-1">{listing.address}</p>
                </div>
              )}

              {/* Status */}
              {isOpen !== null && (
                <div className="flex items-center gap-2 mt-2">
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm text-gray-600">
                    {isOpen ? 'Open now' : 'Closed now'}
                  </span>
                </div>
              )}
            </div>

            {/* Right Side - Actions */}
            <div className="flex flex-col gap-2 md:w-32 md:flex-shrink-0">
              {citySlug ? (
                <Link
                  href={`/${citySlug}/${listing.slug}`}
                  className="px-4 py-2 text-sm font-semibold text-center rounded-lg text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: primaryColor }}
                >
                  View
                </Link>
              ) : (
                <span className="px-4 py-2 text-sm font-semibold text-center rounded-lg text-gray-400 bg-gray-200 whitespace-nowrap cursor-not-allowed">
                  View
                </span>
              )}
            </div>
          </div>
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

