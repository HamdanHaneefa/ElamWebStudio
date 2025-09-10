import React from 'react';
import FadeContent from '../components/FadeContent';
import { Star, CheckCircle, Users } from 'lucide-react';

const benefitsData = [
  {
    id: 1,
    title: 'Best-In-Class Work',
    description: 'Unmatched quality, seamless design, and high-performance solutions. We deliver best-in-class work that drives results.',
    label: 'QUALITY',
    icon: <Star className="w-8 h-8" />
  },
  {
    id: 2, 
    title: 'Freelance Rates',
    description: 'We provide agency level work and support at freelance rates. Our pricing reflects the quality we bring to every project.',
    label: 'PRICING',
    icon: <CheckCircle className="w-8 h-8" />
  },
  {
    id: 3,
    title: 'Expert Team', 
    description: 'Powered by a team of skilled designers, developers, and strategists who bring creativity and precision to every project.',
    label: 'TEAM',
    icon: <Users className="w-8 h-8" />
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="about" className="why-choose-us-section">
      <style jsx>{`
        .why-choose-us-section {
          padding: 1rem 2rem;
          position: relative;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .section-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(251, 146, 60, 0.1);
          border: 1px solid rgba(251, 146, 60, 0.3);
          border-radius: 50px;
          color: #fb923c;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-subtitle {
          color: #fb923c;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600;
          margin-bottom: 3rem;
        }

        .section-description {
          font-size: 1.125rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto 4rem auto;
          line-height: 1.6;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.5rem; /* tighter gap on mobile */
          margin-top: 1.5rem;
          align-items: stretch; /* make items equal height when possible */
        }

        .benefit-item {
          display: grid;
          grid-template-rows: auto auto auto;
          justify-items: center;
          text-align: center;
          padding: 0.5rem; /* smaller padding on mobile */
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.35);
          gap: 0.4rem;
          height: 96px; /* fixed equal height on mobile for perfect alignment */
          box-sizing: border-box;
        }

        .benefit-icon {
          display: grid;
          place-items: center;
          width: 32px; /* smaller icon tile */
          height: 32px;
          border-radius: 8px;
          color: #fb923c;
          background: rgba(251,146,60,0.1);
          border: 1px solid rgba(251,146,60,0.25);
        }
        .benefit-icon svg {
          width: 18px; /* smaller svg to fit tile */
          height: 18px;
        }

        .benefit-title {
          font-size: 0.82rem; /* smaller title */
          font-weight: 600;
          color: white;
          line-height: 1.15;
          overflow: hidden; /* clamp to 2 lines to prevent tall cards */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .benefit-label {
          font-size: 0.6rem; /* smaller label */
          letter-spacing: 0.08em;
          color: #fb923c;
          background: rgba(251,146,60,0.08);
          border: 1px solid rgba(251,146,60,0.25);
          border-radius: 999px;
          padding: 2px 6px; /* tighter badge */
        }

        .benefit-desc {
          display: none;
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        @media (min-width: 768px) {
          .why-choose-us-section {
            padding: 4rem 2rem;
          }

          .benefits-grid {
            gap: 0.75rem;
          }

          .benefit-item {
            padding: 0.75rem;
            height: auto; /* default; overridden on larger desktops for equal heights */
            min-height: 100px;
          }

          .benefit-icon {
            width: 40px;
            height: 40px;
          }
          .benefit-icon svg {
            width: 22px;
            height: 22px;
          }

          .benefit-title {
            font-size: 0.95rem;
          }

          .benefit-desc {
            display: block;
            margin-top: 0.25rem;
          }
        }

        /* Desktop refinements: equal-height cards and consistent alignment */
        @media (min-width: 1024px) {
          .benefits-grid {
            gap: 1rem;
          }
          /* Stretch the immediate children (FadeContent wrappers) to row height */
          .benefits-grid > * {
            height: 100%;
            display: flex;
          }
          /* Make the card fill its wrapper to align bottoms perfectly */
          .benefit-item {
            height: 100%;
          }
        }
      `}</style>

      <div className="section-container">
        <FadeContent duration={600} blur threshold={0.2}>
          <div className="section-badge">Why Choose Us</div>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Experience The
            <span className="text-orange-400 font-normal"> Benefits</span>
          </h2>
          <p className="section-description">
            Delivering powerful results that drive meaningful engagement and sustainable growth for your business with ElamWebStudio, a sub-brand of elamai.in
          </p>
        </FadeContent>

        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <FadeContent key={benefit.id} duration={500} delay={index * 120} threshold={0.2}>
              <div className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-title">{benefit.title}</div>
                <div className="benefit-label">{benefit.label}</div>
                <p className="benefit-desc">{benefit.description}</p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;