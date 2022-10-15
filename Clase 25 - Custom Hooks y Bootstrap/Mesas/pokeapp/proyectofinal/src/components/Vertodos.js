import { BrowserRouter, Route, Routes, Router, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonList } from "../data/pokemonService";
import useFetch from "./useFetch";
import PokemonCard from "./PokemonCard"
import styles from "../styles/Pokemon.module.css"

export default function Vertodos() {
    const [pokemonList, setPokemonList] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        console.log("page: " + page);
        getPokemonList(page).then((results) => {
            setPokemonList(results);
        });
    }, [page]);

    return (
        <>
            <h1> -- Ver todos --</h1>
            <div className={styles.container}>
                {pokemonList.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
            <button onClick={() => { setPage(page - 1); }} > Anterior </button>
            <button onClick={() => { setPage(page + 1); }} > Siguiente </button>
        </>
    );
}
