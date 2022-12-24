import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({products=[]}) => {
    const [isCant, setIsCant] = useState(false)
    const {agregarCarrito}= useCartContext()

    const onAdd = (cant)=>{
        console.log('La cantidad seleccionada es: ', cant);
        agregarCarrito({...products, cant})
    }
    console.log(agregarCarrito)
    return (
        <div className='container border border-3 border-primary rounded'>
            <div className='row'>
                <div className='col-6'>
                    <img className='imgItemDetail' src={products.img} />
                    <h3>Nombre: {products.model}</h3>
                    <h3>Categoria: {products.category}</h3>
                    <h4>Precio: {products.price}</h4>
                </div>
                <div className='col'>
                    {isCant?
                    
                        <>
                            <button className='btn btn-outline-success'>Ir al Carrito</button>
                            <button className='btn btn-outline-primary'>Seguir Comprando</button>
                        </>
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