import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './CartContainer.css'
const CartContainer = () => {
  const {cartList, vaciarCarrito, precioTotal, deleteItem} = useCartContext()
  console.log(cartList)
  return (
    <div id="card" className="card cardCartContainer">
      { cartList.length !==0 ? 
      <>
        {cartList.map(prod=>  <div key={prod.id}>
                                <div className="card-header">
                                  <img src={prod.img} alt="" className="w-25"/>
                                </div>
                                <div className="card-body">
                                  Nombre: {prod.model} - Categoria: {prod.category} - Precio: ${prod.price} - Cantidad: {prod.cant} 
                                  <button className="btn btn-danger" onClick={()=>deleteItem(prod.id)}>X</button>
                                </div>
                              </div> )
      }
                              <div className="card-footer">
                                <h4>Su compra es: ${precioTotal()} </h4>
                                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                                <button className="btn btn-success btnContBuy"><Link to='/form'>Continuar Compra</Link></button>
                              </div>
      </>
      : 
      <>
        <h2>Carrito Vacio!</h2>
        <a href="/"><button className="btn btn-outline-dark btn-block"><Link to='/' >Ver Todos Los Productos</Link></button></a>
      </>
}
    </div>
  )
}

export default CartContainer