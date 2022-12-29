import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import OrderNumber from '../OrderNumber/OrderNumber'
import './Form.css'
//validar el formulario (que no esten vacios, validar el mail) mostrar el id de la compra en <OrderNumber/>
const Form = () => {
  const {addOrder, handleOnChange, dataForm} = useCartContext()
  return (
    <div className='card'>
        <div>
            <h3>Complete sus datos para continuar con la compra!</h3>    
        </div>
        <hr />
        <form>
            <input type="text" 
              onChange={handleOnChange} 
              name='name' 
              placeholder='Ingrese su Nombre'
              value={dataForm.name}
              required
            />
            <input type="text" 
              onChange={handleOnChange} 
              name='lastname' 
              placeholder='Ingrese su Apellido' 
              value={dataForm.lastname}
              required
            />
            <br />
            <input type="number" 
              onChange={handleOnChange} 
              name='phone' 
              placeholder='Ingrese su Telefono' 
              value={dataForm.phone}
              required
            />
            <input type="number" 
              onChange={handleOnChange} 
              name='document' 
              placeholder='Ingrese su Documento' 
              value={dataForm.document}
              required
            />
            <br />
            <input type="email" 
              onChange={handleOnChange} 
              name='email' 
              placeholder='Ingrese su E-mail' 
              value={dataForm.email}
              required
            />
            <input type="email" 
              onChange={handleOnChange} 
              name='email2' 
              placeholder='Reingrese su E-mail' 
              value={dataForm.email2}
              required
            />
            <br /><br />
            <Link to='/ordernumber'/><button type="submit" className='btn btn-success'onClick={addOrder}>Comprar</button><Link/>
        </form>
        <OrderNumber/>
    </div>
  )
}

export default Form