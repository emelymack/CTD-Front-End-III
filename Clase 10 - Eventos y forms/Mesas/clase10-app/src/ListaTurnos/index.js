function ListaTurnos(props) {

    return(
        <ul className="Lista">
            {props.listado.map((elemento,index) =>
            (
            <>
            <li key={index}>
                Turno numero: {index}<br/>
                Nombre: {elemento.nombre}<br/>
                Apellido: {elemento.apellido}
            </li>
            </>
            )
           
            )}
        </ul>
    );
    
}

export default ListaTurnos;