import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
return(
<div className = "container">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
            </li>
          <li>{props.data.description}</li>
        </ul>
        <div className="image">
          <WeatherIcon code={props.data.icon} />
        </div>
      <div>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="info">
        <ul>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {Math.round (props.data.wind)} km/h</li>
        </ul>
      </div>
</div>

      );
}
