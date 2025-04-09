import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedTours.css'; // Create this CSS file
import { tours } from '../data/tours';

function FeaturedTours() {
  return (
    <section className="featured-tours">
      <div className="container">
        <h2>Our Popular Tours</h2>
        <div className="tour-list">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-item">
              <img src={tour.image} alt={tour.name} />
              <div className="tour-details">
                <h3>{tour.name} ({tour.duration})</h3>
                <p>{tour.description}</p>
                <div className="tour-info">
                  <span className="price">From ${tour.details.price.perPerson}</span>
                  <span className="difficulty">{tour.details.difficulty}</span>
                </div>
                <Link to={`/tours/${tour.id}`} className="button">View Details</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <Link to="/tours" className="button secondary">View All Tours</Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;