import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Info from './components/Info'
import Buscar from './components/Buscar'
import Vertodos from './components/Vertodos'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Info />}> </Route>
        <Route path="/buscar" element={<Buscar />}> </Route>
        <Route path="/vertodos" element={<Vertodos />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
