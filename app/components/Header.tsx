'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  basicInfo?: {
    siteName?: string;
    logo?: string;
    logoAlt?: string;
    primaryColor?: string;
    secondaryColor?: string;
  };
}

export default function Header({ basicInfo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';
  const logo = basicInfo?.logo || '';
  const logoAlt = basicInfo?.logoAlt || `${siteName} Logo`;
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/services', label: 'Serviços' },
    { href: '/about', label: 'Sobre' },
    { href: '/contact', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 overflow-visible ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-200'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-[72px] overflow-hidden">
          {/* Logo Only - Clean Design - Attractive Size */}
          <Link
            href="/"
            className="flex items-center group transition-opacity hover:opacity-80 flex-shrink-0 h-full"
          >
            {logo ? (
              <div className="relative flex-shrink-0 flex items-center" style={{ height: '100%', maxWidth: 'none' }}>
                <Image
                  src={logo}
                  alt={logoAlt}
                  width={500}
                  height={130}
                  className="object-contain"
                  priority
                  unoptimized
                  style={{ 
                    height: '180px',
                    width: 'auto',
                    maxHeight: '180px'
                  }}
                />
              </div>
            ) : (
              <div
                className="h-12 px-5 flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ backgroundColor: primaryColor }}
              >
                {siteName.charAt(0)}
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors group"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: secondaryColor }}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: secondaryColor }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Começar
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2 border-t border-gray-200 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-4 mt-4 px-6 py-3 text-center rounded-full font-semibold text-white shadow-md"
              style={{ backgroundColor: secondaryColor }}
            >
              Começar
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

