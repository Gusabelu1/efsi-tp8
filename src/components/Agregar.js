import React, { useContext, useState } from "react";
import carritoContext from "../contexts/carritoContext";
import { Button, Container, Modal } from "react-bootstrap";

function Agregar(props) {
    const [cant, setCant] = useState(1)
    const { carrito, setCarrito } = useContext(carritoContext);
    const prop = props.props

    return (
        prop && (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {prop.brand}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className="text-center">
                        <img variant="top" src={prop.images[0]} style={{maxWidth: '100%', maxHeight: 150, objectFit: 'contain'}} alt="Product" />
                        <p>{prop.description}</p>
                        <Container className="mt-3">
                            <Button
                                style={{width: 40}}
                                onClick={() => {
                                    if (cant > 1) {
                                        setCant(cant - 1)
                                    } else {
                                        
                                    }             
                                }}
                            >
                                -
                            </Button>
                            <span className="ms-3 me-3">{cant}</span>
                            <Button
                                style={{width: 40}}
                                onClick={() => {
                                    if (cant < prop.stock) {
                                        setCant(cant + 1)
                                    } else {
                                        
                                    }             
                                }}
                            >
                                +
                            </Button>
                            <br></br>
                            <Button className="mt-2" onClick={() => {setCarrito({prop, cant}); setCant(0); console.log(carrito)}}>Añadir al Carro</Button>
                            <p>${prop.price} c/u | ${prop.price * cant}</p>
                        </Container>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    );
}

export default Agregar;