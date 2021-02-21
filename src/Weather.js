import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Toronto",
    temperature: -5,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  return (
    <div className="Weather">
      <form className="search-form">
          <div className="row">
            <div className="col-4">
              <input
              type="sumbit"
              value="Current"
              className="form-control btn btn-secondary"
              />
            </div>
            <div className="col-4">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-secondary"
              />
            </div>
          </div>
        </form>
        <br />
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="Temp">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          width="150"
          height="150"
          alt="Clear"
        />
        
        <ul>
          <li>{weatherData.temperature}°C|°F</li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/h</li>
        </ul>
      </div>
      <br />
      <div className="source">
      <a href = "https://github.com/dee-xo/react-weather-app" target="_blank"
        >Open-source</a
      >
      <span> code by Dwayna Williams</span>
    </div>
    </div>
    
  );
  }