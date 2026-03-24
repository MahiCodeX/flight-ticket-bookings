import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    flightClass: 'Economy',
    passengers: 1
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.from && formData.to && formData.date) {
      onSearch(formData);
    }
  };

  return (
    <div className="search-form-container glass-panel animate-slide-up temp-box">
      <h2 className="search-title">Where are you flying <span className="gradient-text">next?</span></h2>
      
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group">
          <div className="input-wrapper">
            <label>From</label>
            <input 
              type="text" 
              name="from" 
              placeholder="Origin City or Airport" 
              value={formData.from} 
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="swap-icon-wrapper">
             <div className="swap-icon">⇌</div>
          </div>

          <div className="input-wrapper">
            <label>To</label>
            <input 
              type="text" 
              name="to" 
              placeholder="Destination City or Airport" 
              value={formData.to} 
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group secondary-group">
          <div className="input-wrapper date-wrapper">
            <label>Departure Date</label>
            <div className="date-input-container">
              <input 
                type="date" 
                name="date" 
                value={formData.date} 
                onChange={handleChange}
                required
              />
              <svg className="calendar-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
          </div>

          <div className="input-wrapper select-wrapper">
            <label>Class</label>
            <select name="flightClass" value={formData.flightClass} onChange={handleChange}>
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </div>

          <div className="input-wrapper">
            <label>Passengers</label>
            <input 
              type="number" 
              name="passengers" 
              min="1" 
              max="9" 
              value={formData.passengers} 
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn-primary search-btn mt-4">
          Explore Flights
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
