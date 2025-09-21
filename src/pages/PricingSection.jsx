import React, { useState } from 'react';
import { Check, ArrowRight, Star, Zap, Building } from 'lucide-react';
import FadeContent from '../components/FadeContent'; // Use your fade/animated component

const PricingSection = () => {
  const [isProjectBased, setIsProjectBased] = useState(true);

  // Handler functions with proper event prevention
  const handleProjectBasedClick = (e) => {
    console.log('Project Based clicked');
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsProjectBased(true);
    return false;
  };

  const handleMaintenanceClick = (e) => {
    console.log('Maintenance clicked');
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsProjectBased(false);
    return false;
  };

  const handleToggleClick = (e) => {
    console.log('Toggle clicked');
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsProjectBased(!isProjectBased);
    return false;
  };

  // Format numbers using Indian numbering system (e.g., 19,999)
  const formatINR = (amount) => new Intl.NumberFormat('en-IN').format(Number(amount));

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      icon: <Star className="w-6 h-6" />,
      description: 'Essential starter website',
      price: '999', // INR
      suffix: '/-',
      popular: false,
      features: [
        'Responsive design',
        'Up to 5 pages',
        'Basic SEO',
        'Contact form',
        '1 month support',
        'Mobile-friendly'
      ],
      buttonText: 'Choose Basic',
      buttonStyle: 'secondary'
    },
    {
      id: 'business',
      name: 'Business',
      icon: <Zap className="w-6 h-6" />,
      description: 'For small and growing businesses',
      price: '1999', // INR
      suffix: '/-',
      startingFrom: true,
      popular: true,
      features: [
        'Custom design',
        'Up to 15 pages',
        'Advanced SEO',
        'CMS integration',
        'Analytics setup',
        '3 months support'
      ],
      buttonText: 'Choose Business',
      buttonStyle: 'primary'
    },
    {
      id: 'ecommerce',
      name: 'E‑commerce',
      icon: <Building className="w-6 h-6" />,
      description: 'Full-featured online store',
      price: '19999', // INR
      suffix: '/-',
      startingFrom: true,
      popular: false,
      features: [
        'Product catalogue',
        'Secure payments',
        'Order management',
        'Shipping & taxes',
        'Performance optimization',
        'Priority support'
      ],
      buttonText: 'Get E‑commerce',
      buttonStyle: 'secondary'
    }
  ];

  const PricingCard = ({ plan }) => (
    <FadeContent duration={600} initialOpacity={0} className={`relative pricing-card ${plan.popular ? 'popular' : ''}`}>
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
          {plan.startingFrom && <span className="starting-from">Starting from</span>}
          <span className="currency">₹</span>
          <span className="amount">{formatINR(plan.price)}</span>
          <span className="period">{plan.suffix || '/-'}</span>
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
        <button className={`cta-button ${plan.buttonStyle}`}>
          {plan.buttonText}
          <ArrowRight className="arrow-icon" />
        </button>
      </div>
    </FadeContent>
  );

  return (
    <section className="pricing-section">
      <style jsx>{`
        .pricing-section {
          min-height: 100vh;
          padding: 1rem 2rem;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 300;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .section-subtitle {
          font-size: 1rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto 1.5rem;
          line-height: 1.6;
        }
        .pricing-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 1.5rem 0;
        }
        .toggle-label {
          color: #e2e8f0;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
          transition: color 0.3s ease;
        }
        .toggle-label:hover {
          color: #22c55e;
        }
        .toggle-label.active {
          color: #22c55e;
        }
        .toggle-switch {
          position: relative;
          width: 48px;
          height: 24px;
          background: ${isProjectBased ? '#22c55e' : '#64748b'};
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .toggle-slider {
          position: absolute;
          top: 2px;
          left: ${isProjectBased ? '2px' : '22px'};
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
          align-items: stretch;
        }
        .pricing-card {
          background: rgba(12, 12, 12, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 1.5rem;
          position: relative;
          transition: box-shadow 0.2s, transform 0.2s;
          overflow: hidden;
          min-width: 0;
          box-shadow: 0 4px 16px rgba(34,197,94,0.05);
        }
        .pricing-card:hover {
          transform: translateY(-6px) scale(1.01);
          border-color: #22c55e;
          box-shadow: 0 12px 32px rgba(34,197,94,0.12);
        }
        .pricing-card.popular {
          border-color: #22c55e;
          box-shadow: 0 8px 24px rgba(34,197,94,0.18);
        }
        .popular-badge {
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(45deg, #22c55e, #16a34a);
          color: white;
          padding: 0.4rem 1.2rem;
          border-radius: 0 0 10px 10px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.025em;
        }
        .card-header {
          text-align: center;
          margin-bottom: 1.2rem;
        }
        .plan-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 12px;
          color: #22c55e;
          margin-bottom: 0.8rem;
        }
        .plan-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.3rem;
        }
        .plan-description {
          color: #94a3b8;
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .price-section {
          text-align: center;
          margin-bottom: 1.2rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }
        .price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.18rem;
        }
        .starting-from {
          font-size: 0.8rem;
          color: #94a3b8;
          margin-right: 0.35rem;
        }
        .currency {
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
        }
        .amount {
          font-size: 2.2rem;
          font-weight: 700;
          color: white;
          line-height: 1;
        }
        .period {
          font-size: 0.85rem;
          color: #94a3b8;
          font-weight: 500;
        }
        .features-section {
          margin-bottom: 1.2rem;
        }
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #e2e8f0;
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }
        .check-icon {
          width: 14px;
          height: 14px;
          color: #22c55e;
          flex-shrink: 0;
        }
        .card-footer {
          margin-top: auto;
        }
        .cta-button {
          width: 100%;
          padding: 0.8rem 1.2rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
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
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 25px rgba(34, 197, 94, 0.18);
        }
        .cta-button.secondary {
          background: rgba(148, 163, 184, 0.1);
          color: #e2e8f0;
          border: 1px solid rgba(148, 163, 184, 0.3);
        }
        .cta-button.secondary:hover {
          background: rgba(148, 163, 184, 0.2);
          border-color: rgba(148, 163, 184, 0.5);
          transform: translateY(-2px) scale(1.03);
        }
        .arrow-icon {
          width: 14px;
          height: 14px;
          transition: transform 0.2s;
        }
        .cta-button:hover .arrow-icon {
          transform: translateX(3px);
        }
        .guarantee-section {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1.2rem;
          border-top: 1px solid rgba(148, 163, 184, 0.1);
        }
        .guarantee-text {
          color: #94a3b8;
          font-size: 0.85rem;
          margin-bottom: 0.8rem;
        }
        .guarantee-features {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }
        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #22c55e;
          font-size: 0.85rem;
        }
        @media (max-width: 1024px) {
          .pricing-section {
            min-height: 100vh;
            padding: 0.5rem 0.5rem;
            align-items: flex-start;
          }
          .pricing-container {
            padding-top: 2rem;
          }
          .pricing-grid {
            display: flex;
            overflow-x: auto;
            gap: 1rem;
            padding: 0 0.5rem 1.5rem 0.5rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .pricing-grid::-webkit-scrollbar {
            display: none;
          }
          .pricing-card {
            flex: 0 0 90vw;
            max-width: 90vw;
            min-width: 260px;
            scroll-snap-align: center;
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .section-title {
            font-size: 1.5rem;
          }
          .pricing-grid {
            gap: 0.5rem;
          }
          .guarantee-features {
            flex-direction: column;
            gap: 0.6rem;
          }
        }
      `}</style>

      <div className="pricing-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Pricing
            <span className="text-orange-400 font-normal"> Plans</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect plan for your project. All plans include our commitment to quality and ongoing support.
          </p>
          {/* Pricing Toggle */}
          <div className="pricing-toggle">
            <button 
              type="button"
              className={`toggle-label ${isProjectBased ? 'active' : ''}`}
              onClick={handleProjectBasedClick}
              style={{ cursor: 'pointer', background: 'none', border: 'none' }}
            >
              Project-based
            </button>
            <button
              type="button"
              className="toggle-switch"
              onClick={handleToggleClick}
              style={{ background: 'none', border: 'none' }}
            >
              <div className="toggle-slider"></div>
            </button>
            <button 
              type="button"
              className={`toggle-label ${!isProjectBased ? 'active' : ''}`}
              onClick={handleMaintenanceClick}
              style={{ cursor: 'pointer', background: 'none', border: 'none' }}
            >
              Maintenance plans
            </button>
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
