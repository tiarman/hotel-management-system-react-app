import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import './UserBookList.css'
import { UserContext } from './../../../App';
import TableSpinner from './../TableSpinner/TableSpinner';
import { toast } from 'react-hot-toast';


const UserBookList = () => {
    const { loggedInUser } = useContext(UserContext);
    const [bookings, setBookings] = useState([]);

    
    const restrictPermission = id => {
        let matchedID = false;
        for (let i = 0; i < 1; i++) {
            const { _id } = bookings[i];
            if (id === _id) {
                matchedID = true;
            }if (loggedInUser  && matchedID) {
                return true;
            }
        }
        return false;
    }


    useEffect(() => {
        axios.get('http://localhost:8000/bookingsByEmail?email='+loggedInUser.email)
            .then(res => {
                setBookings(res.data);
            })
            .catch(error => toast.error(error.message))
    }, [loggedInUser.email])

    const handleDeleteService = (id) =>{
        if (restrictPermission(id)) {
            return swal("Permission restriction!", "As your first books, you don't have permission to Cancel it. But you can cancel your other books.", "info");
        }

        swal({
            title: "Are you sure?",
            text: "Are you sure you want to Cancel Your books?",
            icon: "warning",
            buttons: [true, "Yes"],
            dangerMode: true,
        }).then(wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('Deleting...Please wait!');
                const removedServices = bookings.filter(item => item._id !== id);
                axios.delete(`http://localhost:8000/cancel-booking/${id}`)
                    .then(res => {
                        toast.dismiss(loading);
                        if (res.data) {
                            setBookings(removedServices)
                            return swal("Successfully Deleted!", "Your books has been successfully deleted.", "success");
                        }
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
                    })
                    .catch(err => {
                        toast.dismiss(loading);
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                    })
                 }
            });   
    }

    return (
          <Container>
                <div className="shadow p-5 bg-white" style={{ borderRadius: "15px" }}>
                    {
                        bookings.length >0  ? 
                        <Table className='table-style' hover responsive >
                            <thead className="bg-light ">
                                <tr>
                                    <th>Sl. No</th>
                                    <th>Name</th>
                                    <th>Bookings</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                                {
                                    bookings.map((books, index) => {
                                        return (
                                            <tbody key={books._id} style={{ fontWeight: "500" }}>
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{books.name}</td>
                                                    <td>{books.booking.name}</td>
                                                    <td>{books.time}</td>
                                                    <td >
                                                        <span className={books.status.toLowerCase()}>{books.status}</span>
                                                    </td>
                                                    <td>
                                                        <Button variant="outline-danger" className="p-1 ml-3 mb-0"onClick={()=> handleDeleteService(books._id)}>
                                                            <FontAwesomeIcon icon={faTrash} className="mx-1" />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody> ) })
                                }
                        </Table> : <TableSpinner />
                    }
                 </div>>
          </Container>
    );
};

export default UserBookList;