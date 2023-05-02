import React from 'react'
import './Testimonials.css'
import I1 from '../assets/avatar-1.svg';
import I2 from '../assets/avatar-2.svg';
import I3 from '../assets/avatar-2.svg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    id: 1,
    image: I1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: I2,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: I3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
];


const Testimonials = () => {
  return (
    
    <section className="testimonials container section">

      <h2 className="section_title">Clients & Reviews </h2>

      <Swiper   className='testimonials_container grid'
       modules={[Pagination]}
       spaceBetween={30}
       slidesPerView={1}
       loop={true}
       grabCursor={true}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}

      
    >

        {
          data.map(({id,image,title,subtitle,comment}) => {

            return (
          
               <SwiperSlide className="testimonials_item" key={id}>

                <div className="thumb">
                  <img src={image} alt="" srcset="" />
                </div>
                <h3 className="testimonials_title">{title}</h3>
                <span className="subtitle">{subtitle}</span>
                <div className="comment">{comment}</div>


               </SwiperSlide>

            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials