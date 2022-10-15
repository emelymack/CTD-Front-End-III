import { BrowserRouter, Route, Routes, Router, Link } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <h1> -- Header --</h1>
            <h2> Consigna: https://docs.google.com/document/d/1Gd13_cUhsxfzbnMR3rk7t14cYJoYI1t3aMW-QUH6uGc/edit</h2>
            <h2> PokeAPI: https://pokeapi.co/docs/v2#pokemon-section</h2>
            <Link to="/" > Info </Link>
            <br />
            <Link to="/buscar" > Buscar </Link>
            <br />
            <Link to="/vertodos" > Ver todos </Link>
        </header>
    )

}