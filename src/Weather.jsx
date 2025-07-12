import React, { useEffect, useRef, useState } from 'react'
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
  const[weatherdata,setweatherdata]=useState(false);
  const inputref=useRef();
  const allicon={
    '01d':clear_icon,
    '01n':clear_icon,
    '02d':cloud_icon,
    '02n':cloud_icon,
    '03d':cloud_icon,
    '03n':cloud_icon,
    '04d':cloud_icon,
    '04n':cloud_icon,
    '09d':drizzle_icon,
    '09n':drizzle_icon,
    '10d':rain_icon,
    '10n':rain_icon,
    '11d':rain_icon,
    '11n':rain_icon,
    '13d':snow_icon,
    '13n':snow_icon,    
  }
  const search =async(city)=>{
    if(city===""){
      alert("Enter city name");
      return;
    }
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}
      &units=metric&appid=${import.meta.env.VITE_APP_ID}`

      const response=await fetch(url);
      const data=await response.json();
      console.log(data);
      if(!response.ok){
        alert(data.message);
      }
      const icon=allicon[data?.weather[0]?.icon]||clear_icon;
      setweatherdata({
        humidity:data?.main?.humidity,
        windspeed:data?.wind?.speed,
        temperature:Math.floor(data?.main?.temp),
        location:data?.name,
        icon:icon
      })
    }
    catch(error){
      setweatherdata(false);
    }
  }
  useEffect(()=>{
    search("kalyan");
  },[])

  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputref} type='text' placeholder='search'/>
            <img src={search_icon} alt='search'onClick={()=>search(inputref.current.value)}/>
        </div>
        {weatherdata?<>
        <img src={weatherdata.icon} alt="weather.img" className='Weather-icon'/>
        <p className='temperature'>{weatherdata.temperature}°C</p>
        <p className='location'>{weatherdata.location}</p>
        <div className='weather-data'>
          <div className='col'>
            <img src={humidity_icon} alt="humidity" />
            <div>
            <p>{weatherdata.humidity}%</p>
            <span>humidity</span>
            </div>
          </div>
          <div className='col'>
            <img src={wind_icon} alt="wind" />
            <div>
            <p>{weatherdata.windspeed}km/hr</p>
            <span>wind speed</span>
            </div>
          </div>
        </div>
        </>:<> 
          
        </>}
        
    </div>
  )
}

export default Weather
