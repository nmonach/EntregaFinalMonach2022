import { useCartContext } from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {

  const {totalProducts} = useCartContext()
  return (
    <div>
        <i>
          <img src="/carrito.png" alt="" />{totalProducts()!==0 && totalProducts()}
        </i>

    </div>
  )
}

export default CartWidget