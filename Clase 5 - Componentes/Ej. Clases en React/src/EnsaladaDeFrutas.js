import React from "react";
import Fruta from "./components/Fruta";

class EnsaladaDeFrutas extends React.Component {
  render() {
    return (
      <div>
        <h1>Ensalada de frutas</h1>
        <ul>
          <Fruta fruta="Manzanas" cantidad="10" />
          <Fruta fruta="Peras" cantidad="20"/>
          <Fruta fruta="Naranjas" cantidad="10" />
          <Fruta fruta="Uvas" cantidad="5" />
          <Fruta fruta="Bananas" cantidad="1" />
        </ul>
      </div>
    );
  }
}


export default EnsaladaDeFrutas;