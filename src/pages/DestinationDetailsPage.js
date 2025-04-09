import React from 'react';
import { useParams } from 'react-router-dom';
import { destinations } from '../data/destinations';
import SEO from '../components/SEO';
import { DestinationSchema } from '../components/StructuredData';
import './DestinationDetailsPage.css';

const DestinationDetailsPage = () => {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === id);

  if (!destination) {
    return <div className="container">Destination not found</div>;
  }

  return (
    <div className="destination-details-page">
      <SEO 
        title={destination.name}
        description={destination.description.substring(0, 160)}
        keywords={`${destination.name}, Nepal travel, Sharp Travel, ${destination.details.highlights.join(', ')}`}
      />
      <DestinationSchema destination={destination} />
      
      <div className="container">
        <div className="destination-header">
          <h1>{destination.name}</h1>
          <div className="destination-meta">
            <div className="meta-item">
              <i className="fas fa-calendar-alt"></i>
              <span>Best Time: {destination.details.bestTimeToVisit}</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-clock"></i>
              <span>Duration: {destination.details.duration}</span>
            </div>
          </div>
        </div>

        <div className="destination-image">
          <img src={destination.image} alt={destination.name} />
        </div>

        <div className="destination-content">
          <div className="destination-description">
            <h2>About {destination.name}</h2>
            <p>{destination.description}</p>
          </div>

          <div className="destination-highlights">
            <h2>Highlights</h2>
            <ul>
              {destination.details.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="destination-activities">
            <h2>Activities</h2>
            <ul>
              {destination.details.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>

          <div className="travel-tips">
            <h2>Travel Tips</h2>
            <ul>
              <li>Best time to visit: {destination.details.bestTimeToVisit}</li>
              <li>Recommended duration: {destination.details.duration}</li>
              <li>Altitude: {destination.details.altitude || 'Varies'}</li>
              <li>Difficulty level: {destination.details.difficulty || 'Moderate'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;