// import { useContext } from "react"
import Item from "../Item/Item"
//const {products} = useContext(AppContext)
const ItemList = ({products = []}, {saludo=''}) => {
    return (
            <section> 
                {products.map( (product) => ( 
                    <Item product={product} key={product.id} />
                ))}
            </section>
           )
}

export default ItemList