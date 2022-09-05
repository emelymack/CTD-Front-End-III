import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Guauguaus from './components/Guauguaus';
import Miaumiaus from './components/Miaumiaus';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='guauguaus' element={<Guauguaus />}></Route>
            <Route path='miaumiaus' element={<Miaumiaus />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
