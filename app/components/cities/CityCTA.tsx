import Link from 'next/link';
import type { City } from '@/app/lib/database';

interface CityCTAProps {
  city: City;
  secondaryColor: string;
}

export default function CityCTA({ city, secondaryColor }: CityCTAProps) {
  return (
    <section 
      className="rounded-xl p-8 text-center text-white"
      style={{ backgroundColor: secondaryColor }}
    >
      <h3 className="text-3xl font-bold mb-4">
        Need Service in {city.name}?
      </h3>
      <p className="text-xl mb-6 opacity-90">
        Connect with verified service providers in your area
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/services"
          className="px-8 py-3 bg-white text-black rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Browse All Services
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-bold hover:bg-white/10 transition-all duration-200"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

