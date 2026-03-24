import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ selectedFlight, onConfirm, onCancel }) => {
  const [passengerData, setPassengerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setPassengerData({ ...passengerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passengerData.firstName && passengerData.email && passengerData.mobile) {
      onConfirm(passengerData);
    }
  };

  return (
    <div className="booking-form-container glass-panel animate-fade-in">
      <div className="booking-header">
        <h2>Passenger Details</h2>
        <div className="selected-flight-summary">
          <span>Booking: {selectedFlight?.airline} ({selectedFlight?.id})</span>
          <span className="gradient-text font-bold">{selectedFlight?.price}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-row">
          <div className="input-field">
            <input 
              type="text" 
              name="firstName" 
              value={passengerData.firstName} 
              onChange={handleChange} 
              required 
            />
            <label>First Name</label>
          </div>
          <div className="input-field">
            <input 
              type="text" 
              name="lastName" 
              value={passengerData.lastName} 
              onChange={handleChange} 
              required 
            />
            <label>Last Name</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-field">
            <input 
              type="email" 
              name="email" 
              value={passengerData.email} 
              onChange={handleChange} 
              required 
            />
            <label>Email Address</label>
          </div>
          <div className="input-field">
            <input 
              type="tel" 
              name="mobile" 
              value={passengerData.mobile} 
              onChange={handleChange} 
              required 
            />
            <label>Mobile Number</label>
          </div>
        </div>

        <div className="booking-actions mt-4">
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Back
          </button>
          <button type="submit" className="btn-primary">
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
