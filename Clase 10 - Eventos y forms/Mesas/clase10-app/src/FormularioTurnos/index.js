function FormularioTurno(props){
    return(
        <form className="Form" onSubmit={props.onGuardar}>
            <p>Ingrese el Nombre: <input type="text" name="nombre" /></p>
            <p>Ingrese el Apellido: <input type="text" name="apellido" /></p>
            <input className="Boton" type="submit" value="Guardar turno"/>
        </form>
    )
}

export default FormularioTurno;