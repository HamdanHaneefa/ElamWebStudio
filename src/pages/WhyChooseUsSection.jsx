import React from 'react';
import { motion } from 'framer-motion';
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
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        /* Mobile Horizontal Scroller */
        @media (max-width: 1024px) {
          .benefits-grid {
            display: flex;
            overflow-x: auto;
            gap: 1.5rem;
            padding: 0 1rem 2rem 1rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
            grid-template-columns: none;
          }
          
          .benefits-grid::-webkit-scrollbar {
            display: none;
          }

          .benefit-card {
            flex: 0 0 300px;
            scroll-snap-align: center;
          }
        }

        .benefit-card {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.15),
            0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(251, 146, 60, 0.05) 0%, rgba(251, 146, 60, 0.02) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .benefit-card:hover::before {
          opacity: 1;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          border-color: rgba(251, 146, 60, 0.3);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.25),
            0 16px 64px rgba(0, 0, 0, 0.15),
            0 0 40px rgba(251, 146, 60, 0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(251, 146, 60, 0.1);
          border: 1px solid rgba(251, 146, 60, 0.3);
          border-radius: 16px;
          color: #fb923c;
        }

        .card-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #fb923c;
          background: rgba(251, 146, 60, 0.1);
          border: 1px solid rgba(251, 146, 60, 0.3);
          padding: 6px 12px;
          border-radius: 50px;
          letter-spacing: 0.05em;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .card-description {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .why-choose-us-section {
            padding: 4rem 1rem;
          }

          .section-badge {
            font-size: 0.75rem;
            padding: 6px 16px;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .section-subtitle {
            font-size: 1.25rem;
          }

          .section-description {
            font-size: 1rem;
            margin-bottom: 3rem;
          }

          .benefit-card {
            padding: 1.5rem;
          }

          .icon-container {
            width: 50px;
            height: 50px;
          }

          .card-title {
            font-size: 1.25rem;
          }

          .card-description {
            font-size: 0.875rem;
          }
        }
      `}</style>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Why Choose Us</div>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Experience The
            <span className="text-orange-400 font-normal"> Benefits</span>
          </h2>
          <p className="section-description">
            Delivering powerful results that drive meaningful engagement and sustainable growth for your business with ElamWebStudio, a sub-brand of elamai.in
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="benefit-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-header">
                <div className="icon-container">
                  {benefit.icon}
                </div>
                <div className="card-label">
                  {benefit.label}
                </div>
              </div>
              <h3 className="card-title">{benefit.title}</h3>
              <p className="card-description">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;