import HeroSection from '../components/Hero';
import WhyChooseUsSection from './WhyChooseUsSection';
import ServicesSection from './ServicesSection';
import DesignShowcase from './DesignShowcase';
import PricingSection from './PricingSection';
import ContactAboutSection from './ContactAboutSection';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <DesignShowcase />
      <PricingSection />
      <ContactAboutSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default Homepage;
