import { useCartContext } from '../../context/CartContext'
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
            <input type="number" 
              onChange={handleOnChange} 
              name='phone' 
              placeholder='Ingrese su Telefono' 
              value={dataForm.phone}
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
            {
              dataForm.name == "" || 
              dataForm.phone == "" || 
              dataForm.email == "" ||
              dataForm.email2 == "" ||
              dataForm.email !== dataForm.email2
            ?
              <input type="submit" value="Complete los datos para Continuar" className='btn btn-warning' disabled/>
            :
              <input type="button" value="Comprar" className='btn btn-success' onClick={addOrder}/>
            }
        </form>
    </div>
  )
}

export default Form