import React, { useState, useEffect } from 'react'
import "./weather.scss"
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import Logo from "./Logo";
import mist from '../assets/mist.png'
import light from "../assets/light.png"
import clear from '../assets/clear.png'
import clouds from '../assets/clouds.png'
import few from '../assets/few.png'
import haze from '../assets/haze.png'
import scattered from '../assets/scattered.png'
import overcast from '../assets/overcast.png'
import moment from 'moment';


const Weather = (props: any) => {
  let weather = props.weatherData;
  const localBtn = (JSON.parse(localStorage.getItem("button") as string) || false)
//  console.log(weather)
//  const[weatherMood,setWeatherModd] =useState("Clear")
//  useEffect(()=>{
//   setWeatherModd(weather.weatherMood)
//  },[weather.weatherMood])
 
  const weatherLogo = () => {
    let key=weather.weatherMood;
  
    switch (key) {
      case "Heavy rain":
       return <img src={light} alt="yuyu"/>
        break;
        case "moderate rain":
       return <img src={light} alt="yuyu"/>
        break;
        case "Patchy rain possible":
       return <img src={light} alt="yuyu"/>
        break;
        case "Light rain shower":
          return <img src={light} alt="yuyu"/>
           break;
        case "Moderate or heavy rain with thunder":
       return <img src={light} alt="yuyu"/>
        break;
        case "light rain":
       return <img src={light} alt="yuyu"/>
        break;
      case "few clouds":
        return <img src={few} alt="yuyu"/>
        break;
      case "Clear":
        return <img src={clear} alt="yuyu"/>
        break;
        case "Sunny":
          return <img src={clear} alt="yuyu"/>
          break;
      case "scattered clouds":
        return <img src={scattered} alt="yuyu"/>
        break;
      case"overcast clouds":
        return <img src={overcast} alt="yuyu"/>
        break;
        case "broken clouds":
          return <img src={overcast} alt="yuyu"/>
          break;
      case "Haze":
        return <img src={haze} alt="yuyu"/>
        break;

      default:
        return <img src={haze} alt="yuyu"/>
        break;
    }
  }

  return (
    <div className="weather-box">
      <div className="weather">
        <div className="image">
        {weatherLogo()}
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
            <span className="day">{moment(weather.dt).format('dddd')} </span>
            <span className="time">,{moment(weather.dt).format('h:mm a')}</span>
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