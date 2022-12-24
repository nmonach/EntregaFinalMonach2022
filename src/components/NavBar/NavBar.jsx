import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
function NavBar() {
  const {cantidadTotal} = useCartContext()
  let cantInCart = <i>{cantidadTotal()!==0 && cantidadTotal()} Productos en el Carrito</i>
  // if (cantidadTotal()!==0) {
  //   cantInCart = style='visible'
    
  // }else {
  //   cantInCart = style='hidden'
  // }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <a href='/'><img id='logoMitica'src="/logoMitica.png" alt="logo" /></a>
        <Navbar.Brand to="/">Mitica Amapola</Navbar.Brand>
        {cantInCart}
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