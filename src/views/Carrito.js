import React, { useContext } from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import carritoContext from "../contexts/carritoContext";
import Loading from "../components/Loading";

function Carrito() {
    const { carrito, setCarrito } = useContext(carritoContext);
    console.log(carrito && carrito)

    return (
        <Container>
            { 
                carrito && carrito ?
                    carrito.map(function(item) {
                        return (
                            <Col key={item.id}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={item.images[0]} style={{maxWidth: '100%', maxHeight: 150, objectFit: 'contain'}}/>
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Row className="mt-auto">
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Rating {item.rating}/5 | ${item.price} c/u</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })
                :
                    <Loading />
            }
        </Container>
    );
}

export default Carrito;