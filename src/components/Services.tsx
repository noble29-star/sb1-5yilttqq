import React from 'react';
import { CreditCard, Truck, Download } from 'lucide-react';

const Services = () => {
  const handleOrderClick = (service: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Update URL after scroll
      window.history.pushState({}, '', `#contact?service=${service}`);
      // Dispatch event to notify Contact component
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Professional design solutions tailored to your needs
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Website Design */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900">Website Design</h3>
              <p className="mt-4 text-gray-600">Custom responsive websites built with modern technologies</p>
              <p className="mt-2 text-lg font-semibold text-blue-600">Starting at $300</p>
              <button
                onClick={handleOrderClick('website')}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-center cursor-pointer"
              >
                Order Now
              </button>
            </div>

            {/* T-Shirt Design */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900">T-Shirt Design</h3>
              <p className="mt-4 text-gray-600">Custom apparel designs for your brand or event</p>
              <p className="mt-2 text-lg font-semibold text-blue-600">Starting at $50</p>
              <button
                onClick={handleOrderClick('tshirt')}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-center cursor-pointer"
              >
                Order Now
              </button>
            </div>

            {/* Business Cards */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900">Business Cards</h3>
              <p className="mt-4 text-gray-600">Professional business card design and printing</p>
              <p className="mt-2 text-lg font-semibold text-blue-600">Starting at $75</p>
              <button
                onClick={handleOrderClick('business-cards')}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-center cursor-pointer"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Payment & Delivery Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Payment & Delivery</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <CreditCard className="h-12 w-12 text-blue-600" />
                <h4 className="mt-4 text-lg font-semibold">Secure Payments</h4>
                <p className="mt-2 text-gray-600">We accept PayPal, Visa, and Debit Cards</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Download className="h-12 w-12 text-blue-600" />
                <h4 className="mt-4 text-lg font-semibold">Digital Delivery</h4>
                <p className="mt-2 text-gray-600">Instant delivery for digital products</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="h-12 w-12 text-blue-600" />
                <h4 className="mt-4 text-lg font-semibold">Physical Shipping</h4>
                <p className="mt-2 text-gray-600">Fast shipping for physical products</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-16 text-sm text-gray-600 border-t pt-8">
            <p>
              All designs sold by My Designs By Noble are original works. Unauthorized resale or distribution
              is prohibited. Delivery times may vary based on product type and order volume.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;