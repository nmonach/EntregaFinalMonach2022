import { useCartContext } from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {

  const {cantidadTotal} = useCartContext()
  return (
    <div>
        <i>
          <img src="../src/img/carrito.png" alt="" />{cantidadTotal()!==0 && cantidadTotal()}
        </i>

    </div>
  )
}

export default CartWidget