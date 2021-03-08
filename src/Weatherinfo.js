import React from "react";
import FormattedDate from "./FormattedDate";


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
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
        />
        </div>
      <div className="temp">{props.data.temperature}</div> 
      <div className="info">
        <ul>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
</div>

      );
}
