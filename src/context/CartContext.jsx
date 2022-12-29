import { addDoc, collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { useContext, useState, createContext } from "react"
export const CartContext = createContext([])
export const useCartContext = ()=> useContext(CartContext)
export const CartContextProvider = ({children})=>{
    //estado cartList
    const [cartList, setCartList] = useState([])
    //modificar el cartList
    

    const addToCart=(products)=>{
        //si esta en el carrito
        const idx = cartList.findIndex(prod => prod.id === products.id) // si no esta devuelve un -1
        
        if(idx !== -1){
            //cartList[idx].cant = cartList[idx].cant + products.cant  
            cartList[idx].cant += products.cant
            setCartList([ ... cartList ])
        }else{
            setCartList([...cartList, products])
        }
    }

    //vaciar el carrito
    const cleanCart=()=>{
        setCartList([])
    }

    // precio total

    const totalPrice = ()=> cartList.reduce((contador, producto)=> contador += (producto.price * producto.cant), 0)

    // cantidad total

    const totalProducts = ()=> cartList.reduce((contador, producto)=> contador += producto.cant, 0)

    // eliminar por item

    const deleteItem = (id) => {
        setCartList(cartList.filter(prod=> prod.id !== id))
    }

    function showOrder(resp){
        console.log(resp);
    }

    const addOrder = (e)=>{
        e.preventDefault()
        //armar formulario
        const order = {}
        order.buyer = dataForm
        order.price = totalPrice()
        order.items = cartList.map(({id, price, model, cant}) => ({id, price, model, cant}))
        //console.log(order)
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(resp => console.log(resp.id) && showOrder(resp.id))
        .catch(err => console.log(err))
        .finally(()=>cleanCart())
        
    }
    
    const [dataForm, setDataForm]= useState({
        name: '',
        lastname: '',
        phone: '',
        document: '',
        email: '',
        email2: ''
      })
          
    
    const handleOnChange = (e)=>{
        console.log('nombre del input: ',(e.target.name))
        console.log('valor del input: ',(e.target.value))
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
      }
    
    // const allProducts =()=>{
    //     const [products, setProducts] = useState([])
    //     const {productId} = useParams()
    //         useEffect(()=>{
    //         const db = getFirestore()
    //         const queryDoc = doc(db, 'productos', productId)
    //         getDoc(queryDoc)
    //         .then(resp => setProducts({id:resp.id, ...resp.data()}))
    //         .catch(err=>console.log(err))
    //         },[productId])}
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            cleanCart,
            totalPrice,
            totalProducts,
            deleteItem,
            addOrder,
            handleOnChange,
            dataForm,
            showOrder,
            // allProducts,
            // products
        }}>
            {children}
        </CartContext.Provider>
    )
} 
