import HeroSection from '../components/Hero';
import WhyChooseUsSection from './WhyChooseUsSection';
import ServicesSection from './ServicesSection';
import DesignShowcase from './DesignShowcase';
import PricingSection from './PricingSection';
import ContactAboutSection from './ContactAboutSection';

const Homepage = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
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
      <WhyChooseUsSection />
    </div>
  );
};

export default Homepage;
