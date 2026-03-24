import React from 'react';
import './FlightResults.css';

const FlightResults = ({ searchData, onSelectFlight }) => {
  // Generate some premium looking mock data
  const mockFlights = [
    {
      id: 'FL-801',
      airline: 'AeroNova Prime',
      departure: '08:30 AM',
      arrival: '11:45 AM',
      duration: '3h 15m',
      stops: 'Non-stop',
      price: '$249',
      features: ['Wi-Fi', 'Extra Legroom']
    },
    {
      id: 'FL-422',
      airline: 'SkyHigh Express',
      departure: '01:15 PM',
      arrival: '05:00 PM',
      duration: '3h 45m',
      stops: '1 Stop',
      price: '$189',
      features: ['Power Outlets']
    },
    {
      id: 'FL-994',
      airline: 'Aurora Airways',
      departure: '06:00 PM',
      arrival: '08:50 PM',
      duration: '2h 50m',
      stops: 'Non-stop',
      price: '$315',
      features: ['Meal Included', 'Priority Boarding']
    }
  ];

  return (
    <div className="flight-results-container animate-fade-in">
      <div className="results-header">
        <div>
          <h2>Available Flights</h2>
          <p className="text-secondary">
            {searchData?.from} to {searchData?.to} • {searchData?.date} • {searchData?.passengers} Passenger(s) • {searchData?.flightClass}
          </p>
        </div>
        <button className="btn-secondary" onClick={() => onSelectFlight(null)}>
          Modify Search
        </button>
      </div>

      <div className="flight-list">
        {mockFlights.map((flight, index) => (
          <div 
            key={flight.id} 
            className={`flight-card glass-panel animate-slide-up delay-${(index + 1) * 100}`}
          >
            <div className="flight-airline">
              <div className="airline-logo">✈️</div>
              <div>
                <h4>{flight.airline}</h4>
                <span className="flight-id">{flight.id}</span>
              </div>
            </div>

            <div className="flight-timeline">
              <div className="time-group">
                <h3>{flight.departure}</h3>
                <span className="text-secondary">{searchData?.from || 'Origin'}</span>
              </div>
              
              <div className="duration-group">
                <span className="duration-text">{flight.duration}</span>
                <div className="duration-line">
                  <div className="airplane-icon">✈</div>
                </div>
                <span className="stops-text">{flight.stops}</span>
              </div>

              <div className="time-group text-right">
                <h3>{flight.arrival}</h3>
                <span className="text-secondary">{searchData?.to || 'Dest'}</span>
              </div>
            </div>

            <div className="flight-details">
              <div className="flight-features">
                {flight.features.map(f => <span key={f} className="feature-tag">{f}</span>)}
              </div>
              <div className="flight-action">
                <div className="price-tag">
                  <h3>{flight.price}</h3>
                  <span className="text-secondary">per person</span>
                </div>
                <button 
                  className="btn-primary" 
                  onClick={() => onSelectFlight(flight)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightResults;
