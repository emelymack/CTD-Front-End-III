import logo from './logo.svg';
import './App.css';

import Formulario from './Formulario'
import React, { useState } from 'react';
import Swal from 'sweetalert2';



function App() {
  //const [persona, setPersona] = useState([]);

  function rejuvenecer(event) {
    //console.log("Entró al rejuvenecer")
    event.preventDefault();
    const nombre = event.target.nombre.value;
    const edad = event.target.edad.value;
    if (validarNombre(nombre) && validarEdad(edad)) {
      const nuevaEdad = restarAnios(edad);
      Swal.fire(
        'Rejuvenecido!',
        `Ha sido rejuvenecido, su nueva edad es ${nuevaEdad}`,
        'success'
      )
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }

  function validarNombre(nombre) {
    if (nombre.length >= 1) {
      return true;
    }
    return false;
  }

  function validarEdad(edad) {
    //console.log(typeof edad);
    //console.log(typeof 21 === 'number');

    if (/*typeof edad === 'number' &&*/ edad >= 10) {
      return true;
    }
    return false;
  }

  function restarAnios(edad) {
    return edad - 10;

  }


  return (
    <>
      <h1>Rejuvenecedor</h1>
      <Formulario onEnviar={rejuvenecer} />
    </>
  );

}

export default App;
