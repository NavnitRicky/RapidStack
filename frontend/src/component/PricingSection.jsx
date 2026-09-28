import React from 'react';
import './PricingSection.css';

const pricingPlans = [
  {
    title: 'Basic',
    price: '₹6,999 +',
    originalPrice: '₹9,999 +',
    features: [
      'Static Website (3 Pages)',
      'Responsive Design',
      'Mobile Friendly',
      'Database Setup',
      'Basic Support',
      'SEO Optimized',
    

      'Delivery: 7 Days',
    ],
    icon: '💼',
    badge: 'STARTER',
  },
  {
    title: 'Standard',
    price: '₹12,999 +',
    originalPrice: '₹15,999 +',
    features: [
      'Dynamic Website',
      'Backend Integration',
      'Authentication',
      'Database Setup',
      'Admin Panel',
      'Priority Support',
      'Delivery: 14 Days',
    ],
    icon: '🚀',
    highlighted: true,
    badge: 'POPULAR',
  },
  {
    title: 'Premium',
    price: '₹21,999 +',
    originalPrice: '₹25,999 +',
    features: [
      'Domain free',
      'Full-stack Web App',
      'Authentication ',
      'Advanced Features',
      'Cloud Deployment',
      'Payment',
      '24/7 Support',
      'Delivery: 20+ Days',
    ],
    icon: '🌟',
    badge: 'ADVANCED',
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      {/* Background decorations */}
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
      <div className="bg-decoration bg-decoration-3"></div>
      
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <div className="pricing-header-icon">
            <span>💰</span>
          </div>
          <h2 className="pricing-heading">Pricing Plans</h2>
          <p className="pricing-subheading">
            Transparent pricing tailored for different project needs. Choose the perfect plan to bring your vision to life.
          </p>
          <div className="pricing-offer-badge">
            <span className="offer-indicator"></span>
            30% OFF Launch Offer
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`pricing-card ${plan.highlighted ? 'pricing-card-highlighted' : ''}`}
            >
              {/* Badge */}
              <div className={`pricing-badge ${plan.highlighted ? 'pricing-badge-highlighted' : ''}`}>
                {plan.badge}
              </div>

              {/* Popular ribbon */}
              {plan.highlighted && (
                <div className="popular-ribbon">
                  <div className="popular-ribbon-text">
                    POPULAR
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`pricing-icon ${plan.highlighted ? 'pricing-icon-highlighted' : ''}`}>
                <span>{plan.icon}</span>
              </div>

              {/* Title */}
              <h3 className="pricing-title">{plan.title}</h3>

              {/* Price */}
              <div className="pricing-price-section">
                <div className="pricing-price-row">
                  <span className="pricing-price">{plan.price}</span>
                  <span className="pricing-original-price">{plan.originalPrice}</span>
                </div>
                <p className="pricing-payment-info">25% payment advanced</p>
              </div>

              {/* Features */}
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-feature-item">
                    <div className={`feature-check ${plan.highlighted ? 'feature-check-highlighted' : ''}`}>
                      <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`pricing-btn ${plan.highlighted ? 'pricing-btn-highlighted' : ''}`}>
                Get Started Now
                <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* Guarantee */}
              <div className="pricing-guarantee">
                <p>
                  <svg className="guarantee-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pricing-bottom-cta">
          <p>Need a custom solution? Let's discuss your project requirements.</p>
          <button className="custom-quote-btn">
            <svg className="quote-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact for Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;