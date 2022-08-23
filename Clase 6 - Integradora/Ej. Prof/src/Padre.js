
import './App.css';

function Padre(props) {
  return (
    <div className="App">  
      {props.children}
    </div>
  );
}

export default Padre;

