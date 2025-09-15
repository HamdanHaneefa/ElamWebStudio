import HeroSection from '../components/Hero';
import WhyChooseUsSection from './WhyChooseUsSection';
import ServicesSection from './ServicesSection';
// import DesignShowcase from './DesignShowcase';
import PricingSection from './PricingSection';
import ContactAboutSection from './ContactAboutSection';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Content */}
      <div className="relative z-10 w-full">
        <section id="home">
          <HeroSection />
        </section>
        
        <WhyChooseUsSection />
        
        <section id="services">
          <ServicesSection />
        </section>

{/*         <section id="portfolio">
          <DesignShowcase />
        </section>
         */}
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
