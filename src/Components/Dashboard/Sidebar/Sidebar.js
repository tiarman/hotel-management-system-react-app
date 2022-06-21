import { faBiking, faClipboardList, faQuoteLeft, faShoppingBag, faSignOutAlt, faTasks, faUserCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../logo.svg';
import {motion} from 'framer-motion/dist/framer-motion';
import './Sidebar.css';
import { UserContext } from '../../../App';
import { useContext } from 'react';
import SideBarSpinner from './SideBarSpinner';

const SideBar = ({ show, adminLoading }) => {
    const { isAdmin } = useContext(UserContext);
    const { panel } = useParams();
    return (
        <nav id="sidebar" className={show ? "active" : ""}>
            <div className="sidebar-header">
                <Image className='d-inline-block image' src={logo}  alt='...' />
                <h4 className='d-inline-block'>F-Hotel71</h4>
            </div>
            
            {adminLoading ? <SideBarSpinner /> :
            <ul className='list-unstyled sidebar-items'>
                    <li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                    <Link to="/dashboard/review" className={panel === "review" ? "link-active" : ""}>
                            <FontAwesomeIcon icon={faUserCircle}  /> <span>Profile</span>
                        </Link>
                    </li>
               
                    {!isAdmin?
                        <>
                            <li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                 <Link to="/dashboard/book" >
                                    <FontAwesomeIcon icon={faShoppingBag}  /> <span>Book</span>
                                </Link>
                            </li>
                            <li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                            <Link to="/dashboard/user-book-list" className={panel === "user-book-list" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faClipboardList} /> <span>Book List</span>
                                </Link>
                            </li>
                            <li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/review" className={panel === "reviews" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faQuoteLeft}/> <span>Reviews</span>
                                </Link>
                            </li>
                       
                            </>
                        :
                         <>
                        
                            <li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/add-rooms" className={panel === "add-rooms" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faBiking}/> <span>Add Rooms</span>
                                </Link>
                            </li>
                            <li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/add-admins" className={panel === "add-admins" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                                </Link>
                            </li>
                            <li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/manage-rooms" className={panel === "manage-rooms" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faTasks} /> <span>Manage Rooms</span>
                                </Link>
                            </li>
                            <li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/all-bookings" className={panel === "all-bookings" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faClipboardList} /> <span>Booking List</span>
                                </Link>
                            </li>
                            <li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/all-review" className={panel === "all-review" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faQuoteLeft}/> <span>Manage Reviews</span>
                                </Link>
                            </li>
                            <li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/all-admins" className={panel === "all-admins" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faUserCircle}/> <span>Manage Admins</span>
                                </Link>
                            </li>
                            </>
                }
                
             </ul >
        }
             <ul className="list-unstyled back-button">
             <li>
                    <Link to="/" className="back-home brn btn-info main-button">
                        <FontAwesomeIcon icon={faSignOutAlt} /> Back to Home
                    </Link>
                </li>
             </ul>
        </nav>
    );
};

export default SideBar;