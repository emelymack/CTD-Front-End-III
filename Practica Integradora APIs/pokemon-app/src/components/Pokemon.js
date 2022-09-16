import { useEffect } from "react";

const Pokemon = ( { name, id } ) =>{
    
    useEffect( ()=>{
        return () => {
            console.log(`Se desmontó ${name}`);
        }
    }, [])

    return (
        <div>
            
        </div>
    )

}