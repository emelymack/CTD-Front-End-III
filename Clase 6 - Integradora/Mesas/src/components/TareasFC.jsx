import React from 'react';
import '../styles/Component.css';

const TareasFC = (props) => {
    return (
        <li>{props.nombre} traerá {props.tarea}</li>
    )
}

export default TareasFC;