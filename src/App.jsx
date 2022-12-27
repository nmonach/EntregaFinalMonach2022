import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CartContainer from './containers/CartContainer/CartContainer';
import ItemDetailContainer from './containers/ItemDeatilContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import CarouselInicio from './components/Carousel/Carousel';

/// __________ Contexto nuevo __________ ///

//const AppContext = createContext([{nombre:'Fede'}])

/// __________ Contexto nuevo __________ ///

function App() {
  //const [products, setProducts] = useState{productos}
  let saludo = 'Bienvenidos a Mitica Amapola'
  // function saludo() {
  //   console.log("sola soy bla bla bla");
  // }
  // console.log(AppContext);
  return (
    <CartContextProvider >
      <BrowserRouter>
          <NavBar />
          <br />
          <CarouselInicio />
          <br />
          <Routes>
            <Route path='/' element={<ItemListContainer saludo={saludo} />}/>
            <Route path='/category/:id' element={<ItemListContainer />}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartContainer />}/>
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>   
  )
}

export default App
