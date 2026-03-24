import React from 'react';
import './TicketSuccess.css';

const TicketSuccess = ({ selectedFlight, passengerDetails, searchData, onReset }) => {
  // Generate a mock booking reference
  const bookingRef = Math.random().toString(36).substring(2, 8).toUpperCase();

  return (
    <div className="ticket-success-container animate-fade-in">
      <div className="success-header">
        <div className="success-icon bounce-animation">✓</div>
        <h2>Booking Confirmed!</h2>
        <p className="text-secondary">Your ticket has been sent to {passengerDetails?.email}</p>
      </div>

      <div className="digital-ticket">
        {/* Ticket Header */}
        <div className="ticket-header">
          <div className="airline-info">
            <span className="logo-small">Aero<span className="gradient-text">Nova</span></span>
            <span className="flight-number">{selectedFlight?.airline} - {selectedFlight?.id}</span>
          </div>
          <div className="booking-ref">
            <span>PNR</span>
            <h4>{bookingRef}</h4>
          </div>
        </div>

        {/* Ticket Body */}
        <div className="ticket-body">
          <div className="route-info">
            <div className="city">
              <h2>{searchData?.from?.substring(0, 3).toUpperCase() || 'ORG'}</h2>
              <span>{searchData?.from || 'Origin'}</span>
            </div>
            
            <div className="flight-path">
              <span className="duration">{selectedFlight?.duration}</span>
              <div className="path-line">
                <span className="airplane-icon">✈</span>
              </div>
              <span className="date">{searchData?.date || 'Today'}</span>
            </div>
            
            <div className="city text-right">
              <h2>{searchData?.to?.substring(0, 3).toUpperCase() || 'DST'}</h2>
              <span>{searchData?.to || 'Destination'}</span>
            </div>
          </div>

          <div className="passenger-info-grid">
            <div className="info-block">
              <label>Passenger</label>
              <p>{passengerDetails?.firstName} {passengerDetails?.lastName}</p>
            </div>
            <div className="info-block">
              <label>Departure</label>
              <p>{selectedFlight?.departure}</p>
            </div>
            <div className="info-block">
              <label>Class</label>
              <p>{searchData?.flightClass}</p>
            </div>
            <div className="info-block">
              <label>Gate</label>
              <p>TBD</p>
            </div>
            <div className="info-block">
              <label>Seat</label>
              <p>12A</p>
            </div>
          </div>
        </div>

        {/* Ticket Footer (Barcode) */}
        <div className="ticket-footer">
          <div className="barcode">
            <div className="bars"></div>
            <span>{bookingRef} - {selectedFlight?.id}</span>
          </div>
        </div>
      </div>

      <div className="success-actions mt-4">
        <button className="btn-secondary" onClick={onReset}>
          Book Another Flight
        </button>
      </div>
    </div>
  );
};

export default TicketSuccess;
