import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="background-image" />
      <div className="content">
        <h1>Welcome To Paradise Nursery</h1>
        <div className="divider" />
        <p>Where Green Meets Serenity</p>
        <Link to="/plants">
          <button className="get-started-button">
            Get Started
          </button>
        </Link>

        <div className="aboutus_container">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}
