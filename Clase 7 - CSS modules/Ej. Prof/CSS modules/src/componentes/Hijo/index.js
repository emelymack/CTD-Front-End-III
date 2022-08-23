import styles from "../../css/Hijo.module.css";

function Hijo(props) {
    return (
         <div className={styles.container} >
            <h2>Nombre {props.nombre}</h2>
         </div>
         )
  }
  
  export default Hijo;
  