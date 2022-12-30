import { addDoc, collection, getFirestore } from "firebase/firestore"
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

// agregar orden de compra al firebase

    const addOrder = (e)=>{
        e.preventDefault()
        //armar formulario
        const order = {}
        order.buyer = dataForm
        order.price = totalPrice()
        order.items = cartList.map(({id, price, model, cant}) => ({id, price, model, cant}))
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(resp => Swal.fire({
            title: "Compra Realizada",
            text: `Su numero de orden es: ${resp.id}`,
            confirmButtonText: '<a href="/">OK</a>',}))
        .catch(err => console.log(err))
        .finally(()=>cleanCart(), )
    }
    
//genera la base de datos del form para mandarla en la orden de compra al firebase

    const [dataForm, setDataForm]= useState({
        name: '',
        phone: '',
        email: '',
        email2: ''
      });    

    const handleOnChange = (e)=>{
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
      }

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
        }}>
            {children}
        </CartContext.Provider>
    )
}