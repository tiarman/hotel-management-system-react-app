import React from 'react';
import Header from '../../Components/Header/Header'
import BookingCard from '../../Components/Home/BookinCard/BookingCard';
import Contact from '../../Components/Home/Contact/Contact';
import Testimonials from '../../Components/Home/Testimonials/Testimonials';
import Services from './../../Components/Home/Services/Services';
import Footer from '../../Components/Home/Footer/Footer';
import './Home.css'

const home = () => {
    return (
        <div>
            <Header />
            <BookingCard />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default home;