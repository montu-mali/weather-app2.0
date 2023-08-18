import React from 'react'
import './thisweek.scss'
import Logo from './Logo'
import moment from 'moment';



const ThisWeek = (props: any) => {
  let SevenDayData = props.castDay

  return (
    <>
      <div className="this-week">
        <div className="week">
          <div className="eight-day">
            {
              SevenDayData.map((e: any) => {
                  // const day=moment(e.dt).format('dddd')
                return (
                  <div className="single-day">
                    <div className="head">
                    <span>{moment(e.dt*1000).format('dddd')}</span>
                    </div>
                    <div className="logo">
                     {/* {weatherLogo(e.weather[0].description)} */}
                     <Logo  weatherLogo={e.weather[0].description}/>
                    </div>
                    <div className="value">
                      <div className="mood">{e.weather[0].description}</div>
                      <div className="temp">
                        <span className="max">{e.temp.max.toFixed(0)}°</span> 
                     <span className="min">{(e.temp.min.toFixed(0))}°</span>
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