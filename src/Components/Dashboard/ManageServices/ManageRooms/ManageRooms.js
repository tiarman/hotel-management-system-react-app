import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import LoadingSpinner from '../../../../Pages/Shared/LoadingSpinner/LoadingSpinner';
import EditServiceModal from './EditServiceModal';


const ManageRooms = ({admin, testAdmin}) => {
    const [services, setServices] = useState(null);
    const [editedService, setEditedService] = useState({});
    const [isEditedSuccess, setIsEditedSuccess] = useState(false);
    // setItem = 'test@admin.com';

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    useEffect(() => {
        fetch('http://localhost:8000/all-rooms')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => {
                if (err) {
                    swal(err.message, {
                        icon: "error",
                    })
                }
            })
    }, [isEditedSuccess])

    const handleDeleteService = (id) => {

        const mainService = services.slice(0, 3);
        const isAccess = mainService.find(service => service._id === id);
        
        if (admin === testAdmin && isAccess ) {
            swal("As a test admin you don't deleted this service", {
                icon: "warning",
            })
        } else {

            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:8000/delete-rooms/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result) {
                                swal("Service has been deleted!", {
                                    icon: "success",
                                })
                                    .then(() => {
                                        document.getElementById(`${id}`).style.display = 'none';
                                    })
                            }
                        })
                }
            });
        }

    };

    const handleEditService = (service) => {
        swal({
            title: "Are you sure?",
            text: "To Edit This Service!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willEdit) => {
                if (willEdit) {
                    setEditedService(service)
                    openModal()
                }
            });

    };

    return (
        <div className="manage-service">
            <div className="content-items padding-5">

                {
                    services?.length > 0 &&
                    <div className="bg-white p-3 border-radius-10">
                        <table className="table table-borderless text-center">
                            <thead className="bg-light">
                                <tr>
                                    <th className="text-secondary" scope="col">Sr No</th>
                                    <th className="text-secondary" scope="col">Room Name</th>
                                    <th className="text-secondary" scope="col">Room Price</th>
                                    <th className="text-secondary" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map((service, index) =>
                                        <tr key={service._id} id={`${service._id}`}>
                                            <td>{index + 1}</td>
                                            <td>{service.name}</td>
                                            <td>{service.price}</td>
                                            <td>
                                                <span className="delete-btn mr-3" onClick={() => handleDeleteService(service._id)}><FontAwesomeIcon icon={faTrashAlt} /></span>
                                                <span className="edit-btn" onClick={() => handleEditService(service)}><FontAwesomeIcon icon={faEdit} /></span>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                }

                {
                    !services && <LoadingSpinner />
                }

                {
                    services?.length === 0 && <h2 style={{ color: 'red', lineHeight : 10, padding: 10 , textAlign : 'center'}}>No Rooms Here</h2>
                }

                <EditServiceModal modalIsOpen={modalIsOpen} closeModal={closeModal} isEditedSuccess={isEditedSuccess} setIsEditedSuccess={setIsEditedSuccess} service={editedService}></EditServiceModal>
            </div>
        </div>
    );
};

export default ManageRooms;