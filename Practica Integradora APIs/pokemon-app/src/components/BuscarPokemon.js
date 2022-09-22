import '../App.css';
import { useState, useEffect } from 'react';


export default function BuscarPokemon({onSubmit}) {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
    const [ inputValue, setInputValue ] = useState("");
    const [ pokemon, setPokemon ] = useState(null);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let fetchPokemon = async() => {
            const res = await fetch(baseUrl);
            const data = await res.json();
            
            data.results.map( element => {
                element.name.includes(inputValue) ? setPokemon(element) : null;
            })
        } 
    }

    useEffect(() => {
        console.log("HOLA");
    
      return () => {
        console.log("SE DESMONTÓ EL COMPONENTE");
      }
    }, [pokemon])
    
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pokebusqueda">Buscar pokemón:</label>
                <input 
                    type="text" 
                    value={inputValue} 
                    placeholder="Pokenombre" 
                    name="pokebusqueda"
                    onChange={handleChange}></input>

                <input type="submit" value="Buscar"></input>
            </form>
            
        </div>
    )
}