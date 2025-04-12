import React from 'react';
import { Link } from 'react-router-dom';
import { packages } from '../data/packages';
import SEO from '../components/SEO';
import './PackagesPage.css';

function PackagesPage() {
  return (
    <div className="packages-page">
      <SEO 
        title="Nepal packages & Packages | Sharp Travel"
        description="Discover our range of Nepal packages including trekking, cultural packages, wildlife safaris, and adventure sports. Book your perfect Nepal packages package."
        keywords="Nepal packages, Nepal trekking, cultural packages Nepal, wildlife safari Nepal, adventure packages Nepal"
      />
      <div className="container">
        <h1>Our Packages</h1>
        <div className="packages-grid">
          {packages.map(packages => (
            <div key={packages.id} className="packages-card">
              <img src={packages.image} alt={packages.name} />
              <div className="packages-info">
                <h2>{packages.name}</h2>
                <p>{packages.description}</p>
                <div className="packages-meta">
                  <span>Duration: {packages?.duration}</span>
                  <span>Price: ${packages?.details?.price?.perPerson}</span>
                </div>
                <Link to={`/packages/${packages.id}`} className="button">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PackagesPage; 