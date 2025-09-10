import HeroSection from '../components/Hero';
import WhyChooseUsSection from './WhyChooseUsSection';
import ServicesSection from './ServicesSection';
import DesignShowcase from './DesignShowcase';
import PricingSection from './PricingSection';
import ContactAboutSection from './ContactAboutSection';
import Footer from '../components/Footer';
import DarkVeil from '../components/DarkViel';

const Homepage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* DarkVeil as fixed background covering entire viewport */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <DarkVeil 
          hueShift={0}
          noiseIntensity={0.02}
          scanlineIntensity={0}
          speed={0.3}
          scanlineFrequency={0}
          warpAmount={0.1}
          resolutionScale={1.0}
        />
      </div>
      
      {/* Website content with relative positioning */}
      <div className="relative z-10 w-full">
        <section id="home">
          <HeroSection />
        </section>
        
        <WhyChooseUsSection />
        
        <section id="services">
          <ServicesSection />
        </section>

        <section id="portfolio">
          <DesignShowcase />
        </section>
        
        <section id="pricing">
          <PricingSection />
        </section>
        
        <section id="about">
          <ContactAboutSection />
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
