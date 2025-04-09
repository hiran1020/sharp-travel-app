import React from 'react';
import { useParams } from 'react-router-dom';
import { tours } from '../data/tours';
import SEO from '../components/SEO';
import { TourSchema } from '../components/StructuredData';
import './TourDetailsPage.css';

const TourDetailsPage = () => {
  const { id } = useParams();
  const tour = tours.find(t => t.id === id);

  if (!tour) {
    return <div className="container">Tour not found</div>;
  }

  return (
    <div className="tour-details-page">
      <SEO 
        title={tour.name}
        description={tour.description.substring(0, 160)}
        keywords={`${tour.name}, Nepal tours, Nepal travel, ${tour.details.includes.join(', ')}`}
      />
      <TourSchema tour={tour} />
      
      <div className="container">
        <div className="tour-header">
          <h1>{tour.name}</h1>
          <div className="tour-meta">
            <div className="meta-item">
              <i className="fas fa-clock"></i>
              <span>Duration: {tour.duration}</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-calendar-alt"></i>
              <span>Best Time: {tour.details.bestTime}</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-hiking"></i>
              <span>Difficulty: {tour.details.difficulty}</span>
            </div>
          </div>
        </div>

        <div className="tour-image">
          <img src={tour.image} alt={tour.name} />
        </div>

        <div className="tour-content">
          <div className="tour-description">
            <h2>About This Tour</h2>
            <p>{tour.description}</p>
          </div>

          <div className="tour-itinerary">
            <h2>Itinerary</h2>
            <ul>
              {tour.details.itinerary.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ul>
          </div>

          <div className="tour-includes">
            <h2>What's Included</h2>
            <ul>
              {tour.details.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="tour-price">
            <h2>Price Information</h2>
            <div className="price-details">
              <p><strong>Per Person:</strong> ${tour.details.price.perPerson}</p>
              <p><strong>Group Discount:</strong> {tour.details.price.groupDiscount}</p>
              <p><strong>Single Supplement:</strong> ${tour.details.price.singleSupplement}</p>
            </div>
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsPage;