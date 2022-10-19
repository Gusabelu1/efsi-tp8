import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Imagen</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='me-2'>
                        <a href="#login">INICIO</a>
                    </Navbar.Text>
                    <Navbar.Text className='me-2'>
                        <a href="#login">QUIENES SOMOS</a>
                    </Navbar.Text>
                    <Navbar.Text className='me-2'>
                        <a href="#login">PRODUCTOS</a>
                    </Navbar.Text>
                    <Navbar.Text className='me-2'>
                        <a href="#login">CONTACTO</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar;