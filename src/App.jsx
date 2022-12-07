import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CartContainer from './containers/CartContainer/CartContainer';
import ItemDetailContainer from './containers/ItemDeatilContainer/ItemDetailContainer';
//import { ViewPort } from './components/ViewPort/ViewPort';


function App() {
  let saludo = 'Bienvenidos a Mitica Amapola'
  
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo={saludo} />}/>
          <Route path='/categoria/:id' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<CartContainer />}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        {/* <CarouselInicio/>         */}
        {/* <ViewPort/> */}
        {/* <ItemCount/> */}
        {/* <ItemDetailContainer /> */}
    </BrowserRouter>
       
  )
}

export default App
