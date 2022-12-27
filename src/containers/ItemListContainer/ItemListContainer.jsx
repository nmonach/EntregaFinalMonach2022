import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
import Greeting from '../../components/Greeting/Greeting'
import CarouselInicio from '../../components/Carousel/Carousel'
const ItemListContainer = ({saludo}) => { 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id}= useParams()

    useEffect(()=>{
        
        const db = getFirestore() 
        const queryCollection = collection(db, 'productos')
        
        if (id){
            const queryFilter = query(queryCollection, where('category', '==', id), orderBy('price', 'asc'))
            getDocs(queryFilter)//trae todos los que apliquen al filtro (filtro por categorias o precio o cualquier parametro que le di)
            .then(data=>setProducts(data.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
                                                                                                
        } else {
            getDocs(queryCollection)
            .then(data=>setProducts(data.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
    }, [id])
    
    return (
        
    <section>        
                    
        {   loading ? 
                    <Loading/> 
                :
                <div>
                    <CarouselInicio/>
                    <Greeting saludo={saludo}/>
                    <ItemList products={products} /> 
                </div>
        }

    </section>
  )
}

export default ItemListContainer