import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPackages.css'; // Create this CSS file
import { packages } from '../data/packages';

function FeaturedPackages() {
  return (
    <section className="featured-packages">
      <div className="container">
        <h2>Our Popular packages</h2>
        <div className="packages-list">
          {packages.map((packages) => (
            <div key={packages.id} className="packages-item">
              <img src={packages.image} alt={packages.name} />
              <div className="packages-details">
                <h3>{packages.name} ({packages.duration})</h3>
                <p>{packages.description}</p>
                <div className="packages-info">
                  <span className="price">From ${packages.details.price.perPerson}</span>
                  <span className="difficulty">{packages.details.difficulty}</span>
                </div>
                <Link to={`/packages/${packages.id}`} className="button">View Details</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <Link to="/packages" className="button secondary">View All packages</Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPackages;