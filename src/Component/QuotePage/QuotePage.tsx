import React, { useState } from 'react';
import Navbar from '../NavBar/NavBar';
import './QuotePage.css';
import image1 from '../../assets/staging1.jpg';
import image2 from '../../assets/staging2.jpeg';
import image3 from '../../assets/staging3.jpeg';
import emailjs from 'emailjs-com'; // Import EmailJS
import { Autocomplete, TextField, Chip, AutocompleteRenderInputParams, AutocompleteRenderGetTagProps } from '@mui/material';


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyStatus: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  listingPrice: string;
  propertyType: string;
  squareFootage: string;
  rooms: string[];
  customRoom: string;
  dateNeeded: string;
  notes: string;
}

const QuotePage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyStatus: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    listingPrice: '',
    propertyType: '',
    squareFootage: '',
    rooms: [],
    customRoom: '',
    dateNeeded: '',
    notes: '',
  });

  const predefinedRooms = [
    'Living Room',
    'Additional Living Room',
    'Kitchen',
    'Dining Room',
    'Master Bedroom',
    'Additional Bedrooms',
    'Office',
    'Bathroom',
    'Outdoor Space',
    'Sunroom',
    'Additional Rooms'
  ];

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      propertyStatus: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      listingPrice: '',
      propertyType: '',
      squareFootage: '',
      rooms: [],
      customRoom: '',
      dateNeeded: '',
      notes: '',
    });
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      propertyStatus: formData.propertyStatus,
      address1: formData.address1,
      address2: formData.address2,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      listingPrice: formData.listingPrice,
      propertyType: formData.propertyType,
      squareFootage: formData.squareFootage,
      rooms: formData.rooms.join(', '),
      dateNeeded: formData.dateNeeded,
      notes: formData.notes
    };
;
    emailjs.send(
      'service_ip7o129',
      'template_zzak7zf',
      emailData,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRoomsChange = (_event: React.SyntheticEvent, newValue: string[]) => {
    setFormData(prev => ({
      ...prev,
      rooms: newValue
    }));
  };


  return (
    <div className="quote-page">
      <Navbar />
      <div className="image-container">
        <img src={image1} alt="Staging Example 1" />
        <img src={image2} alt="Staging Example 2" />
        <img src={image3} alt="Staging Example 3" />
      </div>
      <div className="quote-container">
        <h1>Request a Quote for Vacant Staging</h1>
        <p className="quote-description">
          Fill out this quote form to give us some info and we will email you a quote within 72 hours.
          Note: Our business hours are 8:30-4:30 Monday through Friday.
        </p>

        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your quote request has been successfully submitted.</p>
            <p>We'll get back to you within 72 hours during business hours.</p>
            <button onClick={handleReset} className="reset-button">
              Submit Another Quote
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quote-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone <span className="required">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-section required" >
              <h3>Property Information</h3>
              <div className="checkbox-group">
                <label>
                  <input
                    type='checkbox'
                    name="propertyStatus"
                    value="vacant"
                    checked={formData.propertyStatus === 'vacant'}
                    onChange={handleInputChange}
                    
                  />
                  Yes, the home is vacant
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="propertyStatus"
                    value="occupied"
                    checked={formData.propertyStatus === 'occupied'}
                    onChange={handleInputChange}
                    
                  />
                  No, the home is occupied
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address1">Address Line 1 <span className="required">*</span></label>
              <input
                type="text"
                id="address1"
                name="address1"
                value={formData.address1}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address2">Address Line 2</label>
              <input
                type="text"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City <span className="required">*</span></label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State <span className="required">*</span></label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code <span className="required">*</span></label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="listingPrice">Listing Price <span className="required">*</span></label>
              <select
                id="listingPrice"
                name="listingPrice"
                value={formData.listingPrice}
                onChange={handleInputChange}
                required
              >
                <option value="">Select an option</option>
                <option value="under300k">under $300k</option>
                <option value="300kTo400k">$300k to $400k</option>
                <option value="400kTo500k">$400k to $500k</option>
                <option value="500kPlus">$500k+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="propertyType">Type of Home <span className="required">*</span></label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select property type</option>
                <option value="single-family">Single Family Home</option>
                <option value="condo">Condo/Apartment</option>
                <option value="townhouse">Townhouse</option>
                <option value="multi-family">Multi-Family Home</option>
                <option value="luxury">Luxury Estate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="squareFootage">Square Feet of Property <span className="required">*</span></label>
              <input
                type="text"
                id="squareFootage"
                name="squareFootage"
                value={formData.squareFootage}
                onChange={handleInputChange}
                placeholder="e.g., 2000"
                required
              />
            </div>

            <div className="form-section">
              <h3>Rooms to be Staged <span className="required">*</span></h3>
              <div className="rooms-selection">
                <Autocomplete
                  multiple
                  freeSolo
                  options={predefinedRooms}
                  value={formData.rooms}
                  onChange={handleRoomsChange}
                  renderTags={(value: string[], getTagProps: AutocompleteRenderGetTagProps) =>
                    value.map((option: string, index: number) => (
                      <Chip
                        label={option}
                        {...getTagProps({ index })}
                        key={option}
                      />
                    ))
                  }
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <TextField
                      {...params}
                      placeholder="Select or type custom rooms"
                      
                    />
                  )}
                  clearIcon={<span style={{ right: '40px' }}>✕</span>}
                  sx={{
                    '& .MuiAutocomplete-tag': {
                      backgroundColor: 'whitesmoke',
                      color: 'black',
                      borderRadius: '16px',
                      '& .MuiChip-deleteIcon': {
                        color: '#666666',
                        '&:hover': {
                          color: '#ffffff'
                        }
                      }
                    },
                    '& .MuiAutocomplete-clearIndicator': {
                      color: '#666666',
                      '&:hover': {
                        color: '#333333'
                      }
                    },
                    '& .MuiAutocomplete-popupIndicator': {
                      color: '#666666'
                    }
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dateNeeded">Date Needed <span className="required">*</span></label>
              <input
                type="date"
                id="dateNeeded"
                name="dateNeeded"
                value={formData.dateNeeded}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                placeholder="Add any additional details or special requests"
              />
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuotePage; 