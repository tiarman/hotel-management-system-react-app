import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import RoomDetails from './../RoomDetails/RoomDetails';
import './BookingCard.css'

// const rooms = [
//     {
//         id:1,
//         title: 'Standard Single Room',
//         description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
//         image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
//         price: 119
//     },
//     {
//         id:2,
//         title: 'Couple Power Room',
//         description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
//         image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
//         price: 149
//     },
//     {
//         id:3,
//         title: 'Family Capacity Room',
//         description: ' Have lots of in-room facilities and are designed in open-concept living area.',
//         image: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
//         price: 199
//     }
// ]

const BookingCard = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/all-rooms')
            .then(res => {
                setRooms(res.data);
            })
            .catch(error => toast.error(error.message))
    }, [])

    return (
        <section className="bookings" id='bookings'>
            <Container>
                <h5>What We Do</h5>
                <h3>Bookings We Provide</h3>
                <Row className="mt-5 justify-content-center">
                    {
                        rooms.length  > 0 ? 
                            rooms.map(room => <RoomDetails key={room._id} room={room} />)
                            : 
                            <div className="m-auto">
                                <img  className='img-fluid' src={Spinner} alt="..." />
                            </div>
                    }
                </Row>
            </Container>
        </section>
    );
};

export default BookingCard;