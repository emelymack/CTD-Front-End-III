import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonList = async (page = null) => {
    const limit = 10;
    const offset = limit * page;
    const endpoint = `${baseUrl}${
        page ? `?limit=${limit}&offset=${offset}` : ""
    }`;
    console.log("endpoint");
    console.log(endpoint);
    const response = await axios.get(endpoint);

    //const response = await axios.get(baseUrl);
    const results = response.data.results;
    return results;
};

export const getPokemon = async (pokemonBuscado) => {
    const endpoint = `${baseUrl}${pokemonBuscado}`;
    const response = await axios.get(endpoint);
    const data = response.data;
    return data;
};

export const getPokemonDetail = async (endpoint) => {
    const response = await axios.get(endpoint)
    const data = response.data
    return data
}
