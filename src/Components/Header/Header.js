import React from 'react';
import Banner from '../Home/Banner/Banner';
import NavBar from '../Home/NavBar/NavBar';
import './Header.css'

const header = () => {
    return (
        <div>
            <NavBar />
            <Banner />
        </div>
    );
};

export default header;