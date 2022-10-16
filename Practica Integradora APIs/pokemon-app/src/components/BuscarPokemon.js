import '../App.css';
import { useState, useEffect } from 'react';
import { getPokemonList, getPokemonSearch } from '../services/api';
import { PokemonCard } from './PokemonCard';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export default function BuscarPokemon() {
  const [ inputValue, setInputValue ] = useState("");
  const [ poke, setPoke ] = useState();
  const [ pokemonObtenido, setPokemonObtenido ] = useState(false);

  const handleChange = (e) => {
      setInputValue(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchPokemon = () => {
      getPokemonList()
      .then((data) => {
        console.log(data);
        data.map( element => {
          if(element.name.includes(inputValue)){
            setPoke(element);
            setPokemonObtenido(true);
          }
          console.log("POKEE"+ poke);
        return poke;  
        })
      })
      
    } 

    fetchPokemon();
    console.log("POKEMON OBTENIDO:" +poke);

  }

  useEffect(() => {
      console.log("HOLA");
  
    return () => {
      console.log("SE DESMONTÓ EL COMPONENTE");
      setPokemonObtenido(false);
    }
  }, [poke])
  
  
  return(
      <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor="pokebusqueda" className='me-3 mb-2 fs-5 fw-bold'>Buscar pokemón:</label>
              <div className="d-flex justify-content-center">
                <input 
                className='form-control me-2' 
                type="text" 
                value={inputValue} 
                placeholder="Pokenombre" 
                name="pokebusqueda"
                style={{width: '25vw'}}
                onChange={handleChange}></input>
                <button className='btn btn-success' type='submit'>
                  Buscar
                </button>
              </div>
              
              {/* <Card border="info" style={{ width: '10rem', height: '14rem' }} className="border border-3">
                <Card.Body>
                  <Card.Title className="pokemonName">{poke.name}</Card.Title>
                  <Card.Text>
                    <Link to={"https://pokeapi.co/api/v2/pokemon/"+poke.name}></Link>
                  </Card.Text>
                </Card.Body>
              </Card> */}
          </form>
          
      </div>
  )
}