import '../styles/App.css';
import personas from '../personas';
import InvitadoCC from '../components/InvitadoCC';
import TareasFC
 from '../components/TareasFC';
function App() {
  return (
    <div className="App">
      <h1>Invitados:</h1>
      <ul>
        {personas.map(persona => <InvitadoCC nombre={persona.nombre} invitado={persona.invitado}/>)}
      </ul>
      <h1>Tareas:</h1>
      <ul>
        {personas.map(persona => <TareasFC nombre={persona.nombre} tarea={persona.tarea}/>)}
      </ul>
    </div>
  );
}

export default App;
