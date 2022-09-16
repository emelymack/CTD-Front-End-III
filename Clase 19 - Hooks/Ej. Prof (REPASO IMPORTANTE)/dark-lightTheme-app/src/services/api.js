const baseUrl = "https://pokeapi.co/api/v2";

export const getAllPokemons = async ()=>{
    try {
        const endpoint = `${baseUrl}/pokemon`;
        const res = await fetch(endpoint);
        if(res.ok){
            const data = await res.json();
            console.log(data);
        } else{
            console.log(res.status);
        }
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
}

export const getPokemon = async (id)=>{
    try {
        const endpoint = `${baseUrl}/pokemon/${id}`;
        const res = await fetch(endpoint);
        if(res.ok){
            const data = await res.json();
            console.log(data);
        } else{
            console.log(res.status);
        }
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
}