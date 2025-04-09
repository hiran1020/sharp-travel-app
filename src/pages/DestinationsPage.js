import React from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import SEO from '../components/SEO';
import './DestinationsPage.css';

function DestinationsPage() {
  return (
    <div className="destinations-page">
      <SEO 
        title="Destinations in Nepal | Sharp Travel"
        description="Explore beautiful destinations in Nepal including Kathmandu, Pokhara, Lumbini, and more. Discover the best places to visit in Nepal."
        keywords="Nepal destinations, places to visit in Nepal, Kathmandu, Pokhara, Lumbini, Chitwan, Sharp Travel"
      />
      <div className="container">
        <h1>Explore Nepal's Beautiful Destinations</h1>
        <div className="destinations-grid">
          {destinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <img src={destination.image} alt={destination.name} />
              <div className="destination-info">
                <h2>{destination.name}</h2>
                <p>{destination.description}</p>
                <Link to={`/destinations/${destination.id}`} className="button">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationsPage; 