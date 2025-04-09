import React from 'react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';
import SEO from '../components/SEO';
import './ToursPage.css';

function ToursPage() {
  return (
    <div className="tours-page">
      <SEO 
        title="Nepal Tours & Packages | Sharp Travel"
        description="Discover our range of Nepal tours including trekking, cultural tours, wildlife safaris, and adventure sports. Book your perfect Nepal tour package."
        keywords="Nepal tours, Nepal trekking, cultural tours Nepal, wildlife safari Nepal, adventure tours Nepal"
      />
      <div className="container">
        <h1>Our Tour Packages</h1>
        <div className="tours-grid">
          {tours.map(tour => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image} alt={tour.name} />
              <div className="tour-info">
                <h2>{tour.name}</h2>
                <p>{tour.description}</p>
                <div className="tour-meta">
                  <span>Duration: {tour.duration}</span>
                  <span>Price: ${tour.price}</span>
                </div>
                <Link to={`/tours/${tour.id}`} className="button">
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

export default ToursPage; 