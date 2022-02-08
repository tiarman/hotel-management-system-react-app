import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import Addservices from '../Components/Dashboard/AddServices/Addservices';
import DashboardNavbar from '../Components/Dashboard/DashboardNavbar/DashboardNavbar';
import Profile from './../Components/Dashboard/Profile/Profile';
import Sidebar from './../Components/Dashboard/Sidebar/Sidebar';
import './Dashboard.css';
import AddRooms from './../Components/Dashboard/Added Services/AddRooms/AddRooms';




const Dashboard = () => {
    const {panel}=useParams()
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <main className="dashboard-container">
          <Sidebar show={showSidebar} />
            <div  id="content">
               <DashboardNavbar setShowSidebar={setShowSidebar} show={showSidebar}  />
                {
                    panel === "profile" ?  <Profile />
                    :panel === 'book' ? <Addservices />
                    :panel === 'add-rooms' ? <AddRooms />
                    // :panel === "book-list" ? <BookList />
                    // :panel === "reviews" ? <Review />
                    // :panel === "add-services" && isAdmin ?  <AddServices />
                    // :panel === "add-admins" && isAdmin  ? <AddAdmin />
                    // :panel === "all-orders" && isAdmin  ? <OrderList />
                    // :panel === "manage-services" && isAdmin  ? <ManageService />
                    // :panel === "all-reviews" && isAdmin  ? <AllReview />
                    // :panel === "all-admins" && isAdmin  ? <AllAdmin />
                    : null
                }
            </div>
        </main>
    );
};

export default Dashboard;