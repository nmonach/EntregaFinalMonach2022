import './Form.css'
import React from 'react'

const Form = () => {
  return (
    <div className='card'>
        <div>
            <h3>Complete sus datos para continuar con la compra!</h3>    
        </div>
        <hr />
        <div className='row'>
            <input type="text" placeholder='Ingrese su Nombre' required />
            <input type="text" placeholder='Ingrese su Apellido' required/>
            <input type="number" placeholder='Ingrese su Telefono' required/>
            <input type="number" placeholder='Ingrese su Documento' required/>
            <input type="email" placeholder='Ingrese su E-mail' required/>
            <input type="email" placeholder='Reingrese su E-mail' required/>
        </div>
        <div>
            <button className='btn btn-success'>Comprar</button>
        </div>
        
        
    </div>
  )
}

export default Form