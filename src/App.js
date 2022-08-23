import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navigation/Navbar';
import ItemListContainer from './components/navigation/ItemListContainer';
import Cart from './components/pages/Cart';
import ItemDetailContainer from './components/navigation/ItemDetailContainer';
import CartProvider from './context/CartContext';

//seteo un contexto por default en el carrito
const CartContext = React.createContext('');


function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='detalle/:id'  element={<ItemDetailContainer />} />
          <Route exact path='category/:idCategory' element={<ItemListContainer />} />
          <Route exact path='/Cart' element={<Cart/>} />
          <Route exact path='*' element={<h1>Virtual 404: Pagina no encontrada</h1>} />
        </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;