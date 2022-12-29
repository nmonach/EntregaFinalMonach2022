import { useCartContext } from '../../context/CartContext'
import './OrderNumber.css'

const OrderNumber = () => {
  const {showOrder} = useCartContext()  
  return (
    <div>
      Su orden de compra es: {showOrder}
    </div>
  )
}

export default OrderNumber