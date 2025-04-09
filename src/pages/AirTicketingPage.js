import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AirTicketingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faClock, faCheckCircle, faInfoCircle, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AirTicketingPage = () => {
  const [activeTab, setActiveTab] = useState('national');

  return (
    <div className="air-ticketing-page">
      <div className="container">
        <h1>Air Ticketing Services</h1>
        <p className="page-description">
          Book your flights with ease through our comprehensive air ticketing services. 
          We offer both national and international flight bookings with competitive prices and personalized service.
        </p>

        <div className="ticketing-tabs">
          <button 
            className={`tab-button ${activeTab === 'national' ? 'active' : ''}`}
            onClick={() => setActiveTab('national')}
          >
            <FontAwesomeIcon icon={faPlane} /> National Flights
          </button>
          <button 
            className={`tab-button ${activeTab === 'international' ? 'active' : ''}`}
            onClick={() => setActiveTab('international')}
          >
            <FontAwesomeIcon icon={faPlane} /> International Flights
          </button>
        </div>

        <div className="ticketing-content">
          {activeTab === 'national' && (
            <section className="ticketing-section national">
              <div className="section-header">
                <h2>National Flights</h2>
                <p>Explore Nepal's beautiful destinations with our domestic flight booking services.</p>
              </div>
              
              <div className="section-content">
                <div className="features-container">
                  <div className="features-list">
                    <h3>Our Services</h3>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> All major domestic airlines</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Competitive prices</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Instant confirmation</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> 24/7 customer support</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Flexible booking options</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Special group rates</li>
                    </ul>
                  </div>
                  
                  <div className="airlines">
                    <h3>Partner Airlines</h3>
                    <div className="airline-logos">
                      <div className="airline-logo">Buddha Air</div>
                      <div className="airline-logo">Yeti Airlines</div>
                      <div className="airline-logo">Tara Air</div>
                      <div className="airline-logo">Sita Air</div>
                      <div className="airline-logo">Nepal Airlines</div>
                    </div>
                  </div>
                </div>

                <div className="popular-routes">
                  <h3>Popular Routes</h3>
                  <div className="routes-grid">
                    <div className="route-card">
                      <div className="route-header">
                        <h4>Kathmandu → Pokhara</h4>
                        <span className="duration"><FontAwesomeIcon icon={faClock} /> 25 min</span>
                      </div>
                      <p>Daily flights available</p>
                      <div className="route-price">From NPR 5,000</div>
                      <Link to="/contact" className="button">Book Now</Link>
                    </div>
                    <div className="route-card">
                      <div className="route-header">
                        <h4>Kathmandu → Lukla</h4>
                        <span className="duration"><FontAwesomeIcon icon={faClock} /> 35 min</span>
                      </div>
                      <p>Multiple flights daily</p>
                      <div className="route-price">From NPR 12,000</div>
                      <Link to="/contact" className="button">Book Now</Link>
                    </div>
                    <div className="route-card">
                      <div className="route-header">
                        <h4>Kathmandu → Biratnagar</h4>
                        <span className="duration"><FontAwesomeIcon icon={faClock} /> 45 min</span>
                      </div>
                      <p>Regular flights</p>
                      <div className="route-price">From NPR 7,500</div>
                      <Link to="/contact" className="button">Book Now</Link>
                    </div>
                    <div className="route-card">
                      <div className="route-header">
                        <h4>Kathmandu → Nepalgunj</h4>
                        <span className="duration"><FontAwesomeIcon icon={faClock} /> 55 min</span>
                      </div>
                      <p>Daily flights</p>
                      <div className="route-price">From NPR 8,500</div>
                      <Link to="/contact" className="button">Book Now</Link>
                    </div>
                  </div>
                </div>

                <div className="additional-info">
                  <div className="info-card">
                    <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
                    <h4>Domestic Flight Tips</h4>
                    <p>Domestic flights in Nepal are subject to weather conditions, especially in remote areas. We recommend booking flexible tickets when possible.</p>
                  </div>
                  <div className="info-card">
                    <FontAwesomeIcon icon={faPhoneAlt} className="info-icon" />
                    <h4>Need Assistance?</h4>
                    <p>Call us at <strong>+977 01-4539877</strong> or email <strong>info@sharptravel.com</strong> for immediate assistance.</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'international' && (
            <section className="ticketing-section international">
              <div className="section-header">
                <h2>International Flights</h2>
                <p>Connect to destinations worldwide with our international flight booking services.</p>
              </div>
              
              <div className="section-content">
                <div className="features-container">
                  <div className="features-list">
                    <h3>Our Services</h3>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Major international airlines</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Best fare guarantee</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Multi-city bookings</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Group bookings available</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Special corporate rates</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} /> Visa assistance</li>
                    </ul>
                  </div>
                  
                  <div className="airlines">
                    <h3>Partner Airlines</h3>
                    <div className="airline-logos">
                      <div className="airline-logo">Emirates</div>
                      <div className="airline-logo">Qatar Airways</div>
                      <div className="airline-logo">Turkish Airlines</div>
                      <div className="airline-logo">Thai Airways</div>
                      <div className="airline-logo">Air India</div>
                      <div className="airline-logo">China Southern</div>
                    </div>
                  </div>
                </div>

                <div className="popular-routes">
                  <h3>Popular Destinations</h3>
                  <div className="routes-grid">
                    <div className="route-card">
                      <div className="route-header">
                        <h4>Kathmandu → Dubai</h4>
                        <span className="duration"><FontAwesomeIcon icon={faClock} /> 4h 30m</span>
                      </div>
                      <p>Direct flights available</p>
                      <div className="route-price">From NPR 45,000</div>
                      <Link to="/contact" className="button">Book Now</Link>
                    </div>
                    <div className="route-card">
                      <div className="route-header">
                        <h4>Kathmandu → Bangkok</h4>
                        <span className="duration"><FontAwesomeIcon icon={faClock} /> 3h 45m</span>
                      </div>
                      <p>Daily flights</p>
                      <div className="route-price">From NPR 35,000</div>
                      <Link to="/contact" className="button">Book Now</Link>
                    </div>
                    <div className="route-card">
                      <div className="route-header">
                        <h4>Kathmandu → Delhi</h4>
                        <span className="duration"><FontAwesomeIcon icon={faClock} /> 1h 15m</span>
                      </div>
                      <p>Multiple flights daily</p>
                      <div className="route-price">From NPR 25,000</div>
                      <Link to="/contact" className="button">Book Now</Link>
                    </div>
                    <div className="route-card">
                      <div className="route-header">
                        <h4>Kathmandu → Doha</h4>
                        <span className="duration"><FontAwesomeIcon icon={faClock} /> 4h 15m</span>
                      </div>
                      <p>Regular flights</p>
                      <div className="route-price">From NPR 42,000</div>
                      <Link to="/contact" className="button">Book Now</Link>
                    </div>
                  </div>
                </div>

                <div className="additional-info">
                  <div className="info-card">
                    <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
                    <h4>International Travel Tips</h4>
                    <p>We recommend booking international flights at least 2-3 months in advance for the best rates. Check visa requirements for your destination.</p>
                  </div>
                  <div className="info-card">
                    <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                    <h4>Need Assistance?</h4>
                    <p>Email us at <strong>international@sharptravel.com</strong> for personalized international flight assistance and quotes.</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        <div className="booking-info">
          <h2>How to Book</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Contact Us</h3>
              <p>Reach out through our contact form or call us directly</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Provide Details</h3>
              <p>Share your travel dates and preferences</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Quote</h3>
              <p>Receive the best available options and prices</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Confirm Booking</h3>
              <p>Confirm your booking and receive confirmation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirTicketingPage; 