import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
  const {cartList, vaciarCarrito, precioTotal, deleteItem} = useCartContext()
  console.log(cartList)
  return (
    <div>
      { cartList.length !==0 ? 
      <>
        {cartList.map(prod=> <div key={prod.id}>
                              <div className="w-50">
                                <img src={prod.img} alt="" className="w-25"/>
                              </div>
                            Nombre: {prod.model} - Categoria: {prod.category} - Precio: {prod.price} - Cantidad: {prod.cant} 
                            <button className="btn btn-danger" onClick={()=>deleteItem(prod.id)}>X</button>

                              </div> )
      }
                            <h4>El precio total es: {precioTotal()} </h4>
                            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>

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