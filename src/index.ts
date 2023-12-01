import express from 'express';
import { getPokemonData } from './api/PokeAPI';
import { Game } from './classes/Game';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/battle', async (req, res) => {
    const { pokemon1, pokemon2 } = req.query;

    if (!pokemon1 || !pokemon2) {
        return res.status(400).send('Missing Pokemon names');
    }

    const poke1 = await getPokemonData(pokemon1 as string);
    const poke2 = await getPokemonData(pokemon2 as string);

    const game = new Game(poke1, poke2);
    const result = await game.startBattle();

    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
