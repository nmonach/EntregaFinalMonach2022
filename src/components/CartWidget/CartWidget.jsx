import './CartWidget.css'

const CartWidget = ({count = ''}) => {
  return (
    <div>
        <i>
          <img src="../src/img/carrito.png" alt="" />
          <p>5{count}</p>
        </i>

    </div>
  )
}

export default CartWidget