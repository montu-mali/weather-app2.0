import React,{useState} from 'react'
import './highlights.scss'
import clouds from '../assets/clouds.png'
import humidity from '../assets/humidity.png'
import pressure from '../assets/pressure.png'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import uv from '../assets/uv.png'
import wind from '../assets/wind.png'
import moment from 'moment';



const Highlights = (props:any) => {

  let data =props.weatherData;

  return (
    <div className="highlight-box">
      <div className="highlight">
        <div className="six-box">
          <div className="Humidity common-box">
            <div className="head">
              <span>Humidity</span>
            </div>
            <div className="logo">
              <img src={humidity} alt="" />
            </div>
            <div className="value-box">
              <span className="value"><span className="number">{data.humidity}</span> %</span>
            </div>
          </div>
          <div className="Wind-Speed common-box">
            <div className="head">
              <span>Wind-Speed</span>
            </div>
            <div className="logo">
              <img src={wind} alt="" />
            </div>
            <div className="value-box">
              <span className="value"><span className="number">{data.wind_speed}</span>kph</span>
            </div>
          </div>
          <div className="sunrise-set">
            <div className="sunrise sun">
              <img src={sunrise} alt="" />
              <div className="time-typse">
                <span className="time">{moment(data.sunrise*1000).format('h:mm a')}</span>
                <div className="typse">Sunrise</div>
              </div>
            </div>
            <div className="sunset sun">
              <img src={sunset} alt="" />
              <div className="time-typse">
                <span className="time">{moment(data.sunset*1000).format('h:mm a')}</span>
                <div className="typse">Sunset</div>
              </div>
            </div>
          </div>
          <div className="Clouds common-box">
            <div className="head">
              <span>Clouds</span>
            </div>
            <div className="logo">
              <img src={clouds} alt="" />
            </div>
            <div className="value-box">
              <span className="value"><span className="number">{data.cloud}</span>%</span>
            </div>
          </div>
          <div className="UV-Index common-box">
            <div className="head">
              <span>UV-Index</span>
            </div>
            <div className="logo">
              <img src={uv} alt="" />
            </div>
            <div className="value-box">
              <span className="value"><span className="number">{data.uvi}</span></span>
            </div>
          </div>
          <div className="Pressure common-box">
            <div className="head">
              <span>Pressure</span>
            </div>
            <div className="logo">
              <img src={pressure} alt="" />
            </div>
            <div className="value-box">
              <span className="value"><span className="number">{data.pressure}</span>hPa</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Highlights