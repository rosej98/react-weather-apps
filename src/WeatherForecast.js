import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function updateInfo(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            {/* <WeatherForecastDay data={forecast[0]} /> */}
          </div>
        </div>
      </div>
    );
  } else {
    let lon = props.coord.lon;
    let lat = props.coord.lat;

    let apiKey = "689efb7d786944e7c1a6b5dddb92c594";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;

    axios.get(`${apiUrl}&appid=${apiKey}`).then(updateInfo);

    return "LOADING";
  }
}
