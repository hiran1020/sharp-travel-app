import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Destinations</h3>
            <ul>
              <li><Link to="/destinations/kathmandu">Kathmandu</Link></li>
              <li><Link to="/destinations/pokhara">Pokhara</Link></li>
              <li><Link to="/destinations/lumbini">Lumbini</Link></li>
              <li><Link to="/destinations/chitwan">Chitwan</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Tours</h3>
            <ul>
              <li><Link to="/tours?category=trekking">Trekking</Link></li>
              <li><Link to="/tours?category=cultural">Cultural Tours</Link></li>
              <li><Link to="/tours?category=wildlife">Wildlife Safaris</Link></li>
              <li><Link to="/tours?category=adventure">Adventure Sports</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@sharptravel.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +977-01-4539877<br></br>
+977-01-4539899</p>
<p><FontAwesomeIcon icon={faMapMarkerAlt} /> Shanti Marg, Hattisar<br />Kathmandu, Nepal</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/sharpnepal/"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Sharp Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;