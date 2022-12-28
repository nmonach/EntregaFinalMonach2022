import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './Form.css'
//validar el formulario (que no esten vacios, validar el mail)
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
            />
            <input type="text" 
              onChange={handleOnChange} 
              name='lastname' 
              placeholder='Ingrese su Apellido' 
              value={dataForm.lastname}
            />
            <input type="number" 
              onChange={handleOnChange} 
              name='phone' 
              placeholder='Ingrese su Telefono' 
              value={dataForm.phone}
            />
            <input type="number" 
              onChange={handleOnChange} 
              name='document' 
              placeholder='Ingrese su Documento' 
              value={dataForm.document}
            />
            <input type="email" 
              onChange={handleOnChange} 
              name='email' 
              placeholder='Ingrese su E-mail' 
              value={dataForm.email}
            />
            <input type="email" 
              onChange={handleOnChange} 
              name='email2' 
              placeholder='Reingrese su E-mail' 
              value={dataForm.email2}
            />
        </form>
        <div>
            <button className='btn btn-success' onClick={addOrder}><Link to='/ordernumber'>Comprar</Link></button>
        </div>
        
        
    </div>
  )
}

export default Form