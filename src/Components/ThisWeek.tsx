import React from 'react'
import './thisweek.scss'
import Logo from './Logo'
import mist from '../assets/mist.png'
import light from "../assets/light.png"
import clear from '../assets/clear.png'
import clouds from '../assets/clouds.png'
import few from '../assets/few.png'
import haze from '../assets/haze.png'
import scattered from '../assets/scattered.png'
import overcast from '../assets/overcast.png'



const ThisWeek = (props: any) => {
  let SevenDayData = props.castDay
  const weatherLogo = (e:any) => {
    let key=e;
    console.log(key)
    switch (key) {
      case "Heavy rain":
       return <img src={light} alt="yuyu"/>
        break;
        case "Moderate rain":
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
    <>
      <div className="this-week">
        <div className="week">
          <div className="eight-day">
            {
              SevenDayData.map((e: any) => {
                return (
                  <div className="single-day">
                    <div className="head">
                    <span>{e.date}</span>
                    </div>
                    <div className="logo">
                     {
                      weatherLogo(e.day.condition.text)
                     }
                    </div>
                    <div className="value">
                      <div className="mood">{e.day.condition.text}</div>
                      <div className="temp">
                        <span className="max">{e.day.maxtemp_c}°</span>
                        <span className="min">{(e.day.mintemp_c)}°</span>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default ThisWeek