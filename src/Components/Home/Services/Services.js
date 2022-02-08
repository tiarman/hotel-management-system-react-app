import React from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import './Services.css';
import img from '../../../Images/discount.png';
import swimmings from '../../../Images/swiming.svg';


const rooms = [
    {
        id:1,
        title: 'Standard Single Room',
        description: 'Standard Single Rooms are designed in open -concept living area.',
        imgs:swimmings
    },
    {
        id:2,
        title: 'Couple Power Room',
        description: 'Superior Double Rooms are perfectly equipped for traveling couples.',
        imgs:swimmings
    },
    {
        id:3,
        title: 'Family Capacity Room',
        description: ' Have lots of in-room facilities and are designed in open-concept.',
        imgs:swimmings
    },
    {
        id:3,
        title: 'Family Capacity Room',
        description: ' Have lots of in-room facilities and are designed in open-concept.',
        imgs:swimmings
    },
    {
        id:3,
        title: 'Family Capacity Room',
        description: ' Have lots of in-room facilities and are designed in open-concept.',
        imgs:swimmings
    }
]

const Services = () => {

    return (
        <section id="services" className="py-5">
        <h5 className='text-center'>What We Do</h5>
        <h1 className='text-center'>Our Awesome Services</h1>
        <div className='row'>
            <div className="col-md-6 text-center justify-content-center mx-auto mt-md-5 pt-5">
                <img style={{ width: "550px", height: "450px" }} src={img} alt=""/>
            </div>
            <div className="col-md-6 pt-5">
            {
                rooms.map(room => <ServicesDetails key={room.id} room={room}></ServicesDetails>)
            }
        </div>
        </div>
    </section>
    );
};

export default Services;