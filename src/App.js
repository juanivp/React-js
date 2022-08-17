import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navigation/Navbar';
import Lenia from './components/pages/Lenia';
import Herramientas from './components/pages/Herramientas';
import ItemListContainer from './components/navigation/ItemListContainer';
import Contador from './components/navigation/Contador';
import Cart from './components/pages/Cart';
import ItemDetailContainer from './components/navigation/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Contador stock={12} initial={1} /> */}
        {/* <ItemDetailContainer/> */}
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />

          <Route exact path='detalle/:id'  element={<ItemDetailContainer />} />

          <Route exact path='category/:idCategory' element={<ItemListContainer />} />

          {/* <Route exact path='/Lenia'  element={<Lenia/>} />

          <Route exact path='/Herramientas' element={<Herramientas/>} /> */}

          <Route exact path='/Cart' element={<Cart/>} />

          <Route exact path='*' element={<h1>Virtual 404: Pagina no encontrada</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;