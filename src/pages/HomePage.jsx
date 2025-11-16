// src/pages/HomePage.jsx

import React from "react";
import Hero from "../components/hero/Hero";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import CTASection from "../components/CTASection/CTASection";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <CTASection />
    </>
  );
}

export default HomePage;
