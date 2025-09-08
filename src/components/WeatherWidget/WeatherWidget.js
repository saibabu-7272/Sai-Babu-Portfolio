import React, { useState, useEffect } from 'react';
import './WeatherWidget.css';
// Import weather data from central file
import { weatherData } from '../../data/portfolioData';

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    temperature: weatherData.temperature,
    day: weatherData.currentDay,
    date: weatherData.currentDate,
    city: weatherData.city
  });

  // For a real implementation, you'd use an API like OpenWeatherMap
  // This is a placeholder using data from our central data file
  useEffect(() => {
    // Get current day and date to always show the most up-to-date info
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const currentDay = days[date.getDay()];
    const currentDate = `${date.getDate()} ${months[date.getMonth()]}`;
    
    setWeather(prev => ({
      ...prev,
      day: currentDay,
      date: currentDate
    }));
  }, []);

  return (
    <div className="weather-widget">
      <div className="weather-info">
        <div className="weather-temp">
          {weather.temperature}
        </div>
        <div className="weather-date">
          {weather.day}, {weather.date}
        </div>
        <div className="weather-location">
          {weather.city}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
