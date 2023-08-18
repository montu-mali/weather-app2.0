import React, { useEffect, useState } from 'react'
import mist from '../assets/mist.png'
import light from "../assets/light.png"
import clear from '../assets/clear.png'
import clouds from '../assets/clouds.png'
import few from '../assets/few.png'
import haze from '../assets/haze.png'
import scattered from '../assets/scattered.png'
import overcast from '../assets/overcast.png'

const Logo = (props:any) => {
  // const [logos, setLogos] = React.useState("hase");
  // const [weatherMood, setWeatherModd] = useState("few clouds")


  let key = props.weatherLogo;
  const weatherLogo = () => {
    switch (key) {
      case "Heavy rain":
        return <img src={light} alt="yuyu" />
        break;
      case "Moderate rain":
        return <img src={light} alt="yuyu" />
        break;
      case "Patchy rain possible":
        return <img src={light} alt="yuyu" />
        break;
      case "Light rain shower":
        return <img src={light} alt="yuyu" />
        break;
      case "Moderate or heavy rain with thunder":
        return <img src={light} alt="yuyu" />
        break;
      case "light rain":
        return <img src={light} alt="yuyu" />
        break;
      case "few clouds":
        return <img src={few} alt="yuyu" />
        break;
      case "Clear":
        return <img src={clear} alt="yuyu" />
        break;
      case "Sunny":
        return <img src={clear} alt="yuyu" />
        break;
      case "scattered clouds":
        return <img src={scattered} alt="yuyu" />
        break;
      case "overcast clouds":
        return <img src={overcast} alt="yuyu" />
        break;
      case "broken clouds":
        return <img src={overcast} alt="yuyu" />
        break;
      case "Haze":
        return <img src={haze} alt="yuyu" />
        break;

      default:
        return <img src={haze} alt="yuyu" />
        break;
    }
  }

  return(
    <>
      {weatherLogo()}
    </>
  )
}
export default Logo
