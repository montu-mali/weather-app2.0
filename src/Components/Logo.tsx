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
 const[logos,setLogos]=React.useState("hase");
 const[weatherMood,setWeatherModd] =useState("few clouds")



  const weatherLogo = () => {
    let key =weatherMood;
    switch (key) {
      case "Heavy rain"||"Moderate rain"||"Patchy rain possible"||"Moderate or heavy rain with thunder"||"light rain":
       return <img src={mist} alt="yuyu"/>
        break;
      case "few clouds":
        return <img src={few} alt="yuyu"/>
        break;
      case "Clear"||"Sunny":
        return <img src={clear} alt="yuyu"/>
        break;
      case "scattered clouds":
        setLogos("scattered")
        break;
      case "broken clouds"||"overcast clouds":
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
  
  useEffect(()=>{
    // weatherLogo()
    let key =weatherMood;
   if(key){
   
   }
  },[])

  return (
    <>
    {weatherLogo()}
    </>
  )
}

export default Logo
