import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import gFetch from '../../components/helpers/gFetch'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
const ItemListContainer = ({saludo}) => { //{saludo = 'saludo por defecto'} esto iria dentro del parentesis
    
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {id}= useParams()
    // console.log(id);
    useEffect(()=>{
        if (id){
            gFetch()
            .then(data => setProduct(data.filter(prod => prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            gFetch()
            .then(data => setProduct(data))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [id])
    // useEffect(()=>{
    //     gFetch()// consulta a un api pero solo simulación 
    //     // .then( respuesta => respuesta )
    //     .then(data => setProduct(data))
    //     .catch(err => console.log(err))
    //     .finally(()=> setLoading(false))
    // }, [])
    
    //console.log(products)



    //hook es un fn de react que me devuelve estados persistentes (useEffect useState)
    // const [count, setCount] = useState(0)
    // const [bool, setBool] = useState(true)

    // // const [time, setTime] = useState(Date)
    // useEffect(()=>{
    //     //acciones
    //     console.log('addEventListener (SE EJECUTA SIEMPRE 1)');
    //     return ()=>{console.log('removeEventListener');}
    // },)//sirve para limpiar antes de ejecutar el addEventListener


    // useEffect(()=>{
    //     //acciones
    //     console.log('SE EJECUTA 1 SOLA VEZ POR EL ARRAY VACIO []2 asincronismo para llamada a apis');
    //     //fetch (promesa)
    //     // despues lo guardo en un estado
    // },[])

    // useEffect(()=>{
    //     //acciones
    //     console.log('SE EJECUTA solo cuando cambie el booleano 3');
    // },[bool])
    
    // console.log('ItemListContainer rendering 4');
    //console.log(setCount);
    //console.log(arrayHook);
    //let contador = 0
    
    // const handleContadorSuma = ()=>{
    //     setCount(count + 1)
    // }

        //contador = contador + 1 ////contador++ - contador +=1
        // console.log(contador);
    // }
    // const handleContadorResta = ()=>{
    //     setCount(count - 1)
    // }
    // const handleBool = ()=>{
    //     setBool(!bool)
    // }
    // console.log(count);
    // console.log(bool);
    
    // const dayClick =()=>{
    //     setCount(count + 1)
    //     setTime(Date)
    // }
    // console.log(time);
    

    //LOS EVENTOS, CAMBIOS DE ESTADO Y CAMBIOS DE PROPS PRODUCEN RE-RENDER
    return (
        
    <section>
        {/* <h1>ItemListContainer</h1> */}
        
        {/* <p className='alert alert-danger'>{count}</p>
        <button className='btn btn-outline-primary' onClick={handleContadorSuma}>+</button>
        <button className='btn btn-danger' onClick={handleContadorResta}>-</button>
        <button className='btn btn-outline-primary' onClick={handleBool}>Cambiar bool</button>
        <button className='btn btn-danger' onClick={dayClick}>Click</button>
        <p className='alert alert-primary'>{count}</p>
        <p className='alert alert-primary'>{time}</p> */}
        {/* <h2><button onClick={handleBool}>Bool</button></h2> 
        <button onClick={handleContadorSuma}>+</button> */}
        <h1 id='greeting'>{saludo}</h1>
        {   loading ? 
                    <h3>Loading...</h3> 
                :
                    <ItemList products={products} saludo={saludo}/> 
        }

    </section>
  )
}

export default ItemListContainer