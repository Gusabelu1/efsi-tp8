import React from "react";
import { Container, Spinner } from 'react-bootstrap';

function Loading() {
    return (
        <Container className='text-center mt-3'>
            <Spinner animation="grow" />
            <p>Cargando Productos...</p>
        </Container>
    );
}

export default Loading;