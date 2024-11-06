import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo1 from '../assets/imgs/icones/iconeLeandroP.png'

export default function Cabecalho(props) {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand><img src={Logo1} style={{width: '3.5rem', height: '3rem'}} alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-center">
                        <Nav.Link as={Link} to="/quemSouEu">Quem sou eu</Nav.Link>
                        <Nav.Link as={Link} to="/habilidades">Habilidades</Nav.Link>
                        <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}