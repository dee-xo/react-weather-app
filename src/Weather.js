import React, { useState } from "react";
import WeatherInfo from "./Weatherinfo";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.weather[0].icon,
    });
  }


function search() {
  const apiKey = "f37c9ae6d4f383a5c710381821c1b245";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 
}


function handleSubmit(event) {
  event.preventDefault();
  search();
}


function handleCityChange(event){
setCity(event.target.value);
}

if (weatherData.ready) {
  return (
    <div className="Weather">
      
      <form onSubmit={handleSubmit}>
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
                autoComplete="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
  );
} else {
  search ();
  return "Loading...";
}
  <div className="source">
      <a href = "https://github.com/dee-xo/react-weather-app" target="_blank"
        >Open-source</a
      >
      <span> coded by Dwayna Williams</span>
    </div>
    }
