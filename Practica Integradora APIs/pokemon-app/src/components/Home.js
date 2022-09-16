import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <h1>Bienvenidos al POKEWORLD</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/buscar">Buscar pokemon</Link>
                <Link to="/verTodos">Ver todos los pokemones</Link>
            </nav>
        </div>
    )
}