import React from "react";

export default function WeatherForecastDay(response) {
  function formatDay() {
    let date = new Date(response.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thur.", "Fri.", "Sat."];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="FormattedForecastDate">{formatDay()}</div>
      <img
        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
        alt="icon"
        width="30px"
      ></img>
      <div className="Weather-Forecast-Temp">
        <span className="Weather-Forecast-Temp-max">
          {Math.round(response.data.temp.max)}°
        </span>
        <span className="Weather-Forecast-Temp-min">
          {Math.round(response.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
