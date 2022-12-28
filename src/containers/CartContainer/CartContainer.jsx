import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './CartContainer.css'
const CartContainer = () => {
  const {cartList, vaciarCarrito, precioTotal, deleteItem} = useCartContext()
  //armar la orden
    //     Usa tu tus ítems del cart para modelar tu orden al siguiente formato:
    // { buyer: { name, phone, email }, items: [{id, title, price}], total  }, si todavía no creaste el formulario de compra puedes usar un objeto hardcodeado de tipo { name, phone, email }. 
  const addOrder = (e)=>{
    e.preventDefault()
    //armar formulario
    const order = {}
    order.buyer = {name: 'Nicolas', phone: '1135757947', email:'nico.monach@hotmail.com'}
    order.price = precioTotal()
    order.items = cartList.map(({id, price, model}) => ({id, price, model}))
    // console.log(order)
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    
    //muchas ordenes

    // productos.forEach(async prod => {
    //   await addDoc()      
    // });


    // para generar una coleccion (agregar una orden de compra) de aca tomar el id y mostrarlo cuando aprete comprar
    // addDoc(queryCollection, order)
    // .then(resp => console.log(resp))
    // .catch(err => console.log(err))
    // .finally(()=>vaciarCarrito())

//update (actualizar) actualizar stock del producto
    // const queryDoc = doc(db, 'productos', '8g4IIK151CyQJn9SCNyx') // productos es la colleccion
    // updateDoc(queryDoc, {
    //   stock: 10
    // })
//borrado logico
    // const queryDoc = doc(db, 'productos', '8g4IIK151CyQJn9SCNyx') // productos es la colleccion
    // updateDoc(queryDoc, {
    //   isActive: false
    // })
    console.log("se actualizo");
  }

  const handleOnChange = (e)=>{
    console.log('nombre del input: '(e.target.name))
    console.log('valor del input: '(e.target.value))
  }
  //crear componente CartList
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
                                <button className="btn btn-success btnContBuy" onClick={addOrder}><Link to='/form'>Terminar Compra</Link></button>
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