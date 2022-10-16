import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import BuscarPokemon from "./components/BuscarPokemon";
import ListarTodos from "./components/ListarTodos";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='buscar' element={<BuscarPokemon />} />
            <Route path='verTodos' element={<ListarTodos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
