import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // Create this CSS file

// Import images
import annapurna from '../assets/annapurna-trek.jpg';
import chitwan from '../assets/chitwan-safari.jpg';
import gokyo from '../assets/gokyo-lakes-trek.jpg';
import kathmandu from '../assets/kathmandu.jpg';
import pokhara from '../assets/pokhara.jpg';
import bardia from '../assets/BardiyaNationalPark.jpg';
import bandipur from '../assets/bandipur.jpeg';
import bardiapark from '../assets/bardia-wildlife-safari.jpeg';


const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: annapurna, alt: 'Annapurna Mountain Range' },
    { src: chitwan, alt: 'Chitwan National Park' },
    { src: gokyo, alt: 'Gokyo Lakes' },
    { src: kathmandu, alt: 'Kathmandu Valley' },
    { src: pokhara, alt: 'Pokhara Lake' },
    { src: bardia, alt: 'BardiyaNationalPark'},
    { src: bandipur, alt: "bandipur "},
    { src: bardiapark,alt: "bardia-wildlife-safari" }, 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div 
        className="hero-background"
        style={{ 
          backgroundImage: `url(${images[currentImageIndex].src})`,
          opacity: 1
        }}
      />
      <div className="hero-content">
        <h1>Discover Nepal</h1>
        <p>Experience the magic of the Himalayas, ancient temples, and vibrant culture in the land of the world's highest peaks.</p>
        <Link to="/destinations" className="button">Explore Destinations</Link>
      </div>
    </section>
  );
};

export default Hero;