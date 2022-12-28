import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState, createContext } from "react"
export const CartContext = createContext([])
export const useCartContext = ()=> useContext(CartContext)
export const CartContextProvider = ({children})=>{
    //estado cartList
    const [cartList, setCartList] = useState([])
    //modificar el cartList
    

    const agregarCarrito=(products)=>{
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
    const vaciarCarrito=()=>{
        setCartList([])
    }

    // precio total

    const precioTotal = ()=> cartList.reduce((contador, producto)=> contador += (producto.price * producto.cant), 0)

    // cantidad total

    const cantidadTotal = ()=> cartList.reduce((contador, producto)=> contador += producto.cant, 0)

    // eliminar por item

    const deleteItem = (id) => {
        setCartList(cartList.filter(prod=> prod.id !== id))
    }

    const addOrder = (e)=>{
        e.preventDefault()
        //armar formulario
        const order = {}
        order.buyer = dataForm
        order.price = precioTotal()
        order.items = cartList.map(({id, price, model, cant}) => ({id, price, model, cant}))
        // console.log(order)
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=>vaciarCarrito())
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
      console.log(dataForm);

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            deleteItem,
            addOrder,
            handleOnChange,
            dataForm,


            

            
            
        }}>

            {children}
        </CartContext.Provider>

    )
} 
