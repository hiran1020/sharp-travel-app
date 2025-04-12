import React, { useState, useEffect } from 'react';
import './DigitalClock.css';
const DigitalClock = ({ is24Hour, setIs24Hour }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => setCurrentTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (time) => {
      return time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !is24Hour
      });
    };
  
    return (
      <div className="clockContainer">
        <div className="clock">
          <span>{formatTime(currentTime)}</span>
        </div>
        <button 
  className="toggleButton" 
  onClick={() => setIs24Hour(prev => !prev)} 
  aria-label={`Switch to ${is24Hour ? '12' : '24'} hour format`}
>
  Switch to {is24Hour ? '12-Hour' : '24-Hour'}
</button>

      </div>
    );
  };


  export default DigitalClock;