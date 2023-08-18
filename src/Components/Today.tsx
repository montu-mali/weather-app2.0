import React from 'react'
import "./today.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from "./Logo";
import moment from 'moment';


const Today = (props: any) => {
  let toDayData = props.todayData
  console.log(toDayData)


  return (
    <>
      <div className="today-box">
        <div className="today">
          <div className="multi-box">
            {
              toDayData.map((e: any) => {
                return (
                  <div className="single-day">
                    <div className="head">
                      <span className="day">{moment(e.dt * 1000).format('dddd')}</span>
                      <span className="time">, {moment(e.dt * 1000).format('h:mm a')}</span>
                    </div>
                    <div className="logo">
                   <Logo  weatherLogo={e.weather[0].description}/>
                    </div>
                    <div className="value">
                      <div className="mood">{e.weather[0].description}</div>
                      <div className="temp">
                        <span className="max-temp">{e.temp.toFixed(0)}°</span>
                      </div>
                    </div>
                  </div>
                )
                if (toDayData[24]) {
                }
              })
            }

          </div>
        </div >
      </div >
    </>
  )
}

export default Today