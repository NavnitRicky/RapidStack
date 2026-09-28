import './QuoteRequest.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function QuoteRequest() {
  const [activeTab, setActiveTab] = useState('message');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    service: '',
    budget: '',
    deadline: '',
    projectDetails: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const form = useRef();

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce Development',
    'API Development',
    'Database Design',
    'DevOps & Deployment',
    'Maintenance & Support',
    'Consultation'
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    'Above $10,000'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Full name is required';
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!validateEmail(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email address';
    }

    if (!formData.user_phone.trim()) {
      newErrors.user_phone = 'Phone number is required';
    } else if (!validatePhone(formData.user_phone)) {
      newErrors.user_phone = 'Please enter a valid phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    if (!formData.deadline.trim()) {
      newErrors.deadline = 'Deadline is required';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    } else if (formData.projectDetails.trim().length < 20) {
      newErrors.projectDetails = 'Please provide more details (minimum 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Simple email validation before sending
    const email = form.current.user_email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_5c44uuf",   // 🔥 replace with real Service ID
        "template_4pkjiqo",  // 🔥 replace with real Template ID  
        form.current,
        "jk-DaxCyQNoKyIUIt"    // 🔥 replace with your Public Key
      )
      .then(
        () => {
          setIsLoading(false);
          setShowSuccess(true);
          
          // Reset form data
          setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            service: '',
            budget: '',
            deadline: '',
            projectDetails: ''
          });
          setErrors({});
          
          // Hide success message after 4 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 4000);
        },
        (error) => {
          setIsLoading(false);
          alert("❌ Failed to send. " + error.text);
        }
      );
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = 'mailto:codelancetechnologies@gmail.com';
  };

  const handleScheduleCall = () => {
    // You can integrate with Calendly or similar scheduling service
    window.open('https://calendly.com/your-link', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919243993868', '_blank');
  };

  return (
    <div className="contact-section" id="contact">
      {/* Background Elements */}
      <div className="contact-background">
        <div className="contact-bg-element contact-bg-element-1"></div>
        <div className="contact-bg-element contact-bg-element-2"></div>
        <div className="contact-bg-element contact-bg-element-3"></div>
      </div>

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-badge">
            GET IN TOUCH
          </div>
          
          <h1 className="contact-title">
            Let's Start Your Project
          </h1>
          
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Get in touch with me today for a free consultation and 
            let's create something amazing together.
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-header">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-description">
                Reach out through any of these channels
              </p>
            </div>

            <div className="contact-methods">
              {/* Phone Contact */}
              <div className="contact-method">
                <div className="contact-method-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h3>Call Me</h3>
                  <div className="contact-method-info">
                    <a href="tel:+917667761697" onClick={() => handleCall('+917667761697')}>
                      +91 7667761697
                    </a>
                    <br />
                    <a href="tel:+917564917119" onClick={() => handleCall('+917564917119')}>
                      +91 7564917119
                    </a>
                    <div className="contact-method-note">
                      Available 24/7 for urgent projects
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className="contact-method">
                <div className="contact-method-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h3>Email Me</h3>
                  <div className="contact-method-info">
                    <a href="mailto:RapidStack@gmail.com" onClick={handleEmail}>
                      RapidStack@gmail.com
                    </a>
                    <div className="contact-method-note">
                      Get a detailed quote within 24 hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="contact-method">
                <div className="contact-method-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h3>Location</h3>
                  <div className="contact-method-info">
                    Vijayawada, Andhra Pradesh
                    <br />
                    India
                    <div className="contact-method-note">
                      Available for remote work worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            {/* Form Tabs */}
            <div className="form-tabs">
              <button
                className={`form-tab ${activeTab === 'message' ? 'active' : ''}`}
                onClick={() => setActiveTab('message')}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </button>
              <button
                className={`form-tab ${activeTab === 'call' ? 'active' : ''}`}
                onClick={() => setActiveTab('call')}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule a Call
              </button>
            </div>

            {activeTab === 'message' && (
              <>
                {showSuccess && (
                  <div className="success-message fade-in-up">
                    <svg className="success-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ✅ Message sent successfully! I'll get back to you within 24 hours.
                  </div>
                )}

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="form-grid">
                    {/* Full Name */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="user_name">
                        Full Name <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <input
                          type="text"
                          id="user_name"
                          name="user_name"
                          className={`form-input ${errors.user_name ? 'error' : ''}`}
                          value={formData.user_name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      {errors.user_name && <span className="error-message">{errors.user_name}</span>}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="user_email">
                        Email Address <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input
                          type="email"
                          id="user_email"
                          name="user_email"
                          className={`form-input ${errors.user_email ? 'error' : ''}`}
                          value={formData.user_email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      {errors.user_email && <span className="error-message">{errors.user_email}</span>}
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="user_phone">
                        Phone Number <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <input
                          type="tel"
                          id="user_phone"
                          name="user_phone"
                          className={`form-input ${errors.user_phone ? 'error' : ''}`}
                          value={formData.user_phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                      {errors.user_phone && <span className="error-message">{errors.user_phone}</span>}
                    </div>

                    {/* Service */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="service">
                        Service Required <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                        </svg>
                        <select
                          id="service"
                          name="service"
                          className={`form-input ${errors.service ? 'error' : ''}`}
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      {errors.service && <span className="error-message">{errors.service}</span>}
                    </div>

                    {/* Budget */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="budget">
                        Budget Range <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <select
                          id="budget"
                          name="budget"
                          className={`form-input ${errors.budget ? 'error' : ''}`}
                          value={formData.budget}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      {errors.budget && <span className="error-message">{errors.budget}</span>}
                    </div>

                    {/* Deadline */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="deadline">
                        Project Deadline <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <input
                          type="date"
                          id="deadline"
                          name="deadline"
                          className={`form-input ${errors.deadline ? 'error' : ''}`}
                          value={formData.deadline}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      {errors.deadline && <span className="error-message">{errors.deadline}</span>}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="projectDetails">
                      Project Details <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <svg className="form-icon textarea-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        className={`form-input textarea-input ${errors.projectDetails ? 'error' : ''}`}
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder="Please describe your project requirements, goals, and any specific features you need..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <div className="character-count">
                      {formData.projectDetails.length}/500
                    </div>
                    {errors.projectDetails && <span className="error-message">{errors.projectDetails}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}

            {activeTab === 'call' && (
              <div className="schedule-call-content">
                <div className="schedule-call-header">
                  <div className="schedule-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3>Schedule a Free Consultation</h3>
                  <p>Let's discuss your project requirements and how I can help bring your vision to life.</p>
                </div>

                <div className="call-options-grid">
                  {/* Instant Call */}
                  <div className="call-option-card">
                    <div className="call-option-icon">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                     </div>
                    <h4>Instant Call</h4>
                    <p>Call me directly for immediate assistance</p>
                    <div className="call-buttons">
                      <button 
                        className="call-button primary"
                        onClick={() => handleCall('+919243993868')}
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call +91 9243993868
                      </button>
                      <button 
                        className="call-button secondary"
                        onClick={() => handleCall('+919801974041')}
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call +91 9801974041
                      </button>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="call-option-card">
                    <div className="call-option-icon whatsapp">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
                      </svg>
                    </div>
                    <h4>WhatsApp Chat</h4>
                    <p>Send me a message on WhatsApp for quick response</p>
                    <button 
                      className="call-button whatsapp-btn"
                      onClick={handleWhatsApp}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
                      </svg>
                      Chat on WhatsApp
                    </button>
                  </div>

                  {/* Scheduled Meeting */}
                  <div className="call-option-card">
                    <div className="call-option-icon">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4>Schedule Meeting</h4>
                    <p>Book a time that works for both of us</p>
                    <button 
                      className="call-button primary"
                      onClick={handleScheduleCall}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule Call
                    </button>
                  </div>

                  {/* Video Call */}
                  <div className="call-option-card">
                    <div className="call-option-icon video">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4>Video Conference</h4>
                    <p>Face-to-face meeting via video call</p>
                    <button 
                      className="call-button video-btn"
                      onClick={() => window.open('https://meet.google.com/new', '_blank')}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Start Video Call
                    </button>
                  </div>
                </div>

                <div className="availability-section">
                  <div className="availability-header">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4>My Availability</h4>
                  </div>
                  
                  <div className="availability-grid">
                    <div className="availability-item">
                      <div className="availability-day">Monday - Friday</div>
                      <div className="availability-time">9:00 AM - 8:00 PM IST</div>
                    </div>
                    <div className="availability-item">
                      <div className="availability-day">Saturday</div>
                      <div className="availability-time">10:00 AM - 6:00 PM IST</div>
                    </div>
                    <div className="availability-item">
                      <div className="availability-day">Sunday</div>
                      <div className="availability-time">Emergency Only</div>
                    </div>
                    <div className="availability-item">
                      <div className="availability-day">Response Time</div>
                      <div className="availability-time">Within 2 hours</div>
                    </div>
                  </div>

                  <div className="timezone-info">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>All times are in Indian Standard Time (IST)</span>
                  </div>
                </div>

                <div className="contact-methods-quick">
                  <div className="quick-contact-header">
                    <h4>Quick Contact Methods</h4>
                    <p>Choose the method that works best for you</p>
                  </div>
                  
                  <div className="quick-contact-buttons">
                    <button 
                      className="quick-contact-btn phone"
                      onClick={() => handleCall('+917667761697')}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </button>
                    
                    <button 
                      className="quick-contact-btn email"
                      onClick={handleEmail}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Email
                    </button>
                    
                    <button 
                      className="quick-contact-btn whatsapp"
                      onClick={handleWhatsApp}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}