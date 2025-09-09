import HeroSection from '../components/Hero';
import WhyChooseUsSection from './WhyChooseUsSection';
import ServicesSection from './ServicesSection';
import DesignShowcase from './DesignShowcase';
import PricingSection from './PricingSection';
import ContactAboutSection from './ContactAboutSection';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <section id="home">
        <HeroSection />
      </section>
      
      <WhyChooseUsSection />
      
      <section id="portfolio">
        <DesignShowcase />
      </section>
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="pricing">
        <PricingSection />
      </section>
      
      <section id="about">
        <ContactAboutSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Homepage;
