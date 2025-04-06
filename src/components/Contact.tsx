import React, { useState, useEffect } from 'react';
import { Mail, Phone, Facebook } from 'lucide-react';

const Contact = () => {
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    // Get service from URL hash
    const hash = window.location.hash;
    if (hash.includes('?service=')) {
      const service = hash.split('?service=')[1];
      setSelectedService(service);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash.includes('?service=')) {
        const service = newHash.split('?service=')[1];
        setSelectedService(service);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
    // Reset form
    (e.target as HTMLFormElement).reset();
    setSelectedService('');
    // Show success message
    alert('Thank you for your order! We will contact you shortly.');
  };

  const serviceOptions = {
    website: 'Website Design ($999+)',
    tshirt: 'T-Shirt Design ($199+)',
    'business-cards': 'Business Cards ($99+)'
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Get in touch for inquiries and custom design requests
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a service</option>
                  {Object.entries(serviceOptions).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Please describe your project requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600" />
              <span className="ml-4 text-gray-600">contact@designsbynoble29@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-600" />
              <span className="ml-4 text-gray-600">+1 (407)754-8453</span>
            </div>
            <div className="flex items-center">
              <Facebook className="h-6 w-6 text-blue-600" />
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-blue-600 hover:text-blue-700"
              >
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;