import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Paradise Nursery</h1>
        
        <section className="company-overview">
          <h2>Our Story</h2>
          <p>
            Welcome to Paradise Nursery, where we bring nature's beauty directly to your home. 
            Founded in 2020, we have been dedicated to providing high-quality indoor plants that 
            not only beautify your space but also improve air quality and promote well-being.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make indoor gardening accessible to everyone. We believe that every 
            home deserves the freshness and vitality that plants bring. Whether you're a seasoned 
            plant parent or just starting your green journey, Paradise Nursery is here to support you.
          </p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>🌱 Quality</h3>
              <p>We source only the healthiest plants from trusted growers.</p>
            </div>
            <div className="value-item">
              <h3>🌿 Sustainability</h3>
              <p>We practice eco-friendly packaging and sustainable growing methods.</p>
            </div>
            <div className="value-item">
              <h3>💚 Customer Care</h3>
              <p>Your satisfaction is our priority. We provide expert guidance and support.</p>
            </div>
            <div className="value-item">
              <h3>🌎 Community</h3>
              <p>We foster a community of plant lovers and environmental advocates.</p>
            </div>
          </div>
        </section>

        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <ul>
            <li>Wide variety of indoor plants suitable for all experience levels</li>
            <li>Air-purifying plants to improve your home's air quality</li>
            <li>Low-maintenance options for busy lifestyles</li>
            <li>Beautiful flowering plants to brighten any space</li>
            <li>Expert care guides and tips</li>
            <li>Fast and secure delivery</li>
          </ul>
        </section>

        <section className="commitment">
          <h2>Our Commitment</h2>
          <p>
            At Paradise Nursery, we are committed to helping you create your own indoor paradise. 
            Every plant is carefully selected, nurtured, and packaged to ensure it arrives at your 
            doorstep in perfect condition. We stand behind our products and are always here to help 
            you succeed in your plant care journey.
          </p>
        </section>

        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Email: info@paradisenursery.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Green Street, Plant City, PC 12345</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
