import '../App.css';
import { useState, useEffect } from 'react';
import { getPokemonList, getPokemonDetail } from '../services/api';
import { PokemonCard } from './PokemonCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ListarTodos() {
  const [ pokemons, setPokemons ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("Loading status: " + loading);

    getPokemonList().then((data) => {
      if(data){
        setLoading(false);
        setPokemons(data);
      };
    })

    return () => {
        console.log("SE DESMONTÓ EL COMPONENTE");
    }
  }, [])
  
  return(
    <div>
      <h2>Listado de pokemones</h2>
      <Container className='my-4 d-flex'>
        <Row className='g-3'>
          {pokemons.map((pokemon, index) => 
            (
              <Col>
                <PokemonCard key={index} pokemon={pokemon}/>
              </Col>
            )
          )}
        </Row>
        
      </Container>
      
        
    </div>
  )
}