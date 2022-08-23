import './App.css';
import { useState } from "react";
import FormularioTurno from './FormularioTurnos';
import ListaTurnos from './ListaTurnos';


function App() {
    const [turnos, setTurnos] = useState([])

    function guardarTurno(event){

      event.preventDefault();
      const name = event.target.nombre.value;
      const lastName = event.target.apellido.value;

      const nuevoTurno = {
        nombre: name,
        apellido: lastName
      }

      setTurnos([...turnos, nuevoTurno])
      event.target.nombre.value="";
      event.target.apellido.value="";

    }



  return (
    <div className="App">
      <h1 className='Titulo'>AGENDA TU TURNO</h1>
      <FormularioTurno onGuardar={guardarTurno}/>
      <ListaTurnos listado={turnos}/>
      <img src="https://i.pinimg.com/564x/a9/91/9c/a9919cebd23ce8f21d74c974ac919c2f.jpg"/>
    </div>
  );
}

export default App;