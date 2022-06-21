import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../Images/hotellogo1.png';
import ProfilePopper from '../ProfilePopper/ProfilePopper';
import { UserContext } from './../../../App';

const NavBar = () => {
  const { loggedInUser: { isSignedIn } } = useContext(UserContext);
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed , setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  }, []);

    return (
          <Navbar expand="lg" className={ (isSticky || isCollapsed) ? "slide in py-2 show shadow-sm navbar navbar-expand-md bg-white navbar-light   fixed-top" : "slide out show navbar navbar-expand-nd navbar-light py-2 fixed-top "}>
            <Container >
                <Navbar.Brand smooth as={HashLink} to="#home"  > <Image style={{height:'33px', width:'43px'}} src={logo} /> <strong>F-Hotel 71</strong></Navbar.Brand>
                <Navbar.Toggle onClick={  () => setCollapsed(!isCollapsed ? 'show' : null )} aria-controls="basic-navbar-nav"  style={{background:'#10bad4'}} />
                  <Navbar.Collapse id="navbar-nav" >
                    <Nav className="ml-auto text-center">
                      <Nav.Link  smooth as={HashLink} to="#home"   className="mr-3"><strong>Home</strong></Nav.Link>
                      {/* <Nav.Link  smooth as={HashLink} to="#about" className="mr-3"><strong>About</strong></Nav.Link> */}
                      <Nav.Link  smooth as={HashLink} to="#bookings" className="mr-3"><strong>Bookings</strong></Nav.Link>
                      <Nav.Link  smooth as={HashLink} to="#services" className="mr-3"><strong>Services</strong></Nav.Link>
                      <Nav.Link smooth as={HashLink} to='#reviews' className="mr-3"><strong>Reviews</strong></Nav.Link>
                      <Nav.Link  smooth as={HashLink} to="#contact"  className="mr-3"><strong>Contact</strong></Nav.Link>
                      <Nav.Link   as={Link} to="/dashboard/profile"  className="mr-3"><strong>Dashboard</strong></Nav.Link>
                        {
                           isSignedIn ?  <ProfilePopper /> : <Button as={Link} to='/login' variant="info" className='main-button'>Login</Button>
                        }
                    </Nav>
                  </Navbar.Collapse>
             </Container>
          </Navbar>
    );
};

export default NavBar;