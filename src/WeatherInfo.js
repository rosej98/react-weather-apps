import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-7">
        <img src={props.data.iconUrl} alt={props.data.precipitation}></img>
        <WeatherTemp celsius={props.data.temp} />
        <ul className="details">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
      <div className="col-5">
        <h1>{props.data.city}</h1>
        <ul className="selected-date">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
    </div>
  );
}
