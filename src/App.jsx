import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CartContainer from './containers/CartContainer/CartContainer';
import ItemDetailContainer from './containers/ItemDeatilContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import Form from './components/Form/Form';
import OrderNumber from './components/OrderNumber/OrderNumber';

/// __________ Contexto nuevo __________ ///

//const AppContext = createContext([{nombre:'Fede'}])

/// __________ Contexto nuevo __________ ///

function App() {
  let greeting = 'Bienvenidos a Mitica Amapola'
  return (
    <CartContextProvider >
      <BrowserRouter>
          <NavBar />
          <br />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting} />}/>
            <Route path='/category/:id' element={<ItemListContainer />}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartContainer />}/>
            <Route path='/form' element={<Form/>}/>
            {/* <Route path='/ordernumber' element={<OrderNumber/>}/> */}
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>   
  )
}

export default App
