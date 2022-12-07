import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({products=[]}) => {
    const onAdd = (cant)=>{
        console.log('La cantidad seleccionada es: ', cant);
    }
    console.log(products)
    return (
        <div className='container border border-3 border-primary rounded'>
            <div className='row'>
                <div className='col-6'>
                    <img className='imgItemDetail' src={products.img} />
                    <h3>Nombre: {products.modelo}</h3>
                    <h3>Categoria: {products.categoria}</h3>
                    <h4>Precio: {products.precio}</h4>
                </div>
                <div className='col'>
                    <ItemCount 
                        stock={products.stock} //aca se define el stock que yo digo
                        initial={1} 
                        onAdd={onAdd}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail