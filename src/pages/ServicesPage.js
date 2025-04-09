import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './ServicesPage.css';

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Air Tickets',
      description: 'Sharp Travel helps customers with the best options of flight tickets and discounted airfares to places around the world.',
      icon: '✈️',
      category: 'Transportation',
      features: [
        'International flight bookings',
        'Domestic flight reservations',
        'Group travel discounts',
        'Last-minute deals',
        'Best price guarantee'
      ]
    },
    {
      id: 2,
      title: 'Hotel Booking',
      description: 'Access our extensive network of over 100,000 hotels worldwide, from luxury resorts to budget-friendly accommodations.',
      icon: '🏨',
      category: 'Accommodation',
      features: [
        'Worldwide hotel network',
        'Best rate guarantee',
        'Instant confirmation',
        'Free cancellation options',
        'Special corporate rates'
      ]
    },
    {
      id: 3,
      title: 'Global Visa Assistance',
      description: 'Expert visa assistance for all major countries. Our experienced team helps you navigate the visa application process seamlessly.',
      icon: '🛂',
      category: 'Documentation',
      features: [
        'Visa application processing',
        'Document verification',
        'Expert consultation',
        'Fast-track processing',
        'Multiple country visas'
      ]
    },
    {
      id: 4,
      title: 'Local Attractions',
      description: 'Discover the best of local tourism with our curated attraction packages and guided tours across major destinations.',
      icon: '🏛️',
      category: 'Tourism',
      features: [
        'Skip-the-line tickets',
        'Professional guided tours',
        'Cultural experiences',
        'Adventure activities',
        'Local expert guides'
      ]
    },
    {
      id: 5,
      title: 'Cruise Bookings',
      description: 'Experience luxury cruise holidays with world-class amenities, entertainment, and multiple destination stops.',
      icon: '🚢',
      category: 'Luxury Travel',
      features: [
        'Premium cruise packages',
        'All-inclusive options',
        'Multiple destinations',
        'Onboard entertainment',
        'Luxury amenities'
      ]
    },
    {
      id: 6,
      title: 'Car Rental',
      description: 'Choose from our fleet of well-maintained vehicles, from economy cars to luxury vehicles, with professional drivers.',
      icon: '🚗',
      category: 'Transportation',
      features: [
        'Diverse vehicle fleet',
        'Professional chauffeurs',
        'Airport transfers',
        'Long-term rentals',
        'Corporate packages'
      ]
    }
  ];

  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <div className="services-page">
      <SEO 
        title="Our Services - Sharp Travels & Tours"
        description="Discover our comprehensive travel services including air tickets, hotel bookings, visa assistance, and more."
      />
      <div className="container">
        <h1>Our Services</h1>
        <p className="services-intro">
          Sharp Travel offers a complete suite of travel services to make your journey seamless and memorable. 
          From flight bookings to local experiences, we ensure quality service at every step of your journey.
        </p>
        
        {Object.entries(groupedServices).map(([category, categoryServices]) => (
          <div key={category} className="service-category">
            <h2 className="category-title">{category}</h2>
            <div className="services-grid">
              {categoryServices.map(service => (
                <div key={service.id} className="service-card">
                  <div className="service-number">0{service.id}</div>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="button">Inquire Now</Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="services-cta">
          <h3>Ready to Plan Your Journey?</h3>
          <p>Our travel experts are here to help you create the perfect travel experience.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="button button-primary">Contact Us</Link>
            <Link to="/about" className="button button-secondary">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage; 