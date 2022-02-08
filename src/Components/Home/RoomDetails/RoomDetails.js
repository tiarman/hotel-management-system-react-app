import { Button, Card, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './RoomDetails.css'

const RoomDetails = ({ room }) => {
    const { name, image, description, price } = room;
    return (
        <Col md={4} className="mb-5 text-center room-details">
            <Fade bottom duration={2500} distance="40px">
                <Card
                    className="border-0 py-4"
                    style={{ maxWidth: '25rem' }}>
                    <Card.Img variant="top" height="100" src={image} style={{ objectFit: "contain" }} />
                    <Card.Body className="pt-0">
                        <Card.Title as="h4" className="my-4">{name}</Card.Title>
                        <Card.Text className="text-muted">{description}</Card.Text>
                        <div>
                            <p>${price}</p>
                            <Button
                                className="btn-main"
                                >
                                Book Now
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Fade>
        </Col>
    );
};

export default RoomDetails;