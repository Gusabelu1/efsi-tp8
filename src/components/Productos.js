import React, { useContext, useState } from "react";
import Loading from '../components/Loading';
import Agregar from "./Agregar";
import productosContext from '../contexts/productosContext';
import carritoContext from "../contexts/carritoContext";
import showModalContext from "../contexts/showModalContext";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Productos({ cantItems }) {
    const { productos } = useContext(productosContext);
    const { showModal, setShowModal } = useContext(showModalContext)
    const { carrito, setCarrito } = useContext(carritoContext);
    const [selectedProduct, setSelectedProduct] = useState()

    if (cantItems > 0) {
        productos && (productos.length = cantItems)
    }

    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
            { 
                productos && productos ?
                    productos.map(function(item) {
                        return (
                            <Col key={item.id}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={item.images[0]} style={{maxWidth: '100%', maxHeight: 150, objectFit: 'contain'}}/>
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Row className="mt-auto">
                                            <Col md="8">
                                                <Link to={`/producto/${item.id}`}><Button className="w-100">Ver detalles</Button></Link>
                                            </Col>
                                            <Col>
                                                <Button className="w-100" onClick={() => {setShowModal(true); setSelectedProduct(item)}} disabled={carrito.some(object => object.prop.id === item.id)}>Agregar</Button>
                                            </Col>
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
            </Row>
            <Agregar 
                show={showModal}
                onHide={() => setShowModal(false)}
                props={selectedProduct}
            />
        </Container>
    );
}

export default Productos;