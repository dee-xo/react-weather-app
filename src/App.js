import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import WeatherInfo from "./Weatherinfo";


function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <Weather defaultCity="Toronto" />
      </header>
      </div>
    </div>
  );
}

export default App;
