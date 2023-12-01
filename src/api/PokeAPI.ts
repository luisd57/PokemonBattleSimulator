import fetch from 'node-fetch';
import { Pokemon, CombatStats } from '../classes/Pokemon';

export const getPokemonData = async (pokemonName: string): Promise<Pokemon> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Pokemon not found: ${pokemonName}`);
    }
    const pokemonData = await response.json();

    const stats: CombatStats = {
        attack: Math.floor(Math.random() * 100) + 1,
        defense: Math.floor(Math.random() * 100) + 1,
        speed: Math.floor(Math.random() * 100) + 1,
    };

    const lifePoints = Math.floor(Math.random() * 100) + 100;

    return new Pokemon(pokemonData.name, 'unknown', stats, lifePoints);
};
