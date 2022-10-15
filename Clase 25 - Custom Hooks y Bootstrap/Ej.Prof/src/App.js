import React, {useState} from "react";
import useCounter from "./useCounter";
import useTitle from "./useTitle";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from "react-bootstrap/button"
import Card from "react-bootstrap/card"



export default function App() {

  const {counter,increase,decrease,reset} = useCounter();
  const  [,setDocumentTitle] = useTitle("Titulo inicial");
  const [cont,setCont] =useState(5);

  const handleTitle = ()=>{
    setDocumentTitle(`Titulo Numero ${cont}`)
    setCont(cont+1);

  }

  

  return (
    <div>
        <div>{counter}</div>
        <Button onClick={increase}>+</Button>
        <Button variant="danger" onClick={decrease}>-</Button>
        <Button variant="outline-success" onClick={reset}>reset</Button>
        <Button variant="info" onClick={handleTitle}>cambiar titulo</Button>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Mira que linda Card</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        

    </div>
  );
}

