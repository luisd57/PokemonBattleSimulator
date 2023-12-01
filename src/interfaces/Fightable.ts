import { Pokemon } from "../classes/Pokemon";

export interface Fightable {
    name: string;
    lifePoints: number;
    basicAttack(target: Pokemon): void;
}
