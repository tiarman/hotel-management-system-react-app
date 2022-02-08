import Fade from 'react-reveal/Fade';
import './ServicesDetails.css'


const ServicesDetails = ({ room }) => {
    const { title,imgs, description } = room;
    return (
        <div className='services'>
            <Fade bottom duration={2500} distance="40px">
                <div className='row service-details'>
                    <div className='col-md-1'>
                    <img style={{ width: "50px", height: "50px", marginTop: "10px"  }} src={imgs} alt=""/>
                    </div>
                    <div className='col-md-10 ml-3'>
                    <a href="/">
                        
                        <h5>{title}</h5>
                        <p> {description} </p>
                        </a>
                    </div>
                    
                </div>
            </Fade>
        </div>
    );
};

export default ServicesDetails;