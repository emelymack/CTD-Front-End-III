import { useState } from 'react';
import { getPokemon } from "../data/pokemonService";



export default function Buscar() {

    const [nombre, setNombre] = useState("nombre default")
    const [id, setId] = useState("id default")
    const [pokemonEncontrado, setPokemonEncontrado] = useState(false)

    var handleSubmit = (event) => {
        event.preventDefault();
        const pokemonBuscado = event.target.name.value;
        getPokemon(pokemonBuscado).then(data => {
            setNombre(data.name)
            setId(data.id)
            setPokemonEncontrado(true)
        })
    }

    var PokemonCard = () => {
        if (pokemonEncontrado) {
            return (
                <>
                    <h2>Estos son los datos del pokemon buscado:</h2>
                    <h3> - Nombre: {nombre}</h3>
                    <h3> - Id: {id}</h3>
                </>
            )
        }
        return;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="GET-pokemon">Nombre:</label>
                <input id="GET-pokemon" type="text" name="name" />
                <button type="submit" value="Buscar" > Buscar </button>
            </form>
            <PokemonCard />
        </>
    )
}


