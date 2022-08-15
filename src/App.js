import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navigation/Navbar';
import Lenia from './components/pages/Lenia';
import Herramientas from './components/pages/Herramientas';
import ItemListContainer from './components/navigation/ItemListContainer';
import Contador from './components/navigation/Contador';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Contador stock={12} initial={1} /> */}
        <Routes>
          <Route exact path='/' element={
            <ItemListContainer />
          } />
          <Route exact path='/Lenia'  element={
            <Lenia/>
          } />
          <Route exact path='/Herramientas' element={
            <Herramientas/>
          } />
          <Route exact path='*' element={
            <h1>Virtual 404: Pagina no encontrada</h1>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;