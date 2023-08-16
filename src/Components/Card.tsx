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
  const [oneCallData, setOneCallData] = useState([]);
  const [todayData, setTodayData] = useState([])
  const [location, setLocation] = useState("Modasa");
  const [loding, setLoding] = useState(false);
  const [tempBtn, setTempBtn] = useState(true);
  const [error, setError] = useState("uyuyuyuyu")


  const gatWeatherInfo = async () => {
    try {
      setLoding(true)
      let url = `https://api.openweathermap.org/data/2.5/weather?appid=a5bb4718b30b6f58f58697997567fffa&q=${location}`;
      let response = await fetch(url)
      let Data = await response.json()
        console.log(Data)

      let urls = `https://api.openweathermap.org/data/2.5/onecall?appid=a5bb4718b30b6f58f58697997567fffa&exclude=minutely&units=metric&lon=${Data.coord.lon}&lat=${Data.coord.lat}`;
      let respo = await fetch(urls)
      let oneCall = await respo.json()
      console.log(oneCall)

      const {clouds, temp, temp_max, temp_min, feels_like, humidity, pressure,sunrise,sunset,uvi } = oneCall.current;
      const {name } = Data;
      const {country } = Data.sys;
      const { description:weatherMood, main } = Data.weather[0];
      // const { sunrise, sunset} = oneCall.current;
      const { lon, lat } = Data.coord;
      const { all: cloud } = Data.clouds;


      const newWeather = {
        temp,
        clouds,
        temp_max,
        temp_min,
        feels_like,
        humidity,
        uvi,
        pressure,
        weatherMood,
        name,
        main,
        // dt,
        cloud,
        lon,
        lat,
        country,
        sunrise,
        sunset,
      }

     

      
      console.log(oneCall)

      setWeatherData(newWeather);
      setCastDay(oneCall.daily)
      setTodayData(oneCall.hourly)
      console.log(todayData)
      console.log(castDay)
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
  console.log(weatherData)



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