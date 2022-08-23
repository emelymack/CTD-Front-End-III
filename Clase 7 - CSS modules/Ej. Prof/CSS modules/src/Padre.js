import Hijo from "./componentes/Hijo"
import styles from "./css/Padre.module.css"
console.log(styles);
function Padre() {
  return (
    <div className={styles.container} >
      <Hijo nombre="Fernando"/>
      <Hijo nombre="Carlos"/>
      <Hijo nombre="Laura"/>
    </div>  
    );
}

export default Padre;

