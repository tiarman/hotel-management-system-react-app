import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProfilePopper from '../../Home/ProfilePopper/ProfilePopper';


const DashboardNavbar = ({ setShowSidebar, show }) => {
    const { panel } = useParams();
    return (
        <Navbar expand="lg" variant="light" bg="white">
        <Container fluid>
            <button  onClick={() => setShowSidebar(!show)} type="button" id="sidebarCollapse" className={show ? "navbar-btn active" : "navbar-btn"} >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Navbar.Brand>
                <h2
                    className="d-inline-block ml-md-3 mb-0"
                    style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                    {
                     panel === "profile" ? "profile" 
                     :panel === "book" ? "book"
                     :panel === "user-book-list" ? "Book List"
                     :panel === "reviews" ? "AddReviews"
                     :panel === "add-rooms"? "Add Rooms"
                     :panel === "add-admins" ? "Add Admins"
                     :panel === "all-bookings" ?"All Bookings" 
                     :panel === "manage-rooms" ? "Manage Rooms"
                     :panel === "all-reviews" ? "Manage Reviews"
                     :panel === "all-admins" ? "Manage Admins"
                     : ""
                    }
                </h2>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <div className="ml-auto" >
                   <ProfilePopper/>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default DashboardNavbar;