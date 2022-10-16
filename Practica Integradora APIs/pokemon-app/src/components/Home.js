import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Home() {
  return(
      <div id="home">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" 
          style={{width: '40vw'}}
          className='my-4'
        />
        <h1>Bienvenidos al POKEWORLD</h1>
        <nav className="mt-3 mb-4 d-flex flex-column flex-md-row justify-content-center">
            <Link to="/#"><Button variant="info" className="me-md-2">Home</Button></Link>
            <Link to="/buscar"><Button variant="info" className="me-md-2">Buscar pokemon</Button></Link>
            <Link to="/verTodos"><Button variant="info">Ver todos los pokemones</Button></Link>
        </nav>

        <Outlet/>
      </div>
  )
}