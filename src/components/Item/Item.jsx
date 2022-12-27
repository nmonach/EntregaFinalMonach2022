import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({product}) => {
  return (
    <section            
      className='wrapper'
      key={product.id}
    >
      <div className="card cardItem" >
        <div className="card-header">
          <h3>{`${product.model}`}</h3>
          <h4>{`${product.category}`}</h4>
        </div>
    
        <div className="card-body">
          <img src={product.img} alt='' className='image' />
          <h5>Precio: ${product.price}</h5>                                                           
        </div>

        <div className="card-footer">                                                        
          <Link to={`/detail/${product.id}`}>
            <button className="btn btn-outline-primary btn-block">
                Ver Producto
            </button>
          </Link>
        </div>
      </div>
    </section>
    
  )
}

export default Item