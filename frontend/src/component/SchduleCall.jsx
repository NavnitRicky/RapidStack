import React, { useState, useEffect } from 'react';
import { Mail, Clock, Rocket, Zap, MessageCircle, Target, Phone, Send, CheckCircle, Star, Award, Users } from 'lucide-react';
import './Schdule.css';

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
  const [isVisible, setIsVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.projectType) errors.projectType = 'Project type is required';
    if (!formData.description.trim()) errors.description = 'Project description is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitMessage('');
    setShowSuccessModal(false);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:5050/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          name: '', email: '', company: '', projectType: '', 
          budget: '', timeline: '', description: ''
        });
        setTimeout(() => setShowSuccessModal(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('Failed to send message. Please try again or contact us directly.');
    }
    
    setIsSubmitting(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setSubmitMessage('');
  };

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Full-Stack Expertise",
      description: "End-to-end development with specialized team members covering frontend, backend, and DevOps.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Delivery",
      description: "30+ hours per week availability with agile methodology ensures rapid project completion.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "24/7 Communication",
      description: "Real-time updates, transparent workflow, and dedicated project management.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Successfully delivered 50+ projects with 98% client satisfaction rate.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { icon: <Star className="w-5 h-5" />, label: "Client Satisfaction", value: "98%" },
    { icon: <Award className="w-5 h-5" />, label: "Projects Completed", value: "50+" },
    { icon: <Users className="w-5 h-5" />, label: "Happy Clients", value: "30+" }
  ];

  return (
    <div className="modern-contact-wrapper">
      {/* Animated Background */}
      <div className="background-animation">
        <div className="floating-shapes">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`shape shape-${i % 5 + 1}`}></div>
          ))}
        </div>
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      <section className="modern-contact-section">
        <div className="container">
          {/* Header Section */}
          <div className={`header-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="header-badge">
              <Zap className="w-4 h-4" />
              <span>Transform Your Vision Into Reality</span>
            </div>
            <h1 className="main-title">
              Let's Build Something
              <span className="gradient-text">Extraordinary</span>
            </h1>
            <p className="subtitle">
              Partner with our expert development team to create digital solutions that 
              drive growth, engage users, and exceed expectations.
            </p>
            
            {/* Stats */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content">
            {/* Benefits Section */}
            <div className={`benefits-section ${isVisible ? 'animate-in-left' : ''}`}>
              <h3 className="section-title">
                Why Partner With Us?
                <div className="title-underline"></div>
              </h3>
              
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className={`benefit-icon bg-gradient-to-r ${benefit.gradient}`}>
                      {benefit.icon}
                    </div>
                    <div className="benefit-content">
                      <h4 className="benefit-title">{benefit.title}</h4>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Contact Info Card */}
              <div className="contact-info-card">
                <div className="contact-info-bg"></div>
                <div className="contact-info-content">
                  <h4 className="contact-info-title">
                    <Mail className="w-6 h-6" />
                    Get in Touch
                  </h4>
                  <div className="contact-details">
                    <div className="contact-detail">
                      <span className="detail-label">Email:</span>
                      <span className="detail-value">hello@rapidstack.com</span>
                    </div>
                    <div className="contact-detail">
                      <span className="detail-label">
                        <Clock className="w-4 h-4" />
                        Response Time:
                      </span>
                      <span className="detail-value">Within 6 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className={`form-section ${isVisible ? 'animate-in-right' : ''}`}>
              <div className="form-container">
                <div className="form-header">
                  <div className="form-header-line"></div>
                </div>
                
                <div className="form-content">
                  <div className="form-intro">
                    <h3 className="form-title">Start Your Project</h3>
                    <p className="form-subtitle">Tell us about your vision and let's make it happen</p>
                  </div>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`form-input ${formErrors.name ? 'error' : ''}`}
                          placeholder="John Doe"
                        />
                        {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-input ${formErrors.email ? 'error' : ''}`}
                          placeholder="john@company.com"
                        />
                        {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your Company Name"
                      />
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Project Type *</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={`form-select ${formErrors.projectType ? 'error' : ''}`}
                        >
                          <option value="">Select project type</option>
                          <option value="web-app">Web Application</option>
                          <option value="mobile-app">Mobile App</option>
                          <option value="ecommerce">E-commerce Platform</option>
                          <option value="dashboard">Dashboard/Analytics</option>
                          <option value="saas">SaaS Platform</option>
                          <option value="other">Other</option>
                        </select>
                        {formErrors.projectType && <span className="error-text">{formErrors.projectType}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-15k">$5,000 - $15,000</option>
                          <option value="15k-30k">$15,000 - $30,000</option>
                          <option value="30k-50k">$30,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select timeline</option>
                        <option value="rush">Rush (1-2 weeks)</option>
                        <option value="standard">Standard (1-2 months)</option>
                        <option value="extended">Extended (2-4 months)</option>
                        <option value="ongoing">Ongoing project</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Project Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        className={`form-textarea ${formErrors.description ? 'error' : ''}`}
                        placeholder="Tell us about your project requirements, goals, target audience, and any specific features you need..."
                      />
                      {formErrors.description && <span className="error-text">{formErrors.description}</span>}
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="submit-button"
                    >
                      <div className="button-content">
                        {isSubmitting ? (
                          <>
                            <div className="loading-spinner"></div>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </div>
                    </button>
                    
                    {submitMessage && !showSuccessModal && (
                      <div className="error-message">
                        {submitMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className={`cta-banner ${isVisible ? 'animate-in-up' : ''}`}>
            <div className="cta-background"></div>
            <div className="cta-content">
              <h3 className="cta-title">Ready to Build Something Amazing?</h3>
              <p className="cta-description">
                Join 30+ satisfied clients who've transformed their ideas into successful digital products.
              </p>
              <div className="cta-buttons">
                <a href="tel:7667761697" className="cta-button primary">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a 
                  href="https://wa.me/7667761697?text=Hi%2C%20I%20am%20interested%20in%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-button secondary"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="success-modal">
            <div className="modal-icon">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h4 className="modal-title">Message Sent Successfully!</h4>
            <p className="modal-description">
              Thank you for reaching out! Our team will get back to you within 6 hours with a detailed project proposal.
            </p>
            <button onClick={closeSuccessModal} className="modal-button">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}