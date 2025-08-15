
import React, { useState } from 'react';
// import { Mail, Clock, Rocket, Zap, MessageCircle, Target } from 'lucide-react';
import './Contact.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setShowSuccessModal(false);
    
    try {
      // Send data to backend
      const response = await fetch('http://localhost:5050/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage(result.message);
        setShowSuccessModal(true);
        // Reset form on success
        setFormData({
          name: '', 
          email: '', 
          company: '', 
          projectType: '', 
          budget: '', 
          timeline: '', 
          description: ''
        });
        // Auto-hide modal after 4 seconds
        setTimeout(() => setShowSuccessModal(false), 4000);
      } else {
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    }
    
    setIsSubmitting(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setSubmitMessage('');
  };

  const handleScheduleCall = () => {
    const contactForm = document.querySelector('form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProjects = () => {
    // This would typically scroll to projects section
    console.log('View projects clicked');
  };

  const benefits = [
    {
      icon: null, 
      title: "Full-Stack Expertise",
      description: "Complete solution from frontend to deployment with specialized team members for each area."
    },
    {
      icon: null, 
      title: "Quick Turnaround",
      description: "30+ hours per week collective availability ensures fast project completion."
    },
    {
      icon: null, 
      title: "Clear Communication",
      description: "Regular updates, transparent process, and responsive team collaboration."
    },
    {
      icon: null, 
      title: "Proven Results",
      description: "Successfully delivered 6+ projects with measurable outcomes and client satisfaction."
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header fade-in-up">
          <h2 className="contact-title">
            Ready to Start Your Project?
          </h2>
          <p className="contact-subtitle">
            Let's discuss your project requirements and see how our team can help you achieve your goals.
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Left Column - Info */}
          <div className="contact-info">
            <h3 className="info-title">
              Why Work With Us?
            </h3>
            
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  {/* <div className="benefit-icon">
                    {benefit.icon}
                  </div> */}
                  <div className="benefit-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="contact-details">
              <h4 className="details-title">
                {/* <Mail className="w-5 h-5 text-blue-600" /> */}
                Get in Touch
              </h4>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">hello@rapidstack.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">
                  {/* <Clock className="w-4 h-4 inline mr-1" /> */}
                  Response Time:
                </span>
                <span className="contact-value">Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form">
            <div className="form-header"></div>
            
            <div className="form-content">
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your Company"
                  />
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="projectType" className="form-label">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ecommerce">E-commerce Platform</option>
                      <option value="dashboard">Dashboard/Analytics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="budget" className="form-label">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">5,000 - 10,000</option>
                      <option value="10k-25k">10,000 - 20,000</option>
                      <option value="25k-50k">20,000 - 30,000</option>
                      <option value="50k+">50,000+</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="timeline" className="form-label">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select timeline</option>
                    <option value="1-2-months">10-15 days</option>
                    <option value="2-4-months">15-30 days</option>
                    <option value="4-6-months">1-2 months</option>
                    <option value="6+months">1+ months</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="description" className="form-label">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                {/* Show error messages inline */}
                {submitMessage && !showSuccessModal && (
                  <div className="submit-message error">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className="cta-banner">
          <div className="cta-content">
            <h3 className="cta-title">
              Ready to Build Something Amazing?
            </h3>
            <p className="cta-description">
              Join our satisfied clients who've transformed their ideas into successful digital products.
            </p>
           <div className="cta-buttons">
  <a href="tel:7667761697" className="cta-button primary">
    Call Now
  </a>
 <a
  href="https://wa.me/7667761697?text=Hi%2C%20I%20am%20interested%20in%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="cta-button secondary"
>
  WhatsApp Me
</a>

</div>

          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal">
          <div className="modal-content">
            <h4>Message Sent!</h4>
            <p>Thank you for reaching out! I'll get back to you within 24 hours.</p>
            <button
              onClick={closeSuccessModal}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full hover:bg-green-600 hover:bg-emerald-600 transition-all duration-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}