import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
const CartList = () => {
    const {cartList, totalPrice, cleanCart, deleteItem} = useCartContext()
    
  return (
    <div id="card" className="card cardCartContainer">
        {cartList.map(prod=>  <div key={prod.id}>
                                <div className=" card-header">
                                  <img id='imgCart' src={prod.img} alt="" className="w-25"/>
                                </div>
                                <div className="card-body">
                                  Nombre: {prod.model} - Categoria: {prod.category} - Precio: ${prod.price} - Cantidad: {prod.cant} 
                                  <button className="btn btn-danger x" onClick={()=>deleteItem(prod.id)}>X</button>
                                </div>
                              </div> )
        }
                              <div className="card-footer">
                                <h4>Su compra es: ${totalPrice()} </h4>
                                <button className="btn btn-dark btn-block btnContBuy"><Link to='/'>Seguir Comprando</Link></button>
                                <button className="btn btn-danger btnContBuy" onClick={cleanCart}>Vaciar Carrito</button>
                                <button className="btn btn-success btnContBuy"><Link to='/form'>Terminar Compra</Link></button>
                              </div>
    </div>
  )
}


export default CartList