import React from "react";

class Fruta extends React.Component {
 
  render() {
    return (
      <li style={{ backgroundColor: "lime", border: "solid 4px" }}>
        <span>{this.props.fruta}</span> - Cantidad: <span>{this.props.cantidad}</span>
      </li>
    );
  }
}

export default Fruta;
