import React, { useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import productosContext from '../contexts/productosContext.js';
import CustomNavbar from "./CustomNavbar.js";
import Footer from "./Footer.js";

function Producto() {
    const { productos } = useContext(productosContext);
    const { id } = useParams();
    const producto = productos && productos[id - 1];
    console.log(producto)

    return (
        <>
            <CustomNavbar />
            { producto && (
                <Container className="d-flex justify-content-center mt-5">
                    <Card>
                        <Card.Img variant="top" src={producto.images[0]} style={{maxWidth: '100%', maxHeight: 150, objectFit: 'contain'}}/>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{producto.brand} {producto.title}</Card.Title>
                            <Card.Text>{producto.description}</Card.Text>
                            <Card.Text>US$ {producto.price}, Stock: {producto.stock} Restantes</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Rating {producto.rating}/5</small>
                        </Card.Footer>
                    </Card>
                </Container>
            )}
            <Footer />
        </>
    );
}

export default Producto;