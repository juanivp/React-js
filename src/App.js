import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navigation/Navbar';
import Inicio from './components/pages/Inicio';
import Productos from './components/pages/Productos';
import Promociones from './components/pages/Promociones';
import ItemListContainer from './components/navigation/ItemListContainer';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <ItemListContainer />
        <Routes>
          <Route path='/' exact component={Inicio} />
          <Route path='/Productos' exact component={Productos} />
          <Route path='/Promociones' exact component={Promociones} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
