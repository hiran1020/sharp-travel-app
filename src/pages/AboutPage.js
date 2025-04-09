import React from 'react';
import SEO from '../components/SEO';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <SEO 
        title="About Sharp Travel | Sharp Travel Experts"
        description="Learn about Sharp Travel, your trusted partner for Sharp Travel. Discover our story, mission, and commitment to providing exceptional travel experiences."
        keywords="About Sharp Travel, Sharp Travel company, Nepal travel experts, Nepal tour operator"
      />
      <div className="container">
        <h1>About Sharp Travel</h1>
        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Sharp Travel was founded with a vision to showcase the beauty and culture of Nepal to the world. 
              We believe in providing authentic travel experiences that not only delight our guests but also 
              contribute to the sustainable development of Nepal's tourism sector.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide exceptional travel experiences that combine adventure, culture, and 
              comfort. We strive to make every journey memorable while promoting responsible tourism practices 
              that benefit local communities and preserve Nepal's natural and cultural heritage.
            </p>
          </section>

          <section className="about-section">
            <h2>Why Choose Us</h2>
            <ul>
              <li>Expert local knowledge and guidance</li>
              <li>Customized travel packages</li>
              <li>Commitment to sustainable tourism</li>
              <li>Professional and experienced team</li>
              <li>24/7 customer support</li>
              <li>Best price guarantee</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              Our team consists of passionate travel professionals with years of experience in Nepal's tourism 
              industry. From expert guides to customer service representatives, we work together to ensure 
              your travel experience is nothing short of exceptional.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage; 