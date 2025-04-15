import React, { useEffect, useState } from 'react';
import './FeatureFlightDetails.css';
import DigitalClock from '../utils/DigitalClock';

const FeatureFlightDetails = () => {
  const [flightData, setFlightData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('international_arrivals');
  const [searchTerm, setSearchTerm] = useState('');
  const [is24Hour, setIs24Hour] = useState(true);
  const [setCurrentTime] = useState(new Date());

  const proxyURL = `https://api.allorigins.win/raw?url=${encodeURIComponent(
    ''
  )}`;

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await fetch(proxyURL);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();

        if (result.success) {
          setFlightData(result.data);
        } else {
          setError('No flight data available.');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch flight details.');
      } finally {
        setLoading(false);
      }
    };

    fetchFlightDetails();
  }, []);

  const filterFlights = (flights) =>
    flights.filter((flight) =>
      `${flight.Airline} ${flight.FlightNumber} ${flight.OrigDest}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );


  useEffect(() => {
    // Update current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const getFlightsForTab = () => {
    if (!flightData) return [];
    switch (activeTab) {
      case 'international_arrivals':
        return filterFlights(flightData.arrivals.filter(f => f.IntDom === "1"));
      case 'international_departures':
        return filterFlights(flightData.departure.filter(f => f.IntDom === "1"));
      case 'domestic_arrivals':
        return filterFlights(flightData.arrivals.filter(f => f.IntDom === "0"));
      case 'domestic_departures':
        return filterFlights(flightData.departure.filter(f => f.IntDom === "0"));
      default:
        return [];
    }
  };

  // Function to highlight the nearest upcoming flight
  const highlightNearestFlight = (flights) => {
    const currentTime = new Date();
    let nearestFlight = null;
    let minDifference = Infinity;

    flights.forEach(flight => {
      const flightTime = new Date(flight.STASTD_DATE);
      const timeDifference = flightTime - currentTime;

      // Check if the flight is in the future and if it's the nearest
      if (timeDifference > 0 && timeDifference < minDifference) {
        minDifference = timeDifference;
        nearestFlight = flight;
      }
    });

    return nearestFlight;
  };

  const getStatusBadge = (status) => {
    let badgeClass = 'statusBadge'; // default badge class

    if (!status) {
      badgeClass += ' statusLanded'; // Default status color
    } else {
      switch (status.toLowerCase()) {
        case 'landed':
          badgeClass += ' statusLanded';
          break;
        case 'departed':
          badgeClass += ' statusDeparted';
          break;
        case 'delayed':
          badgeClass += ' statusDelayed';
          break;
        case 'cancelled':
          badgeClass += ' statusCancelled';
          break;
        case 'boarding completed':
          badgeClass += ' statusBoardingCompleted';
          break;
        case 'security check':
          badgeClass += ' statusSecurityCheck';
          break;
        case 'last call':
          badgeClass += ' statusLastCall';
          break;
        case 'check-in':
          badgeClass += ' statusCheckIn';
          break;
        default:
          badgeClass += ' statusLanded'; // fallback
      }
    }

    return <span className={badgeClass}>{status || 'On Time'}</span>;
  };

  const formatDate = (datetime, is24) => {
    if (!datetime) return 'N/A';
    const date = new Date(datetime);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: !is24
    });
  };
  
  

  if (loading) {
    return (
      <div className="loaderWrapper">
        <div className="spinner"></div>
        <div className="loadingText">Fetching flight data...</div>
      </div>
    );
  }

  if (error) return <div className="error">🚨 {error}</div>;

  // Get the flights for the active tab
  const flightsForTab = getFlightsForTab();

  // Highlight the nearest upcoming flight
  const nearestFlight = highlightNearestFlight(flightsForTab);

  return (
    <div className="wrapper">
      <div className="headerSection">
            <div className="clockLeft">
                <DigitalClock is24Hour={is24Hour} setIs24Hour={setIs24Hour} />
            </div>

            <div className="rightSection">
                <div className="tabBar">
                {['international_arrivals', 'international_departures', 'domestic_arrivals', 'domestic_departures'].map(tab => (
                    <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`tabButton ${activeTab === tab ? 'activeTab' : ''}`}
                    >
                    {tab.replace('_', ' ').replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </button>
                ))}
                </div>

                <div className="searchBox">
                <input
                    type="text"
                    placeholder="🔍 Search flights..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input"
                />
                </div>
            </div>
        </div>

      <div className="tableWrapper">
        <table className="table">
          <thead>
            <tr className="tableHeaderInfo">
              <th>Airlines</th>
              <th>Scheduled</th>
              <th>Actual</th>
              <th>Flight</th>
              <th>Destination</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {flightsForTab.length > 0 ? (
              flightsForTab.map((flight, index) => (
                <tr
                  key={index}
                  className={`tableRow ${nearestFlight && flight.FlightNumber === nearestFlight.FlightNumber ? 'highlight' : ''}`}
                >
                  <td>{flight.Airline}</td>
                  <td>{formatDate(flight.STASTD_DATE, is24Hour)}</td>
                  <td>{formatDate(flight.ETAETD_date, is24Hour)}</td>
                  <td>{flight.FlightNumber}</td>
                  <td>{flight.OrigDest}</td>
                  <td>{getStatusBadge(flight.FlightStatus)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="noResult">😔 No flights found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureFlightDetails;
