import { useState } from 'react';
import './App.css'; 
import './index.css';
import SearchForm from './components/SearchForm';
import FlightResults from './components/FlightResults';
import BookingForm from './components/BookingForm';
import TicketSuccess from './components/TicketSuccess';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  const [currentStep, setCurrentStep] = useState('search'); // 'search', 'results', 'booking', 'success'
  const [searchData, setSearchData] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [passengerDetails, setPassengerDetails] = useState(null);

  const handleSearch = (data) => {
    setSearchData(data);
    setCurrentStep('results');
  };

  const handleFlightSelect = (flight) => {
    if (flight) {
      setSelectedFlight(flight);
      setCurrentStep('booking');
    } else {
      // Modify search
      setCurrentStep('search');
    }
  };

  const handleBookingConfirm = async (details) => {
    try {
      // Prepare the payload
      const bookingData = {
        passengerDetails: details,
        flightDetails: selectedFlight,
        searchData: searchData,
        bookingDate: new Date().toISOString()
      };
      
      // Save to Firebase Firestore collection 'bookings'
      const docRef = await addDoc(collection(db, "bookings"), bookingData);
      console.log("Booking saved with ID: ", docRef.id);
      
      // Update state and move to success
      setPassengerDetails(details);
      setCurrentStep('success');
    } catch (e) {
      console.error("Error adding booking: ", e);
      // Fallback in case of error
      setPassengerDetails(details);
      setCurrentStep('success');
    }
  };

  const handleCancelBooking = () => {
    setCurrentStep('results');
  };

  const handleReset = () => {
    setSearchData(null);
    setSelectedFlight(null);
    setPassengerDetails(null);
    setCurrentStep('search');
  };

  return (
    <div className="app-container">
      {/* Dynamic Background */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      {/* Main Content Area */}
      <main className="main-content">
        <header className="app-header animate-fade-in">
          <h1 className="logo">
            Aero<span className="gradient-text">Nova</span>
          </h1>
        </header>

        <section className="step-container">
          {currentStep === 'search' && (
            <SearchForm onSearch={handleSearch} />
          )}

          {currentStep === 'results' && (
            <FlightResults searchData={searchData} onSelectFlight={handleFlightSelect} />
          )}

          {currentStep === 'booking' && (
            <BookingForm 
              selectedFlight={selectedFlight} 
              onConfirm={handleBookingConfirm} 
              onCancel={handleCancelBooking} 
            />
          )}

          {currentStep === 'success' && (
            <TicketSuccess 
              selectedFlight={selectedFlight}
              passengerDetails={passengerDetails}
              searchData={searchData}
              onReset={handleReset}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
