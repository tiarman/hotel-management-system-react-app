import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import TableSpinner from './../TableSpinner/TableSpinner';
import { toast } from 'react-hot-toast';


const BookingList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/all-bookings`)
            .then(res => {
                setBooks(res.data);
            })
            .catch(error => toast.error(error.message))
    }, [])

    const handleStatusChange = (id, status) => {
        let modifiedOrders = [];
        books.forEach(book => {
            if (book._id === id) {
                book.status = status;
            }
            modifiedOrders.push(book)
        })
        setBooks(modifiedOrders);

        const modifiedStatus = { id, status }
        const loading = toast.loading('Updating....Please wait!')

        axios.patch('http://localhost:8000/update-book-status', modifiedStatus)
            .then(res => {
                toast.dismiss(loading);
                if(res.data){
                    toast.success(`Set to ${status}`)
                }
            })
            .catch(error => toast.error(error.message));
    }
    return (
        <Container>
            <div className="shadow p-5 bg-white" style={{ borderRadius: "15px" }}>
            {
                books.length > 0 ? 
             <Table className='table-style' hover responsive >
                    <thead className="bg-light">
                        <tr>
                            <th>Sl. No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Bookings</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        books.map((book, index) => {
                            return (
                                <tbody key={book._id} style={{ fontWeight: "500" }}>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{book.name}</td>
                                        <td>{book.email}</td>
                                        <td>{book.booking.name}</td>
                                        <td>{book.paymentMethod}</td>
                                        <td>
                                            <select className={book.status === "Pending" ? "btn btn-danger": book.status === "Done" ? "btn btn-success" : "btn btn-warning"}  defaultValue={book.status} onChange={e => handleStatusChange(book._id, e.target.value)}>
                                                <option className="bg-white text-muted">Pending</option>
                                                {/* <option className="bg-white text-muted">On going</option> */}
                                                <option className="bg-white text-muted">Done</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>)})
                    }
                </Table> :  <TableSpinner />
           }
            </div>
        </Container>
        
    );
};

export default BookingList;