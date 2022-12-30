import { NavLink } from "react-router-dom"
//CATEGORIAS DINAMICAS (PERMITE AGREGAR NUEVAS CATEGORIAS AL NAVBAR)
const Categories = () => {
    const categories = [
        {id: '1', model: 'Velas de Soja', category: 'Velas de Soja'},
        {id: '2', model: 'Lamparas de Sal', category: 'Lamparas de Sal'},
        {id: '3', model: 'Difusores', category: 'Difusores'}      
    ];
  return (
        <>   
            {categories.map((cat) => ( 
                <NavLink className="navBarLinks" key={cat.id} to={`/category/${cat.category}`}>
                    {cat.model}
                </NavLink>
            ))}
        </>   
        )
}

export default Categories