import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import FeaturedTours from '../components/FeaturedTours';
import WhyChooseUs from '../components/WhyChooseUs';
import SEO from '../components/SEO';
import { OrganizationSchema } from '../components/StructuredData';

function HomePage() {
  return (
    <>
      <SEO 
        title="Sharp Travel"
        description="Discover Nepal's most beautiful destinations with Sharp Travel. Book customized tours, trek the Himalayas, explore cultural heritage sites, and experience authentic Nepalese hospitality."
        keywords="Nepal travel, Nepal tours, Himalayan treks, Kathmandu tours, Sharp Travel, travel agency Nepal, Nepal adventures"
      />
      <OrganizationSchema />
      <Hero />
      <FeaturedDestinations />
      <FeaturedTours />
      <WhyChooseUs />
    </>
  );
}

export default HomePage;