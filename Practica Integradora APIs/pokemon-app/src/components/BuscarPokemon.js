import '../App.css';


export default function BuscarPokemon({onSubmit}) {
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="pokebusqueda">Buscar pokemón:</label>
                <input type="text" placeholder="Pokenombre" name="pokebusqueda"></input>

                <input type="submit" value="Buscar"></input>
            </form>
            
        </div>
    )
}