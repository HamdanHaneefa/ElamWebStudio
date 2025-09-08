import HeroSection from '../components/Hero';
import WhyChooseUsSection from './WhyChooseUsSection';
import ServicesSection from './ServicesSection';
import DesignShowcase from './DesignShowcase';
import PricingSection from './PricingSection';
import ContactAboutSection from './ContactAboutSection';
import SectionSeparator from '../components/SectionSeparator';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      
      <SectionSeparator />
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <SectionSeparator variant="gradient" />
      
      <section id="portfolio">
        <DesignShowcase />
      </section>
      
      <SectionSeparator />
      
      <WhyChooseUsSection />
      
      <SectionSeparator variant="gradient" />
      
      <section id="pricing">
        <PricingSection />
      </section>
      
      <SectionSeparator />
      
      <section id="about">
        <ContactAboutSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Homepage;
