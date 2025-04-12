import React from 'react';
import { useParams } from 'react-router-dom';
import { packages } from '../data/packages';
import SEO from '../components/SEO';
import { PackageSchema } from '../components/StructuredData';
import './PackagesDetailsPage.css';

const TourPackageDetailsPage = () => {
  const { id } = useParams();
  const tourPackage = packages.find(t => t.id === id);

  if (!tourPackage) {
    return <div className="container">Package not found</div>;
  }

  return (
    <div className="tourPackage-details-page">
      <SEO 
        title={tourPackage.name}
        description={tourPackage.description.substring(0, 160)}
        keywords={`${tourPackage.name}, Nepal tourPackages, Nepal travel, ${tourPackage.details.includes.join(', ')}`}
      />
      <PackageSchema tourPackage={tourPackage} />
      
      <div className="container">
        <div className="tourPackage-header">
          <h1>{tourPackage.name}</h1>
          <div className="tourPackage-meta">
            <div className="meta-item">
              <i className="fas fa-clock"></i>
              <span>Duration: {tourPackage.duration}</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-calendar-alt"></i>
              <span>Best Time: {tourPackage.details.bestTime}</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-hiking"></i>
              <span>Difficulty: {tourPackage.details.difficulty}</span>
            </div>
          </div>
        </div>

        <div className="tourPackage-image">
          <img src={tourPackage.image} alt={tourPackage.name} />
        </div>

        <div className="tourPackage-content">
         
          <div className="tourPackage-itinerary">
            <h2>Itinerary</h2>
            <ul>
              {tourPackage.details.itinerary.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ul>
          </div>
          

          <div className="tourPackage-includes">
            <h2>What's Included</h2>
            <ul>
              {tourPackage.details.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="tourPackage-description">
            <h2>About This tourPackage</h2>
            <p>{tourPackage.description}</p>
          </div>


          <div className="tourPackage-price">
            <h2>Price Information</h2>
            <div className="price-details">
              <p><strong>Per Person:</strong> ${tourPackage.details.price.perPerson}</p>
              <p><strong>Group Discount:</strong> {tourPackage.details.price.groupDiscount}</p>
              <p><strong>Single Supplement:</strong> ${tourPackage.details.price.singleSupplement}</p>
            </div>
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackageDetailsPage;