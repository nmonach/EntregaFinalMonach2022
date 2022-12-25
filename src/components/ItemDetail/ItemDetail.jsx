import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({products=[]}) => {
    const [isCant, setIsCant] = useState(false)
    const {agregarCarrito}= useCartContext()

    const onAdd = (cant)=>{
        console.log('La cantidad seleccionada es: ', cant);
        agregarCarrito({...products, cant})    
        setIsCant(true)

    }
    console.log(agregarCarrito)
    return (
        <div className='container border border-3 border-primary rounded'>
            <div className='row'>
                <div className='card'>
                    <div className='card-header'>
                        <img className='imgItemDetail' src={products.img} />
                    </div>
                    <div className='card-body'>
                        <h4>Nombre: {products.model}</h4>
                        <h4>Categoria: {products.category}</h4>
                    </div>
                    <div className='card-footer'>
                        <h4>Precio: ${products.price}</h4>
                        <h5>Stock: {products.stock}</h5>
                        <a href="/"><button className='btn btn-outline-warning'>Volver a Inicio</button></a>
                    </div>   
                </div>
                <div className='col'>
                    {isCant?
                    
                        <div className='card card-body'>
                            <Link to='/cart'>
                                <button className='btn btn-outline-success'>Ir al Carrito</button>
                            </Link>
                            <Link to='/'>
                                <button className='btn btn-outline-primary'>Seguir Comprando</button>
                            </Link>
                        </div>
                :   
                
                

                    <ItemCount 
                        stock={products.stock} //aca se define el stock que yo digo
                        initial={1} 
                        onAdd={onAdd}
                    />} 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail