import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFar(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function convertToCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|{" "}
          <a href="/" onClick={convertToFar}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let Far = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(Far)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCel}>
            °C{" "}
          </a>
          |°F
        </span>
      </div>
    );
  }
}
