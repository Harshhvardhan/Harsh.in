import React from 'react'
import './Testimonials.css'
import Avt1 from '../../assets/avtar.png'

// import Swiper core and required modules
import {Autoplay, Navigation, Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'




const data = [
  {
    avtar: Avt1,
    name: 'Abhinav',
    review: 'You are the friend Id feel the worst about killing in a post-apocalyptic death match for food. If anyone ever hurts you, I will destroy them. Wishing you a happy friendship day, my dear friend. May God strengthen our bond and fill our lives with happy memories.'
  },
  {
    avtar: Avt1,
    name: 'Vaibhav',
    review: 'You are the friend Id feel the worst about killing in a post-apocalyptic death match for food. If anyone ever hurts you, I will destroy them. Wishing you a happy friendship day, my dear friend. May God strengthen our bond and fill our lives with happy memories.'
  },
  {
    avtar: Avt1,
    name: 'Atequee',
    review: 'You are the friend Id feel the worst about killing in a post-apocalyptic death match for food. If anyone ever hurts you, I will destroy them. Wishing you a happy friendship day, my dear friend. May God strengthen our bond and fill our lives with happy memories.'
  },
  {
    avtar: Avt1,
    name: 'Aman',
    review: 'You are the friend Id feel the worst about killing in a post-apocalyptic death match for food. If anyone ever hurts you, I will destroy them. Wishing you a happy friendship day, my dear friend. May God strengthen our bond and fill our lives with happy memories.'
  }
  
]
const Testimonials = () => {
  return (
   <section id='testimonials'>

     <h5>Review from clients</h5>
     <h2>Testimonials</h2>

     <Swiper className="container testimonials_container"
     
      modules={[Autoplay,Pagination,Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation={{ clickable: true}}
      pagination={{ clickable: true ,
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },}}

     
     
      >
      {
        data.map(({avtar,name,review}, index) =>{
        return(   <SwiperSlide key={index} className="testimonial">
          <div className="client_avtar">
           <img src={avtar} alt='' />
           </div>
             <h5 className="client_name"> {name} </h5>
             <small className="client_review">  {review} </small>
          
        </SwiperSlide>
        )  
      })
      }
     </Swiper>
   </section>
  )
}

export default Testimonials








// package json line 23 me..
// "eslintConfig": {
//   "extends": [
//     "react-app",
//     "react-app/jest"
//   ]
// },