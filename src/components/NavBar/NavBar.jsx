import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Link to={'/'}><a href='/'><img id='logoMitica'src="/logoMitica.png" alt="logo" /></a></Link>
        <Navbar.Brand to="/">Mitica Amapola</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink className="navBarLinks" to="/category/Velas de Soja">Velas de Soja</NavLink>
            <NavLink className="navBarLinks" to="/category/Lamparas de Sal">Lamparas de Sal</NavLink>
            <NavLink className="navBarLinks" to="/category/Difusores">Difusores</NavLink>
            <NavLink className='navBarLinks' to="/cart"><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;