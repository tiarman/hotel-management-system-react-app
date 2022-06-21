import axios from 'axios';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import { toast } from 'react-hot-toast';

const AddAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const loading = toast.loading('Adding...Please wait!');
        axios.post('http://localhost:8000/add-admin', data)
            .then(res => {
                reset()
                toast.dismiss(loading);
                if (res.data) {
                    return swal("Successfully Added",  `You Successfully Added  ${data}  as an admin.`, "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
            });
 }

    return (
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)} className='admin-group'>
                    <div className="p-5 mt-5 bg-white d-flex justify-content-center shadow" style={{ borderRadius: "15px"}}>
                        <div className="py-md-4">
                            <Form.Label>Email</Form.Label>
                            <Form.Row>
                                <Form.Group as={Col} xs="auto" style={{ width: '25rem' }} >
                                    <Form.Control type="text"{...register("email", { required: true })}  placeholder="Admin's Email Address" />
                                </Form.Group>
                                <Form.Group as={Col} xs="auto">
                                    <Button type="submit"  variant='info' className='main-button' >Add Admin</Button>
                                </Form.Group>
                            </Form.Row>
                        </div>
                    </div>
                </Form>
            </Container>
    );
};

export default AddAdmin;