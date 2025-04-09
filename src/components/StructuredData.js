import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

// Organization schema
export const OrganizationSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sharp Travel",
    "url": "https://sharptravel.com",
    "logo": "https://sharptravel.com/logo.png",
    "description": "Discover Nepal's most beautiful destinations with Sharp Travel. Book customized tours, trek the Himalayas, explore cultural heritage sites, and experience authentic Nepalese hospitality.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati",
      "postalCode": "44600",
      "addressCountry": "NP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+977-1-4444444",
      "contactType": "customer service",
      "email": "info@sharptravel.com"
    }
  };

  return <StructuredData data={data} />;
};

// Tour schema
export const TourSchema = ({ tour }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": tour.name,
    "description": tour.description,
    "image": tour.image,
    "url": `https://sharptravel.com/tours/${tour.id}`,
    "tourBookingPage": `https://sharptravel.com/tours/${tour.id}`,
    "priceRange": `$${tour.details.price.perPerson}`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NP"
    }
  };

  return <StructuredData data={data} />;
};

// Destination schema
export const DestinationSchema = ({ destination }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": destination.name,
    "description": destination.description,
    "image": destination.image,
    "url": `https://sharptravel.com/destinations/${destination.id}`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NP"
    }
  };

  return <StructuredData data={data} />;
};

export default StructuredData; 