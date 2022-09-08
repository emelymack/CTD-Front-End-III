import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";
import styles from "../styles/detail.module.css"

const CharacterDetail = () => {
  const [character, setCharacter] = useState({})
  const {id} = useParams(); //objeto

  useEffect( () => {
    getCharacterById(id).then( (response) => {
        console.log(response.data);
        setCharacter(response.data);
    })
  }, [id])


  return (
    <div className={styles.detailContainer}>
      <h2 className={styles.name}>{character.name}</h2>
      <img src={character.image} alt={character.name} className={styles.characterImg}/>
      <div className={styles.characterText}>
        <p>Status: <span>{character.status}</span></p>
        <p>Species: <span>{character.species}</span></p>
      </div>
    </div>
  )
}
export default CharacterDetail;