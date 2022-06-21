import React from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import discount from '../../../Images/discount.png';
import swiming from '../../../Images/swiming.png';
import conference from '../../../Images/conference.png';
import restaurent from '../../../Images/restaurent.png';
import beauty from '../../../Images/beauty.png';
import './Services.css'
import ServicesDetails from './../ServicesDetails/ServicesDetails';


SwiperCore.use([EffectCoverflow,Pagination]);

const services = [
    {
        id:1,
        name: 'Restaurant' ,
        img:restaurent
    },
    {
        id:2,
        name: 'Spa & Beauty ' ,
        img:beauty
    },
    {
        id:3,
        name: 'Swimming' ,
        img:swiming
    },
    {
        id:4,
        name: 'Conference' ,
        img:conference
    }
]

const Services = () => {
    return (
       <section className="team-container" id="services">
           <h3>Our Awesome Services</h3>
           <p><small>We provide best services in our town</small></p>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true}   
             autoplay={{  delay: 2500, disableOnInteraction: false}} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
          >
                {
                        services.map(service => {
                            return(
                                <SwiperSlide  key={service.id}>
                                    <ServicesDetails key={service.id} service={service} />
                                </SwiperSlide>
                            )
                        })
                }
            
          
            </Swiper>
       </section>
    );
};

export default Services;