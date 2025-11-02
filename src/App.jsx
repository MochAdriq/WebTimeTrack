// src/App.jsx

import AnimatedSection from "./components/AnimatedSection";
// 1. Impor semua komponen yang sudah dipetakan
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import CTASection from "./components/CTASection/CTASection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
