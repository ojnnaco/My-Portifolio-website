import React from 'react'
import './Portfolioo.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import Chatbox from '../../images/Chatbox.png';
import ShoppingChart from '../../images/ShoppingChart.png';
import Tasktracker from '../../images/Tasktracker.png';
import myfolio from '../../images/myfolio.png';
import 'swiper/css'


const Portfolioo = () => {
  return (
    <div className='Pfolio'>
        {/*Heading */}
        <span className='p-text'>Recent Projects</span>
        <span className='p-folio'>Portfolio</span>

{/* Slider  */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='Pfolio_slider'>

        <SwiperSlide>
<img src={ShoppingChart} alt="Shopping_Chart" />
        </SwiperSlide>

        <SwiperSlide>
<img src={Tasktracker} alt="Tasktracker" />
        </SwiperSlide>

        <SwiperSlide>
<img src={Chatbox} alt="Chatbox" />
        </SwiperSlide>

        <SwiperSlide>
<img src={myfolio} alt="Portfolio" />
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolioo