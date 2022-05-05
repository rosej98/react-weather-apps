import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
          <footer>
            This project created by R.J{" "}
            <a
              href="https://github.com/rosej98/react-weather-apps"
              target="_blank"
              rel="noreferrer"
            >
              Open Source github
            </a>
          </footer>
        </header>
      </div>
    </div>
  );
}
