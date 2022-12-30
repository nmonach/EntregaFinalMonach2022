import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import CartList from "../../components/CartList/CartList"
import './CartContainer.css'
const CartContainer = () => {
  const {cartList} = useCartContext()
      
  return (
    <div id="card" className="card cardCartContainer">
      { cartList.length !==0 
      ? 
      <>
        <CartList/>
      </>
      : 
      <>
        <h2>Carrito Vacio!</h2>
        <Link to='/' ><button className="btn btn-outline-dark btn-block">Ver Todos Los Productos</button></Link>
      </>
    }
    </div>
  )
}

export default CartContainer