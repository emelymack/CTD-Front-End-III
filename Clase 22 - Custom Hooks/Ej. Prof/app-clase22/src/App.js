import { useState} from "react";
import "./styles.css"
import useFetch from "./useFetch";

export default function App() {

  
  const [imageUrl, setImageUrl] =useState(null);
  const data =useFetch("https://dog.ceo/api/breeds/image/random")

  const randomDog = () => {
    setImageUrl(data.message); 
  };



return (
  <div className="App">
    <img src={imageUrl}  />
    <button onClick={randomDog}>Ver perro</button>
  </div>
)





}