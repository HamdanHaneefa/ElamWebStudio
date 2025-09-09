import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Zap, Building } from 'lucide-react';

const PricingSection = () => {
  const [isProjectBased, setIsProjectBased] = useState(true);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: <Star className="w-6 h-6" />,
      description: 'Perfect for small businesses and startups',
      price: isProjectBased ? '$999' : '$199',
      period: isProjectBased ? '/project' : '/month',
      popular: false,
      features: [
        'Responsive website design',
        'Up to 5 pages',
        'Basic SEO optimization',
        'Contact form integration',
        '1 month of support',
        'Mobile-friendly design'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'secondary'
    },
    {
      id: 'professional',
      name: 'Professional',
      icon: <Zap className="w-6 h-6" />,
      description: 'Ideal for growing businesses',
      price: isProjectBased ? '$1,999' : '$399',
      period: isProjectBased ? '/project' : '/month',
      popular: true,
      features: [
        'Custom website design',
        'Up to 15 pages',
        'Advanced SEO optimization',
        'CMS integration',
        'E-commerce functionality',
        '3 months of support',
        'Analytics integration',
        'Performance optimization'
      ],
      buttonText: 'Most Popular',
      buttonStyle: 'primary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: <Building className="w-6 h-6" />,
      description: 'For large organizations with complex needs',
      price: isProjectBased ? '$3,999' : '$799',
      period: isProjectBased ? '/project' : '/month',
      popular: false,
      features: [
        'Full-stack web application',
        'Unlimited pages',
        'Custom backend development',
        'Database integration',
        'API development',
        '6 months of support',
        'Advanced security features',
        'Load balancing & scaling',
        'Priority support'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'secondary'
    }
  ];

  const PricingCard = ({ plan }) => {
    return (
      <motion.div 
        className={`relative pricing-card ${plan.popular ? 'popular' : ''}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3 }
        }}
      >
        {plan.popular && (
          <div className="popular-badge">
            Most Popular
          </div>
        )}
        
        <div className="card-header">
          <div className="plan-icon">
            {plan.icon}
          </div>
          <h3 className="plan-name">{plan.name}</h3>
          <p className="plan-description">{plan.description}</p>
        </div>

        <div className="price-section">
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{plan.price.replace('$', '').replace(',', '')}</span>
            <span className="period">{plan.period}</span>
          </div>
        </div>

        <div className="features-section">
          <ul className="features-list">
            {plan.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <Check className="check-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-footer">
          <motion.button 
            className={`cta-button ${plan.buttonStyle}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {plan.buttonText}
            <ArrowRight className="arrow-icon" />
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="pricing-section">
      <style jsx>{`
        .pricing-section {
          min-height: 100vh;
          padding: 1rem 2rem;
          position: relative;
          overflow: hidden;
        }

        /* .pricing-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        } */

        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 300;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .pricing-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }

        .toggle-label {
          color: #e2e8f0;
          font-weight: 500;
        }

        .toggle-switch {
          position: relative;
          width: 60px;
          height: 30px;
          background: ${isProjectBased ? '#22c55e' : '#64748b'};
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle-slider {
          position: absolute;
          top: 3px;
          left: ${isProjectBased ? '3px' : '27px'};
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .save-badge {
          background: linear-gradient(45deg, #22c55e, #16a34a);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-left: 1rem;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        /* Mobile Horizontal Scroller - Show one card at a time */
        @media (max-width: 1024px) {
          .pricing-grid {
            display: flex;
            overflow-x: auto;
            gap: 1rem;
            padding: 0 1rem 2rem 1rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          .pricing-grid::-webkit-scrollbar {
            display: none;
          }

          .pricing-card {
            flex: 0 0 calc(100vw - 2rem);
            max-width: 350px;
            scroll-snap-align: center;
            margin: 0 auto;
          }
        }

        /* Tablet view - show two cards */
        @media (min-width: 768px) and (max-width: 1024px) {
          .pricing-card {
            flex: 0 0 calc(50vw - 1.5rem);
            max-width: 380px;
          }
        }

        .pricing-card {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 24px;
          padding: 2rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          border-color: rgba(34, 197, 94, 0.4);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 40px rgba(34, 197, 94, 0.1);
        }

        .pricing-card.popular {
          border-color: #22c55e;
          box-shadow: 
            0 12px 32px rgba(34, 197, 94, 0.2),
            0 0 40px rgba(34, 197, 94, 0.1);
        }

        .popular-badge {
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(45deg, #22c55e, #16a34a);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0 0 12px 12px;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.025em;
        }

        .card-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .plan-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 16px;
          color: #22c55e;
          margin-bottom: 1rem;
        }

        .plan-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }

        .plan-description {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .price-section {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }

        .price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
        }

        .currency {
          font-size: 1.25rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        .amount {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          line-height: 1;
        }

        .period {
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .features-section {
          margin-bottom: 2rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          space-y: 0.75rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #e2e8f0;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .check-icon {
          width: 16px;
          height: 16px;
          color: #22c55e;
          flex-shrink: 0;
        }

        .card-footer {
          margin-top: auto;
        }

        .cta-button {
          width: 100%;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.875rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .cta-button.primary {
          background: linear-gradient(45deg, #22c55e, #16a34a);
          color: white;
        }

        .cta-button.primary:hover {
          background: linear-gradient(45deg, #16a34a, #15803d);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
        }

        .cta-button.secondary {
          background: rgba(148, 163, 184, 0.1);
          color: #e2e8f0;
          border: 1px solid rgba(148, 163, 184, 0.3);
        }

        .cta-button.secondary:hover {
          background: rgba(148, 163, 184, 0.2);
          border-color: rgba(148, 163, 184, 0.5);
          transform: translateY(-2px);
        }

        .arrow-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        .guarantee-section {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(148, 163, 184, 0.1);
        }

        .guarantee-text {
          color: #94a3b8;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .guarantee-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #22c55e;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .pricing-toggle {
            flex-direction: column;
            gap: 1rem;
          }

          .guarantee-features {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>

      <div className="pricing-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the perfect plan for your project. All plans include our commitment to quality and ongoing support.
          </p>
          
          {/* Pricing Toggle */}
          <div className="pricing-toggle">
            <span className={`toggle-label ${isProjectBased ? 'active' : ''}`}>
              Project-based
            </span>
            <div 
              className="toggle-switch"
              onClick={() => setIsProjectBased(!isProjectBased)}
            >
              <div className="toggle-slider"></div>
            </div>
            <span className={`toggle-label ${!isProjectBased ? 'active' : ''}`}>
              Maintenance plans
            </span>
            {!isProjectBased && (
              <span className="save-badge">Save 10%</span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="guarantee-section">
          <p className="guarantee-text">
            All plans include our 30-day satisfaction guarantee
          </p>
          <div className="guarantee-features">
            <div className="guarantee-item">
              <Check className="w-4 h-4" />
              <span>Free consultation</span>
            </div>
            <div className="guarantee-item">
              <Check className="w-4 h-4" />
              <span>Custom solutions available</span>
            </div>
            <div className="guarantee-item">
              <Check className="w-4 h-4" />
              <span>Flexible payment terms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
