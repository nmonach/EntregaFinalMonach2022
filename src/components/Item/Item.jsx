import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
          <div            
            style={{ marginLeft: 125, marginRight: 125 }}
            className='col-5'
            key={product.id}
          >
            <div className="card w-100 mt-5" >
              <div className="card-header">
                {`${product.modelo} - ${product.categoria}`}
              </div>
          
              <div className="card-body">
                <img src={product.img} alt='' className='w-50' />
                <p>Precio: ${product.precio} </p>                                                           
              </div>
  
              <div className="card-footer">                                                        
                <Link to={`/detail/${product.id}`}>
                  <button className="btn btn-outline-primary btn-block">
                      Detalle del producto
                  </button>
                </Link>
              </div>
            </div>
          </div>
  )
}

export default Item