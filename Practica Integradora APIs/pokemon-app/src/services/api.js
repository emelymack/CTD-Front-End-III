import { useEffect, useState } from "react";
import axios from 'axios';

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonList = async() => {
  const response = await axios.get(baseUrl);

  const results = response.data.results;
  // console.log(results);
  return results;
}

export const getPokemonSearch = async(pokemonSearch) => {
  const endpoint = `${baseUrl}${pokemonSearch}`;
  const results = await axios.get(endpoint);
  const data = results.data;

  console.log(data);
  return data;
}

export const getPokemonDetail = async(endpoint) => {
  const response = await axios.get(endpoint);
  const data = response.data;
  return data;
}
