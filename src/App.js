import React from "react";

import ExamplesSection from "./components/pagesections/ExamplesSection/ExamplesSection";

import "./App.css";

function App() {

  return (
    <div className="App">
      
      <ExamplesSection />
    </div>
  );
}

export default App;

/* const api = {
  key: "7f70220af2158f71a96dd15557bf588a",
  base: "https://api.openweathermap.org/data/2.5/"
}

 

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

 

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }
  return (
    <div>
      <div >
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main !== "undefined") ? (<div> {weather.name}, {weather.main.temp}°c</div>) : ('')}
    </div>
  );
}

 

export default App; */