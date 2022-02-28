import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Toast } from 'react-bootstrap';
import Select from 'react-select';
import { UserContext } from '../../../App';
import infoEmojis from '../../../Images/info-emoji.svg';
import StripePayment from '../StripePayment/StripePayment';
import { toast } from 'react-hot-toast';
import './Book.css';

const Book = () => {
    const { selectedRoom: { name, price } } = useContext(UserContext);
    const [show, setShow] = useState(true);
    const [rooms, setRooms] = useState([]);

    const stripePromise = loadStripe('pk_test_51J2R08JgbDUDKt4KkGLmgurCxzOjx1FJt8siCskBwCIujH6KjADsQm151HEaAGoiN0Ko4ZZYNUCzvi30UHcJZpz200o9sK9FhG');
    const options = rooms.map(room => ({ value: room.name, label: room.name, price: room.price }));
    const defaultOption = name ? { value: name, label: name, price: price } : options[0] || { value: "Couple Power Room", label: "Couple Power Room", price: 149 };
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    const bookings = rooms.find(room => room.name === selectedOption.value);

    useEffect(() => {
        axios.get('http://localhost:8000/all-rooms')
            .then(res => setRooms(res.data))
            .catch(error => toast.error(error.message))
    }, [])

    const colourStyles = {
        control: styles => (
            {
                ...styles,
                backgroundColor: '#efeff5',
                border: "1px solid #17a2b8",
                '&:hover': { border: '1px solid #17a2b8'},
                height: "calc(2em + 0.75rem + 2px)"
            }
        ),

        option: (styles, { isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isDisabled ? null : isSelected ? "#17a2b8" : isFocused ? "#16c8e48c" : null,
                color: isDisabled ? null : isSelected ? "white" : isFocused ? "black" : "black",
                cursor: isDisabled ? 'not-allowed' : 'default',
                ':active': { ...styles[':active'], backgroundColor: !isDisabled && (isSelected ? "#17a2b8" : "#16c8e48c") },
            };
        },
    };

    return (
         <section className='checkout'>
                <Container >
                    <div className="bg-white p-5 shadow checkout-package" style={{ borderRadius: "15px", maxWidth:'85rem' }}>
                        <table className="checkout-table text-center">
                            <thead>
                                <tr>
                                    <th>Package</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Select onChange={option => setSelectedOption(option)}   defaultValue={defaultOption} options={options} styles={colourStyles} />
                                    </td>
                                    <td> ৳ {price || selectedOption.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Toast className="toast-right" style={{marginLeft:'auto'}} onClose={() => setShow(false)} show={show} delay={5000} autohide>
                        <Toast.Header>
                            <img src={infoEmojis} className="rounded mr-2" alt="Info" />
                            <strong className="mr-auto">Important Info</strong>
                        </Toast.Header>
                        <Toast.Body className="text-center">
                            Use this Card Number to test the payment
                            <br />
                            <b>4242 4242 4242 4242</b>
                        </Toast.Body>
                    </Toast>

                    <div className="mt-5 bg-white shadow p-5" style={{ borderRadius: "15px", maxWidth:'85rem' }}>
                        <Elements stripe={stripePromise}>
                            <StripePayment bookings={bookings} />
                        </Elements>
                    </div>
                </Container>
        </section>

    );
};

export default Book;