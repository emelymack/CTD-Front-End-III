import React from "react";
import Titulo from "./components/Titulo"

const titles = ["HOLA", "HOLA", "HOLA", "MUNDO"];

let titleMap = (array) => {
  return array.map( (title, index) => {
    return (
      <Titulo key={index} titulo={title} />
    )
  })
} 

class App extends React.Component {
  render() {
    return (
    <div>
      {titleMap(titles)}
    </div>
    )
  }
}

export default App;