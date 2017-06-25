import React from 'react';
import './Weather.css';
import cloudy from '../images/cloudy.png';
import fog from '../images/fog.png';
import pellets from '../images/pellets.png';
import rain from '../images/rain.png';
import snow from '../images/snow.png';
import sunny from '../images/sunny.png';
import thunder from '../images/thunder.png';
import partlyCloudy from '../images/partly_cloudy.png';
import celsius from '../images/celsius.png';
import none from '../images/none.png';
import cross from '../images/cross.png';

function Weather(props) {

  const weatherData = props.weatherData.map((data, index) => {

    let weatherIcon = '',
        weatherColor = '';

    switch(data.text) {//checks to see which weather icon/ image to display
      case 'Sunny':
      case 'Clear':
        weatherIcon = sunny;
        weatherColor = '#eb9861';
        break;

      case 'Partly cloudy':
        weatherIcon = partlyCloudy;
        weatherColor = '#e4b162';
        break;

      case 'Cloudy':
      case 'Overcast':
        weatherIcon = cloudy;
        weatherColor = '#86dbef';
        break;

      case 'Thundery outbreaks in nearby':
        weatherIcon = thunder;
        weatherColor = '#86dbef';
        break;

      case 'Mist':
      case 'Fog':
      case 'Freezing fog':
        weatherIcon = fog;
        weatherColor = '#86dbef';
        break;

      case 'Patchy snow nearby':
      case 'Blowing snow':
      case 'Blizzard':
      case 'Freezing drizzle':
      case 'Heavy freezing drizzle':
      case 'Light freezing rain':
      case 'Moderate or heavy freezing rain':
      case 'Patchy light snow':
      case 'Light snow':
      case 'Patchy moderate snow':
      case 'Moderate snow':
      case 'Patchy heavy snow':
      case 'Heavy snow':
      case 'Light snow showers':
      case 'Moderate or heavy snow showers':
      case 'Moderate or heavy snow in area with thunder':
      case 'Patchy light snow in area with thunder':
        weatherIcon = snow;
        weatherColor = '#86dbef';
        break;

      case 'Patchy rain nearby':
      case 'Patchy freezing drizzle nearby':
      case 'Patchy light drizzle':
      case 'Patchy light rain':
      case 'Light drizzle':
      case 'Light rain':
      case 'Moderate rain at times':
      case 'Moderate rain':
      case 'Heavy rain at times':
      case 'Heavy rain':
      case 'Light sleet':
      case 'Moderate or heavy sleet':
      case 'Light rain shower':
      case 'Moderate or heavy rain shower':
      case 'Torrential rain shower':
      case 'Light sleet showers':
      case 'Moderate or heavy sleet showers':
      case 'Patchy light rain in area with thunder':
      case 'Moderate or heavy rain in area with thunder':
        weatherIcon = rain;
        weatherColor = '#86dbef';
        break;

      case 'Ice pellets':
      case 'Light showers of ice pellets':
      case 'Moderate or heavy showers of ice pellets':
        weatherIcon = pellets;
        weatherColor = '#86dbef';
        break;

      default:
        weatherIcon = none;
        weatherColor = '#eb9861';
        break;
    }


    const windowWidth = window.innerWidth;
    if(windowWidth >= 420) {//checks screen size for mobile styling
      const cityLength = data.name.length + data.country.length;
      if(cityLength >= 12) {//adds three dots if the text is longer then 12 letters
        let countryArray = [];
        for(let i = 0; i < 3; i++) {
          countryArray.push(data.country[i]);
        }
        var cityCountry = <p className="cityName">{data.name}, {countryArray.join('')}...</p>
      } else {
        cityCountry = <p className="cityName">{data.name}, {data.country}</p>
      }
    } else {
      cityCountry = <p className="cityName">{data.name}, {data.country}</p>
    }

    return (
      <div className="weatherBox" style={{background: weatherColor}} key={index}>
        <div className="grid">
          <img src={weatherIcon} alt="Weather Icon" className="weatherIcon"/>
        </div>
        <div className="grid">
          <p className="cityTemp">
            {data.temp}
            <img src={celsius} alt="celsius" className="cityCel"/>
          </p>
          {cityCountry}
        </div>
        <div className="grid">
          <img src={cross} alt="delete" className="deleteCity" onClick={props.removeCity.bind(this, index)}/>
        </div>
      </div>
    )
  });

  return (
    <div className="Weather">
      <div className="weatherContainer">
        {weatherData}
      </div>
    </div>
  )
}

export default Weather;
