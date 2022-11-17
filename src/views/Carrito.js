import React, { useContext } from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import carritoContext from "../contexts/carritoContext";
import Loading from "../components/Loading";

function Carrito() {
    const { carrito, setCarrito } = useContext(carritoContext);
    console.log(carrito)

    return (
        <Container>
            <Row>
            { 
                carrito && carrito ?
                    carrito.map(function(item) {
                        return (
                            <Col key={item.prop.id} md={3}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={item.prop.images[0]} style={{maxWidth: '100%', maxHeight: 150, objectFit: 'contain'}}/>
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{item.prop.title}</Card.Title>
                                        <Card.Text>{item.prop.description}</Card.Text>
                                        <div className="mt-auto">
                                            <Button 
                                                className="w-100" 
                                                variant="danger"
                                                onClick={() => {
                                                    const aux = carrito.filter(object => {
                                                        return object.prop.id !== item.prop.id;
                                                    });
                                                    setCarrito(aux)
                                                    console.log(carrito)
                                                }}
                                            >Eliminar</Button>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Cantidad {item.cant} | Total ${(item.prop.price * item.cant)}</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })
                :
                <Loading />
            }
            </Row>
        </Container>
    );
}

export default Carrito;