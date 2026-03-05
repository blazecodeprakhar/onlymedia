import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import PartnersMarquee from './components/PartnersMarquee';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import CircularCTA from './components/CircularCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-light text-dark selection:bg-primary selection:text-white">
      <TopBar />
      <Navbar isScrolled={isScrolled} />

      <main>
        <Hero />
        <WhoWeAre />
        <PartnersMarquee />
        <WhatWeDo />
        <WhyChooseUs />
        <FAQ />
      </main>

      <Footer />
      <CircularCTA />
    </div>
  );
}

export default App;

