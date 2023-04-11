import React from 'react';
import './Testimonials.css';
import Avt1 from '../../assets/avtar.png';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


// import required modules
import { Autoplay, Pagination,Navigation} from 'swiper';


const data = [
  {
    avtar: Avt1,
    name: 'Abhinav',
    review: 'When you are with me, I feel I am the strongest person in this world. You complete me and my life. May God strengthen our bond and fill our lives with happy memories.'
  },
  {
    avtar: Avt1,
    name: 'Vaibhav',
    review: 'Not everyone is blessed with true friends, but those who have them must always value them. May God strengthen our bond and fill our lives with happy memories.'
  },
  {
    avtar: Avt1,
    name: 'Atequee',
    review: 'You are the most awesome friend, and I am the most fortunate to have you in my life. Cheers to our friendship.  May God strengthen our bond and fill our lives with happy memories.'
  },
  {
    avtar: Avt1,
    name: 'Aman',
    review: 'Your friendship is the most valuable thing that I am always going to cherish because it completes my life May God strengthen our bond and fill our lives with happy memories.'
  }
  
]

export default function Testimonials() {

  return (
    <section id='testimonials'>

    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials_container"
      pagination={{
        
        dynamicBullets: true,
      }}
      navigation={{ clickable: true}}
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      autoplay={{
          delay: 500,
          disableOnInteraction: false
      }}
      modules={[Pagination,Autoplay,Navigation]}
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
  <h5 className='swipetext'>Swipe to see more!</h5>
   </section>
    );
}