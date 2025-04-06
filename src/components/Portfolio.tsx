import React from 'react';

const portfolioItems = [
  {
    category: 'Frontend Website',
    title: 'Modern E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80',
    description: 'Responsive e-commerce website with modern UI/UX design'
  },
  {
    category: 'T-shirt Design',
    title: 'Urban Collection 2024',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: 'Contemporary streetwear designs for urban fashion'
  },
  {
    category: 'Business Cards',
    title: 'Luxury Real Estate Cards',
    image: 'https://static.vecteezy.com/system/resources/previews/000/245/394/original/vector-modern-business-card-background.jpg',
    description: 'Premium business cards with gold foil accents'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Explore our latest works and creative solutions
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;