export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          <p className="text-center text-xl mt-4">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">📧 Email</h3>
                  <p className="text-gray-700">info@brazildirectory.com</p>
                  <p className="text-gray-700">support@brazildirectory.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">📱 Phone</h3>
                  <p className="text-gray-700">+55 11 1234-5678</p>
                  <p className="text-gray-700">+55 21 8765-4321</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">📍 Address</h3>
                  <p className="text-gray-700">Avenida Paulista, 1000</p>
                  <p className="text-gray-700">São Paulo, SP 01310-100</p>
                  <p className="text-gray-700">Brazil</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">⏰ Business Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

