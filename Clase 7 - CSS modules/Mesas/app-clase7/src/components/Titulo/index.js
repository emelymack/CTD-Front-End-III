import styles from "../../css/Titulo.module.css"

function Titulo(props){
    return (
        <h1 className={styles.title} key={props.key}>{props.titulo}</h1>
    )
}

export default Titulo;