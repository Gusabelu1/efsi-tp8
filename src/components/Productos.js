import React, { useContext } from "react";
import productosContext from '../contexts/productosContext.js';
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Productos() {
    const { productos } = useContext(productosContext);

    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
            {
                productos.map(function(item) {
                    return (
                        <Col key={item.id}>
                            <Card className="h-100">
                                <Card.Img variant="top" src={item.images[0]} style={{maxWidth: '100%', maxHeight: 150, objectFit: 'contain'}}/>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Link to={`/producto/${item.id}`} className="mt-auto"><Button className="w-100">Ver detalles</Button></Link>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Rating {item.rating}/5</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })
            }
            </Row>
        </Container>
    );
}

export default Productos;