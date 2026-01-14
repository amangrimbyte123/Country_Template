import Link from 'next/link';
import type { City } from '@/app/lib/database';

interface BreadcrumbProps {
  city: City;
}

export default function Breadcrumb({ city }: BreadcrumbProps) {
  return (
    <nav className="mb-8 text-sm">
      <ol className="flex items-center gap-2 text-gray-600">
        <li>
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/cities" className="hover:text-black transition-colors">
            Cities
          </Link>
        </li>
        <li>/</li>
        <li className="text-black font-medium">{city.name}</li>
      </ol>
    </nav>
  );
}

