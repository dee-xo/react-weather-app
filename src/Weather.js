import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature:response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description:response.data.weather[0].description,
      iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-SDVTb7ubKCYasum6bWjipkAhgQ2o-2OLQ&usqp=CAU",
    });
  }

if (weatherData.ready) {
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
          <li></li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
        <div className="image">
        <img
          src={weatherData.iconUrl}
          alt={weatherData.description}
        />
        </div>
      <div className="temp">{weatherData.temperature}</div> 
      <div className="info">
        <ul>
          <li>Humidity: {weatherData.humidity} %</li>
          <li>Wind: {weatherData.wind} km/h</li>
        </ul>
      </div>
      <br />
      <div className="source">
      <a href = "https://github.com/dee-xo/react-weather-app" target="_blank"
        >Open-source</a
      >
      <span> coded by Dwayna Williams</span>
    </div>
    </div>
    
  );
} else {
 const apiKey = "f37c9ae6d4f383a5c710381821c1b245";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 

  return "Loading...";
}
 
  
  
  }