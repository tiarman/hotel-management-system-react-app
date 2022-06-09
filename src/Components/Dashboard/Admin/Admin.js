import React, { useContext, useState } from 'react';
import './Admin.css'
import { useForm } from 'react-hook-form';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AddService from '../AddService/AddService';
import ClientList from '../ClientList/ClientList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import ManageTestimonials from '../ManageTestimonials/ManageTestimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import { UserContext } from '../../../App';

const Admin = () => {

    const [admin, setItem] = useState(localStorage.getItem('admin'));
    const testAdmin = 'admin.test@gmail.com';

    const loggedInUser = useContext(UserContext)[0];

    const { register, handleSubmit, errors } = useForm();


    const onSubmit = data => {
        fetch(`http://localhost:8000/admin?email=${data.email}`)
            .then(res => res.json())
            .then(result => {
                if (result.email === loggedInUser.email && result.secret_key === data.secret_key) {
                    setItem(result.email)
                    localStorage.setItem('admin', result.email);
                } else if (result.email === testAdmin && result.secret_key === data.secret_key) {
                    setItem(result.email)
                    localStorage.setItem('admin', result.email);
                } else if (result.secret_key !== data.secret_key) {
                    swal('Error', 'Wrong Key', 'error');
                } else if (!result.email) {
                    swal('Warning', 'You are not an admin', 'warning');
                } else {
                    swal('Error', 'Please login with this email', 'error');
                }
            })
            .catch(err => {
                if (err) {
                    swal('Error', err.message + ' Network Error', 'error');
                }
            })
    };

    const testAdminHandler = () => {
        document.querySelector('.test-admin-details').style.display = 'none';
    }

    if (admin !== loggedInUser.email && admin !== testAdmin) {
        return (
            <div className="verify-admin-box">
                <div>
                    <h1 className="text-danger">Verify, you are an admin</h1>
                    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email"><h6>Your Email</h6></label>
                            <input className="input" type="email" name="email" placeholder="example@gmail.com" ref={register({ required: true })} id="email" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="secret_key"><h6>Your Secret Key</h6></label>
                            <input className="input" type="password" name="secret_key" placeholder="Secret key" ref={register({ required: true })} id="secret_key" />
                            {errors.secret_key && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="text-right">
                            <input className="verify-btn btn-brand" type="submit" value="Verify" />
                        </div>
                    </form>

                    <Link to='/' className="back-to-home">
                        <span><FontAwesomeIcon id='show-confirm-password-icon' icon={faTimes} /></span>
                    </Link>
                </div>
                <div className="test-admin-details">
                    <h4>For test admin panel</h4>
                    <span><b>Email:</b> admin.test@gmail.com</span>
                    <br />
                    <span><b>Secret key:</b> admin1234</span>
                    <span onClick={testAdminHandler} className="cancel-details"><FontAwesomeIcon id='show-confirm-password-icon' icon={faTimes} /></span>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="">

                <Sidebar></Sidebar>

                <div className="content">
                    <Switch>
                        <Route path="/admin/make-admin">
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path="/admin/client-list">
                            <ClientList></ClientList>
                        </Route>
                        <Route path="/admin/add-service">
                            <AddService></AddService>
                        </Route>
                        <Route path="/admin/manage-service">
                            <ManageService admin={admin} testAdmin={testAdmin}></ManageService>
                        </Route>
                        <Route path="/admin/manage-testimonials">
                            <ManageTestimonials admin={admin} testAdmin={testAdmin}></ManageTestimonials>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }

};

export default Admin;