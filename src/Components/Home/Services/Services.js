import React from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import discount from '../../../Images/discount.png';
import './Services.css'
import ServicesDetails from './../ServicesDetails/ServicesDetails';


SwiperCore.use([EffectCoverflow,Pagination]);

const services = [
    {
        id:1,
        name: 'Restaurant' ,
        img:discount
    },
    {
        id:2,
        name: 'Spa & Beauty ' ,
        img:discount
    },
    {
        id:3,
        name: 'Swimming' ,
        img:discount
    },
    {
        id:4,
        name: 'Conference' ,
        img:discount
    }
]

const Services = () => {
    return (
       <section className="team-container" id="about">
           <h3>Meet our Awesome team</h3>
           <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla! Lorem ipsum dolor sit</small></p>
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