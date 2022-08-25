function Formulario(props) {
    return (
        <form onSubmit={props.onEnviar}>
            <p>Ingrese su nombre: <input type="text" name="nombre" placeholder="Nombre"></input></p>
            <p>Ingrese su edad: <input type="number" name="edad" placeholder="edad"></input></p>
            <input type="submit" value="enviar" />
        </form>
    )
}

export default Formulario;