import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock=5, initial=1, onAdd}) => { //aca el stock es el de por defecto salvo que cuando llame a count le diga otro stock
    
    const [count, setCount] = useState(initial)
    
    const handleCounterAdd = ()=>{
        if (count<stock){
            setCount(count + 1)
        }
    }
    const handleCounterMinus = ()=>{
        if (count>initial){
            setCount(count - 1)
        }
    }
    const handleOnAdd = ()=>{
        onAdd(count)
    }
    
    return (
        <div className='card cardItemCount'>
            <div className='card-header cardHeaderItemCount'>
                <label htmlFor="">Seleccione la cantidad: {count}</label>
            </div>
            <div className='card-body cardBodyItemCount'>
                <button id='mas' className='btn btn-outline-danger'  onClick={handleCounterMinus}> - </button>
                <button id='menos' className='btn btn-outline-primary' onClick={handleCounterAdd}> + </button>
            </div>
            <div className='card-footer cardFooterItemCount'>
                <button className='btn btn-outline-success btn-block' onClick={handleOnAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount