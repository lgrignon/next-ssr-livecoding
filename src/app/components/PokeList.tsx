
import React, { Component, use } from 'react';

interface Pokemon {
    name: string;
    url: string;
    index: number;
    imageUrl: string;
}

async function loadPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
    const result = (await response.json()) as { results: Pokemon[] };

    const pokemons: Pokemon[] = result.results.map(pokemon => {

        pokemon.index = parseInt(pokemon.url.substring(pokemon.url.lastIndexOf('/', pokemon.url.length - 2) + 1, pokemon.url.length - 1));
        return { ...pokemon, imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png` };
    });
    return pokemons;
}

export async function PokeList() {

    // const pokemons = use(loadPokemons());

    const pokemons = await loadPokemons();

    return (<div>
        {pokemons.map(pokemon => (
            <div key={pokemon.name}>
                <img src={pokemon.imageUrl} style={{ verticalAlign: 'middle' }} />
                <a href={pokemon.url}>{pokemon.name}</a></div>
        ))}
    </div>)
}
