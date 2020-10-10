import React from "react";
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';

const HomePage = props => {

  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
      <h3>Status: {props.loggedInStatus}</h3>
    </div>
  );
};

export default HomePage;