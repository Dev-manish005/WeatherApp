import React from 'react'
import './Weather.css'
import search_icon from './assets/search.png';
import clear_icon from './assets/clear.png';
import cloud_icon from './assets/cloud.png';
import drizzle_icon from './assets/drizzle.png';
import humidity_icon from './assets/humidity.svg';
import rain_icon from './assets/rain.png';
import snow_icon from './assets/snow.png';
import wind_icon from './assets/wind.svg';


const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type='text' placeholder='search'/>
            <img src={search_icon} alt='search'/>
        </div>
        <img src={clear_icon} alt="clear.img" className='Weather-icon'/>
        <p className='temperature'>26°C</p>
        <p className='location'>Mumbai</p>
        <div className='weather-data'>
          <div className='col'>
            <img src={humidity_icon} alt="humidity" />
            <div>
            <p>91%</p>
            <span>humidity</span>
            </div>
          </div>
          <div className='col'>
            <img src={wind_icon} alt="wind" />
            <div>
            <p>3 km/hr</p>
            <span>wind speed</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather
