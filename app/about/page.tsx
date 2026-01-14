export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">About Brazil Directory</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Brazil Directory is your comprehensive guide to discovering the best businesses, services, and places across Brazil. 
              We connect people with local businesses and help them make informed decisions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded with a mission to support local businesses and make it easier for people to find what they need, 
              we've grown to become one of Brazil's most trusted directory platforms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower local businesses by providing them with a platform to reach more customers, 
              while helping people discover the best services and products in their area.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">Verified Listings</h3>
                <p className="text-gray-700">
                  All businesses are verified to ensure quality and authenticity.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">Comprehensive Coverage</h3>
                <p className="text-gray-700">
                  We cover all major cities and regions across Brazil.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">User Reviews</h3>
                <p className="text-gray-700">
                  Real reviews from real customers to help you make decisions.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">Easy to Use</h3>
                <p className="text-gray-700">
                  Simple and intuitive interface for quick searches.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

