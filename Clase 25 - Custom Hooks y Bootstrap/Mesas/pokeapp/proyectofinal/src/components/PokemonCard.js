import { useEffect, useState } from "react";
import styles from "../styles/Pokemon.module.css";
import { getPokemonDetail } from "../data/pokemonService";
import { Card } from "react-bootstrap";

export default function PokemonCard({ pokemon }) {
  const [photo, setPhoto] = useState("");
  const [pokemonType, setType] = useState("");

  useEffect(() => {
    getPokemonDetail(pokemon.url).then((details) => {
      setPhoto(details.sprites.front_default);
      setType(details.types[0].type.name);
    });
  }, []);

  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>Tipo: {pokemonType}</Card.Text>
      </Card.Body>
    </Card>
  );
}

