import React, { useState, useEffect } from 'react'
import "./weather.scss"
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import Logo from "./Logo";
import moment from 'moment';


const Weather = (props: any) => {
  let weather = props.weatherData;
  const localBtn = (JSON.parse(localStorage.getItem("button") as string) || false)

  console.log(weather)
  return (
    <div className="weather-box">
      <div className="weather">
        <div className="image">
        {/* {weatherLogo(weather.weatherMood)} */}
        <Logo  weatherLogo={weather.weatherMood}/>
        </div>
        <div className="temp-details">
          <div className="temp-dec">
            <div className="temp">
              <span className='cur-temp'>{((weather.temp)-0).toFixed(0)}°C</span>
              {
                localBtn?<span className="feel-like">feel like {((weather.feels_like)-0).toFixed(0)}°C</span>:<span className="feel-like">feel like{weather.feelslike_f}°F</span>
              }
            </div>
            <div className="description">
              <span><WebhookOutlinedIcon className='icon' />{weather.weatherMood}</span>
            </div>
          </div>
        </div>
        <div className="day-location">
          <div className="day-time">
            <span className="day">{moment(weather.dt*1000).format('dddd')}</span>
            <span className="time">,{moment(weather.dt*1000).format('h:mm a')}</span>
          </div>
          <div className="location">
            <span>📍{weather.name},{weather.country}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather