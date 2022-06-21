import React from 'react';
import { Image } from 'react-bootstrap';
import '../Services/Services.css';

const SingleMember = ({service}) => {
    return (
        <div className='team-member'>
            <Image style={{height:'300px'}} src={service.img} alt="..." />
            <h5>{service.name}</h5>
            <button className='btn btn-success' type="">Get Services</button>
        </div>
    );
};

export default SingleMember;