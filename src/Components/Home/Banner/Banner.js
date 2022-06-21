import React from 'react';
import './Banner.css';
import banner from '../../../Images/11.jpg';
import discount from '../../../Images/discount.png'
import discount2 from '../../../Images/discount2.png';

const Banner = () => {
    return (
        
            <div class="bannerAlign">
            <img src={banner} alt="Snow" style={{ width: "100%", height: "550px" }} />
            <div class="top-right">
                <img style={{ width: "250px", height: "160px", borderRadius: "0px 50px 0px 50px", position: "relative"  }} src={discount} alt=""/>
                <img style={{ width: "250px", height: "160px", borderRadius: "0px 50px 0px 50px", marginBottom: "300px", marginLeft: "-350px", position: "relative"  }} src={discount2} alt=""/>
            </div>

            <div class="centered">
            <h2 class="text-danger" style={{ fontSize: "50px", marginLeft: "125px", fontWeight: "700" }}>WELCOME TO</h2>
            <h1 style={{marginLeft: "30px",fontWeight: "600" }} class="font-family1">F-HOTEL 71</h1>
            <p style={{fontWeight: "600" }}>If you are looking for a holiday destination in Asia, then Bangladesh is the place to go, offering something for everyone. Agoda.com offers the best prices for hotels in Bangladesh.</p>
            <br/>
            <button style={{ fontSize: "20px", marginLeft: "-95px" }} className='btn btn-danger' type="">Book Now</button>
            </div>
        </div>
    );
};

export default Banner;