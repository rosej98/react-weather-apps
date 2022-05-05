import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({ loaded: false });

  function handelResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      //   response.data.weather[0].icon,
    });
  }

  if (weatherData.loaded) {
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
            <img src={weatherData.icon} alt={weatherData.precipitation}></img>
            <span className="temp">{weatherData.temp}</span>
            <span className="unit">°C|°F</span>
            <ul className="details">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
          <div className="col-5">
            <h1>New York</h1>
            <ul className="selected-date">
              <li>{/* <FormattedDate date={weatherData.date} /> */}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New York";
    const apiKey = "689efb7d786944e7c1a6b5dddb92c594";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

    axios.get(`${apiUrl}&appid=${apiKey}`).then(handelResponse);
    return "loading";
  }
}
