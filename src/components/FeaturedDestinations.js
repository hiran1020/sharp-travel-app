import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedDestinations.css'; // Create this CSS file
import { destinations } from '../data/destinations';

function FeaturedDestinations() {
  return (
    <section className="featured-destinations">
      <div className="container">
        <h2>Explore Our Top Destinations</h2>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <img src={destination.image} alt={destination.name} />
              <div className="card-content">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <div className="price-range">
                  <span>From ${destination.details.price.budget}/day</span>
                </div>
                <Link to={`/destinations/${destination.id}`} className="button">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <Link to="/destinations" className="button secondary">View All Destinations</Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;