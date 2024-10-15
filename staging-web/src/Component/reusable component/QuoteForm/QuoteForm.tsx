import React, { forwardRef, useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './QuoteForm.css'; // Import the CSS file
import livingRoom from '../../../assets/living-room-staging.jpg'

const ContactForm =  forwardRef<HTMLDivElement>((_props,  ref) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    option: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // // Send email using EmailJS
    emailjs.send(
      'service_ip7o129', // Your service ID from EmailJS
      'template_zzak7zf', // Your template ID from EmailJS
      formData, // The data being sent,
      'CiXAC_qGl_Q72R3XQ'
    )
    .then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
      setIsSubmitted(true);
    })
    .catch((err) => {
      console.error('Error sending email:', err);
    });
  };
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      option: '',
      message: ''
    });
    setIsSubmitted(false); // Go back to form
  };
  return (
    <div ref={ref} className="form-wrapper"  style={{ backgroundImage: `url(${livingRoom})` }}>
      <div className="image-section">
        <img src={livingRoom} alt="Modern House" />
      </div>
      <div className="form-section">
      {!isSubmitted ? (<form onSubmit={handleSubmit}>
        <div id='form-header'>
            <h1>Request A Quote</h1>
            <p>Please take a moment to fill out the form.</p>
        </div>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select</option>
            <option value="staging services">Staging Services</option>
            <option value="interior design">Interior Design</option>
            <option value="short-term rental styling">Short-Term Rental Styling</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            DROP ME MAIL ➡
          </button>
        </form>
    ) : (
          <div className="thank-you-message">
            <p>Thank you! Your message has been sent.</p>
            <button onClick={handleReset} className="reset-btn">
              Submit Another Quote
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default ContactForm;
