import PropTypes from 'prop-types'
import { Button, Container, Form } from "react-bootstrap";

function Contacto(props) {
    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su Nombre" minLength={5} maxLength={20} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su Email" maxLength={40} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMensaje">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" label="Escriba su Mensaje" maxLength={255} rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </>
    );
}

Contacto.propTypes = {
    nombre: PropTypes.string,
    email: PropTypes.string,
    mensaje: PropTypes.string
}

export default Contacto;