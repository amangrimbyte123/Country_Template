import { getBasicInfo } from '../lib/database';

export default async function Footer() {
  // Fetch basic info for footer (Server Component)
  const basicInfo = await getBasicInfo();
  
  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';
  const tagline = basicInfo?.tagline || 'Your comprehensive guide to discovering businesses, services, and places across Brazil.';
  const supportEmail = basicInfo?.supportEmail || 'support@servicefinder.com.br';
  const contactPhone = basicInfo?.contactPhone || '+55 31 99999-9999';
  const businessAddress = basicInfo?.businessAddress || 'Belo Horizonte, Minas Gerais, Brazil';
  const footerText = basicInfo?.footerText || `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`;

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">{siteName}</h3>
            <p className="text-gray-600">
              {tagline}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-black transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-black transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600 hover:text-black transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: {supportEmail}</li>
              <li>Phone: {contactPhone}</li>
              <li>Address: {businessAddress}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>{footerText}</p>
        </div>
      </div>
    </footer>
  );
}

