import { useEffect, useState } from "react";
import { getPokemonDetail } from "../services/api";
import Card from 'react-bootstrap/Card';

export const PokemonCard = ( { pokemon } ) =>{
  const [ ability, setAbility ] = useState(null);
  const [ photo, setPhoto ] = useState(null);
  console.log("POKEMON: "+ pokemon);
  
  useEffect( ()=>{
    getPokemonDetail(pokemon.url)
    .then((data) =>{
      setAbility(data.abilities[0].ability.name);
      setPhoto(data.sprites.front_shiny);
    })

    return () => {
        console.log(`Se desmontó ${pokemon.name}`);
    }
  }, [])

  return (
    <Card border="info" style={{ width: '10rem', height: '14rem' }} className="border border-3">
      <Card.Img variant="top" src={photo} style={{ width: '7rem', height: '7rem' }}  className="mx-auto"/>
      <Card.Body>
        <Card.Title className="pokemonName">{pokemon.name}</Card.Title>
        <Card.Text>
          <b>Ability:</b> {ability}
        </Card.Text>
      </Card.Body>
    </Card>
   
  )

}