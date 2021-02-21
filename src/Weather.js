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
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-secondary w-100"
            />
          </div>
        </div>
      </form>
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
         </div>
        <span>-2</span>
        <span>°C</span>|<span>°F</span>
      <div>
        <ul>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/h</li>
        </ul>
      </div>
      <div className="source">
      Open sourced code by Dwayna Williams
    </div>
    </div>
    
  );
  }