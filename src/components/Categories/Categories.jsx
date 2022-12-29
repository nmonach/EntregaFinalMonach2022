import { NavLink } from "react-router-dom"
//CATEGORIAS DINAMICAS (PERMITE AGREGAR NUEVAS CATEGORIAS AL NAVBAR)
const Categories = () => {
    const categories = [
        {id:'1', model: 'Velas de Soja', categoryId: 'Velas de Soja'},
        {id:'2',model: 'Lamparas de Sal', categoryId: 'Lamparas de Sal'},
        {id:'3',model: 'Difusores', categoryId: 'Difusores'},      
    ]
  return (
        <>   
            {categories.map(cat =>
            <NavLink className="navBarLinks" to={`/category/${cat.categoryId}`}>
                {cat.model}
                </NavLink>)}
        </>   
        )
}

export default Categories