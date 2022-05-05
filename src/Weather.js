import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city name"
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-7">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly-cloudy"
          ></img>

          <span className="temp">17</span>
          <span className="unit">°C|°F</span>

          <ul className="details">
            <li>Precipitation: 15%</li>
            <li>Humidity: 76%</li>
            <li>Wind: 6 km/h</li>
          </ul>
        </div>
        <div className="col-5">
          <h1>New York</h1>
          <ul className="selected-date">
            <li>Wednesday</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
