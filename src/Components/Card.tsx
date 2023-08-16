import React, { useEffect, useState } from 'react'
import './card.scss'
import InputCity from './InputCity'
import Weather from './Weather'
import Today from './Today'
import Highlights from './Highlights'
import ThisWeek from './ThisWeek'
import Loding from './Loding'

const Card = () => {
  const [weatherData, setWeatherData] = useState({});
  const [castDay, setCastDay] = useState([]);
  const[todayData,setTodayData]=useState([])
  const [location, setLocation] = useState("Modasa");
  const [loding, setLoding] = useState(false);
  const [tempBtn, setTempBtn] = useState(true);
  const [error, setError] = useState("uyuyuyuyu")
  console.log(todayData)


  const gatWeatherInfo = async () => {
    try {
      setLoding(true)
      let url = `http://api.weatherapi.com/v1/forecast.json?key=8917028ee3304aa095a62657231508&q=${location}&days=7&aqi=no&alerts=no`;
      let response = await fetch(url)
      let Data = await response.json()
      console.log(Data)
      const { cloud, temp_c, temp_f, feelslike_c, feelslike_f, humidity, uv, wind_kph: wind, pressure_mb: pressure } = Data.current;
      const { name, country, localtime } = Data.location;
      const { text: weatherMood } = Data.current.condition;
      const { sunrise, sunset } = Data.forecast.forecastday[0].astro;

      const newWeather = {
        temp_c,
        temp_f,
        feelslike_c,
        feelslike_f,
        humidity,
        uv,
        wind,
        pressure,
        weatherMood,
        name,
        cloud,
        localtime,
        country,
        sunrise,
        sunset,
      }

      setWeatherData(newWeather);
      setCastDay(Data.forecast.forecastday)
      setTodayData(Data.forecast.forecastday[0].hour)

    }
    catch (err: any) {
      console.log(err)
      setError("Please Enter Valid Location")
    }
    finally {
      setLoding(false)
    }
  }

  useEffect(() => {
    gatWeatherInfo()
  }, [location]);


  const receiveLocation = (loc: any) => {
    setLocation(loc)
  }

  useEffect(() => {
    localStorage.setItem('button', JSON.stringify(tempBtn))
    const localBtn = (JSON.parse(localStorage.getItem("button") as string) || false)
    setTempBtn(localBtn)
  }, [tempBtn])

  console.log(tempBtn)




  return (
    <>
      <div className="card-box">
        <div className="card">
          <div className="col-left">
            <div className="inputcity">
              <InputCity sendDataToParent={receiveLocation} />
            </div>
            <div className="weather">
              {
                loding ? <Loding /> : <Weather weatherData={weatherData} />
              }
            </div>
          </div>
          <div className="col-right">
            <div className="highlights">
              <div className="head-button">
                <h2>Today's Highlights</h2>
                <div className="two-btn">
                  <div className="cals" onClick={() => setTempBtn(true)}>°C</div>
                  <div className="farn" onClick={() => setTempBtn(false)}>°F</div>
                </div>
              </div>
              {
                loding ? <Loding /> : <Highlights weatherData={weatherData} btn={tempBtn} />
              }
            </div>
            <div className="thisweek">
              <h2>This Week</h2>
              {
                loding ? <Loding /> : <ThisWeek castDay={castDay} />
              }

            </div>
            <div className="today">
              <h2>Today</h2>
              <Today todayData={todayData} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card