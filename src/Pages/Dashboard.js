import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import DashboardNavbar from '../Components/Dashboard/DashboardNavbar/DashboardNavbar';
import Profile from './../Components/Dashboard/Profile/Profile';
import Sidebar from './../Components/Dashboard/Sidebar/Sidebar';
import './Dashboard.css';
import AddRooms from './../Components/Dashboard/Added Services/AddRooms/AddRooms';
import ManageRooms from '../Components/Dashboard/ManageServices/ManageRooms/ManageRooms';
import AddAdmin from '../Components/Dashboard/AddAdmin/AddAdmin';
import Book from './../Components/Dashboard/Book/Book';
import { UserContext } from './../App';
import BookingList from './../Components/Dashboard/BookingList/BookingList';
import UserBookList from './../Components/Dashboard/UserBookList/UserBookList';
import ManageAdmin from '../Components/Dashboard/ManageAdmin/ManageAdmin';
import ReviewLoader from './../Components/Dashboard/AddReview/ReviewLoader';
import Review, { EditReview } from '../Components/Dashboard/AddReview/Review';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AddReview from './../Components/Dashboard/AddReview/AddReview';




const Dashboard = () => {
    const { loggedInUser: { email }, isAdmin } = useContext(UserContext);
    const { panel } = useParams();
    const history = useHistory();
    const [showSidebar, setShowSidebar] = useState(false);
    const [loadingReview, setLoadingReview] = useState(true);
    const [review, setReview] = useState({});
    const [reviewEdit, setReviewEdit] = useState(false);
    // const { isAdmin } = useContext(UserContext);
    // const {panel}=useParams()
    // const [showSidebar, setShowSidebar] = useState(false);



    useEffect(() => {
        axios.get(`http://localhost:8000/reviews?email=${email}`)
            .then(res => {
                setReview(res.data);
                setLoadingReview(false);
            })
            .catch(error => toast.error(error.message))
    }, [email, reviewEdit, review])

    return (
        <main className="dashboard-container">
          <Sidebar show={showSidebar} />
            <div  id="content">
               <DashboardNavbar setShowSidebar={setShowSidebar} show={showSidebar}  />
                {
                    panel === "profile" ?  <Profile />
                    :panel === 'book' ? <Book />
                    :panel === 'add-rooms' && isAdmin ? <AddRooms />
                    :panel === "manage-rooms" && isAdmin ? <ManageRooms />
                    :panel === "add-admins"  && isAdmin ? <AddAdmin />
                    :panel === "all-bookings" && isAdmin ? <BookingList />
                    :panel === "user-book-list" ? <UserBookList />
                    :panel === "all-admins" && isAdmin  ? <ManageAdmin />
                    : panel === "review" && loadingReview ? <ReviewLoader />
                    : panel === "review" && review.name && !reviewEdit ? <Review review={review} setEdit={setReviewEdit} />
                    : panel === "review" && reviewEdit ? <EditReview review={review} edit={reviewEdit} setEdit={setReviewEdit} />
                    : panel === "review" ? <AddReview setReview={setReview} />
                    // :panel === "reviews" ? <AddReview />
                    // :panel === "add-services" && isAdmin ?  <AddServices />
                    // :panel === "all-reviews" && isAdmin  ? <AllReview />
                    
                    : null
                }
            </div>
        </main>
    );
};

export default Dashboard;