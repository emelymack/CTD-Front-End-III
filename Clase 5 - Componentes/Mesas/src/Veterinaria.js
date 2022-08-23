import React from "react";
import Perro from "./components/Perro";

class Veterinaria extends React.Component {
  render() {
    return (
      <div>
        <h1>Veterinaria</h1>
        <ul>
          <Perro nombre="Firulais" edad={5} sexo="M" raza="Pastor aleman" tamanio="grande" />
          <Perro nombre="Maya" edad={3} sexo="H" raza="Pug" tamanio="chico" />
          <Perro nombre="Pipo" edad={5} sexo="M" raza="Pastor belga" tamanio="mediano" />
          <Perro nombre="Pacha" edad={2} sexo="H" raza="Mestizo" tamanio="chico" />
        </ul>
      </div>
    );
  }
}


export default Veterinaria;