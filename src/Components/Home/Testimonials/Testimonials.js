import { CardDeck, Container, Spinner } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/components/pagination/pagination.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './Testimonials.css';
import Testimonial from './../testimonial/testimonial';
import { useState } from 'react';


const Reviews = [
    {
        id:1,
        address:"chowara",
        name: 'Standard Single Room',
        comment: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
        img: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
    },
    {
        id:2,
        address:"chowara",
        name: 'Couple Power Room',
        comment: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
        img: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
    },
    {
        id:3,
        address:"chowara",
        name: 'Family Capacity Room',
        comment: ' Have lots of in-room facilities and are designed in open-concept living area.',
        img: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
    }
]

const Testimonials = () => {
 
    SwiperCore.use([Pagination, Autoplay]);
    



    return (
        <section id="reviews" className="testimonials p-md-3">
            <Fade bottom duration={2500} distance="40px">
                <div className="my-5 py-4">
                    <div className="review-title text-center">
                        <span>What Our Clients Says</span>
                        <h2>Testimonials</h2>
                    </div>
                    
                        <Container>
                        <CardDeck className="mt-5">
                            <Swiper
                                loop={true}
                                pagination={{ clickable: true }}
                                slidesPerView={1}
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
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={10}
                            >
                                {
                                    Reviews.map(testimonial => {
                                        return (
                                            <SwiperSlide key={testimonial.id}>
                                                <Testimonial testimonial={testimonial} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </CardDeck>
                        </Container>
                </div>
            </Fade>
        </section>
    );
};

export default Testimonials;