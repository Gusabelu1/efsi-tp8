import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
    return (
        <Navbar className='mb-3'>
            <Container>
                <Navbar.Brand to="/"><img width='128' alt='Logo' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0840e59-db43-4681-ae7b-31a04dc4bc55/d7eqdvw-4e97ac92-e4b9-4498-9655-e4d612eb478b.png/v1/fill/w_1600,h_900,strp/random_logo_by_criticl_d7eqdvw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzA4NDBlNTktZGI0My00NjgxLWFlN2ItMzFhMDRkYzRiYzU1XC9kN2VxZHZ3LTRlOTdhYzkyLWU0YjktNDQ5OC05NjU1LWU0ZDYxMmViNDc4Yi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X991O1jF5lTNZbbEoHEfoo6nlHEihBMHMIm5-uBCXcU'></img></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='me-2'>
                        <Link to="/" className='nav-link'>INICIO</Link>
                    </Navbar.Text>
                    <Navbar.Text className='me-2'>
                        <Link to="/about" className='nav-link'>QUIENES SOMOS</Link>
                    </Navbar.Text>
                    <Navbar.Text className='me-2'>
                        <Link to="/productos" className='nav-link'>PRODUCTOS</Link>
                    </Navbar.Text>
                    <Navbar.Text className='me-2'>
                        <Link to="/contacto" className='nav-link'>CONTACTO</Link>
                    </Navbar.Text>
                    <Navbar.Text className='me-2'>
                        <Link to="/cart" className='nav-link'>CARRITO</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar;