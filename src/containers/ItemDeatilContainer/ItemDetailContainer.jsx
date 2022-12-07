import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import gFetch from '../../components/helpers/gFetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState([])
    const {productId} = useParams()
    

    useEffect(()=>{
        gFetch()
        .then(respProd => setProduct(respProd.find((prod) => prod.id === productId)))
        .catch(err=>console.log(err))
    },[productId])
    console.log(productId);
    
    
  return (
    <ItemDetail products={products}/>
  )
}

export default ItemDetailContainer