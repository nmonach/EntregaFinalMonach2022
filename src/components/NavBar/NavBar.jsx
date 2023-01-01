import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Categories from '../Categories/Categories';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import './NavBar.css'
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Link to={'/'}><img id='logoMitica'src="/logoMitica.png" alt="logo" /></Link>
        <Navbar.Brand to="/">Mitica Amapola</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Categories/>
            <SocialNetworks />
            <NavLink className='navBarLinks' to="/cart"><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;