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

    const precioTotal = ()=> cartList.reduce((contador, producto)=> contador += (producto.precio * producto.cant), 0)
    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            
            
        }}>

            {children}
        </CartContext.Provider>

    )
} 
