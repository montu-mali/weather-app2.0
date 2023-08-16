import React from 'react'
import "./today.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Swiper, SwiperSlide } from "swiper/react";
import light from '../assets/light.png'
// import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import './styles.css';


const Today = (props: any) => {

  let toDayData = props.todayData
  console.log(toDayData)

  return (
    <>
      <div className="today-box">
        <div className="today">
          <div className="multi-box">
            {
              toDayData.map((e:any) => {
                return (
                  <div className="single-day">
                    <div className="haed">
                      <span>Monday</span>
                    </div>
                    <div className="logo">
                      <img src={light} alt="" />
                    </div>
                    <div className="value">
                      <div className="mood">light rain</div>
                      <div className="temp">
                        <span className="max-temp">28°</span>
                        <span className="min-temp">24°</span>
                      </div>
                    </div>
                  </div>
                )
                if(toDayData[24]){
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