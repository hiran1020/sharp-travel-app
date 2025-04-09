import React from 'react';
import './WhyChooseUs.css'; // Create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faUserFriends, faHandHoldingUsd, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>Why Choose Sharp Travel?</h2>
        <div className="reasons-grid">
          <div className="reason">
            <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" />
            <h3>Expertly Crafted Itineraries</h3>
            <p>Our tours are designed by experienced travel professionals.</p>
          </div>
          <div className="reason">
            <FontAwesomeIcon icon={faUserFriends} size="3x" />
            <h3>Local Expertise & Support</h3>
            <p>Benefit from our in-depth knowledge and on-the-ground support.</p>
          </div>
          <div className="reason">
            <FontAwesomeIcon icon={faHandHoldingUsd} size="3x" />
            <h3>Competitive Pricing</h3>
            <p>Get the best value for your travel investment.</p>
          </div>
          <div className="reason">
            <FontAwesomeIcon icon={faGlobeAsia} size="3x" />
            <h3>Sustainable Tourism</h3>
            <p>We are committed to responsible and eco-friendly travel practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;