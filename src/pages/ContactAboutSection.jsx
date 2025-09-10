import React, { useState } from 'react';
import { trackFormSubmission, trackContactInteraction } from '../utils/analytics';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zkmqstzalcaxeliqfqca.supabase.co '
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprbXFzdHphbGNheGVsaXFmcWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTEzMjksImV4cCI6MjA3MzA4NzMyOX0.HJxA57AnL4CeVTN0pOMCB891LyxyFKatwI4TTzQs_4o'
const supabase = createClient(supabaseUrl, supabaseKey)

const ContactAboutSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set submitting state
    setSubmitStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // Submit to Supabase
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
         {
        name: formData.firstName + " " + formData.lastName, // merge first + last
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        consent: true, // or formData.consent if you have checkbox
        created_at: new Date().toISOString()
      }
        ])
        .select();

      if (error) {
        throw error;
      }

      // Track successful submission
      trackFormSubmission('Contact Form');
      trackContactInteraction('Form Submission');
      
      // Reset form and show success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      });
      
      setSubmitStatus({ 
        isSubmitting: false, 
        isSubmitted: true, 
        error: null 
      });
      
      console.log('Form submitted successfully:', data);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: error.message || 'Failed to submit form. Please try again.' 
      });
    }
  };

  return (
    <section className="contact-about-section">
      <style jsx>{`
        .contact-about-section {
          min-height: 100vh;
          padding: 1rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 70vh;
        }

        .about-section {
          color: white;
        }

        .about-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .about-icon {
          width: 24px;
          height: 24px;
          color: #f97316;
        }

        .about-title {
          font-size: 2rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .about-subtitle {
          font-size: 1rem;
          color: #94a3b8;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .about-description {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .about-mission {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 0;
        }

        .contact-section {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(71, 85, 105, 0.3);
          border-radius: 20px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .contact-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .contact-icon {
          width: 24px;
          height: 24px;
          color: #f97316;
        }

        .contact-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .contact-subtitle {
          font-size: 0.875rem;
          color: #94a3b8;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-label {
          font-size: 0.875rem;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .required {
          color: #f97316;
        }

        .form-input,
        .form-textarea {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(71, 85, 105, 0.4);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          color: white;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #64748b;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        .checkbox-group {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin: 1.5rem 0;
        }

        .checkbox-input {
          width: 16px;
          height: 16px;
          margin-top: 2px;
          accent-color: #f97316;
        }

        .checkbox-label {
          font-size: 0.8rem;
          color: #94a3b8;
          line-height: 1.5;
          flex: 1;
        }

        .required-note {
          color: #f97316;
          font-weight: 500;
        }

        .submit-button {
          width: 100%;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          border: none;
          border-radius: 8px;
          padding: 0.875rem 1.5rem;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        .submit-icon {
          width: 16px;
          height: 16px;
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-message {
          background-color: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .success-message {
          background-color: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22c55e;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-section {
            order: 2;
          }

          .contact-section {
            order: 1;
          }
        }

        @media (max-width: 768px) {
          .contact-about-section {
            padding: 2rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .content-wrapper {
            gap: 2rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .contact-section {
            padding: 2rem;
          }

          .about-title {
            font-size: 1.75rem;
          }

          .contact-title {
            font-size: 1.25rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="content-wrapper">
          {/* About Section */}
          <div className="about-section">
            <div className="about-header">
              <svg className="about-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="about-title">About ElamWebStudio</h2>
            </div>
            
            <p className="about-subtitle">
              A Sub-brand of Elamai.in
            </p>

            <div className="about-description">
              ElamWebStudio is a dynamic web development studio that specializes in 
              creating cutting-edge digital solutions. As a sub-brand of Elamai.in, we 
              combine innovation with expertise to deliver exceptional web applications 
              and digital experiences.
            </div>

            <div className="about-mission">
              Our team focuses on modern web technologies, user-centered design, and 
              scalable solutions that help businesses thrive in the digital landscape. We 
              pride ourselves on delivering quality, reliability, and innovation in every 
              project.
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact-form" className="contact-section">
            <div className="contact-header">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="contact-title">Get In Touch</h3>
            </div>

            <p className="contact-subtitle">
              Ready to start your next project? Let's discuss how we can help bring your ideas to life.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Status Messages */}
              {submitStatus.error && (
                <div className="error-message">
                  {submitStatus.error}
                </div>
              )}
              
              {submitStatus.isSubmitted && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Your first name"
                    className="form-input"
                    required
                    disabled={submitStatus.isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Your last name"
                    className="form-input"
                    required
                    disabled={submitStatus.isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="form-input"
                    required
                    disabled={submitStatus.isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="form-input"
                    disabled={submitStatus.isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  disabled={submitStatus.isSubmitting}
                >
                  <option value="">Select a subject...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Quote">Project Quote</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Maintenance & Support">Maintenance & Support</option>
                  <option value="Technical Consulting">Technical Consulting</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  className="form-textarea"
                  required
                  disabled={submitStatus.isSubmitting}
                />
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="checkbox-input"
                  required
                />
                <label htmlFor="consent" className="checkbox-label">
                  I agree to allow this website to store my submission so they can respond to my inquiry. <span className="required-note">*</span>
                </label>
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={submitStatus.isSubmitting}
              >
                <svg className="submit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {submitStatus.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAboutSection;
