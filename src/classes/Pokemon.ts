import { Fightable } from "../interfaces/Fightable";

export class Pokemon implements Fightable {
    name: string;
    type: string;
    lifePoints: number;
    combatStats: CombatStats;

    constructor(name: string, type: string, combatStats: CombatStats, lifePoints: number) {
        this.name = name;
        this.type = type;
        this.combatStats = combatStats;
        this.lifePoints = lifePoints;
    }

    basicAttack(target: Pokemon): string {
        const damage = Math.max(0, this.combatStats.attack - target.combatStats.defense + Math.floor(Math.random() * 5));
        target.lifePoints -= damage;

        if (target.lifePoints <= 0) {
            return `${target.name} is defeated!`;
        }

        return `${this.name} deals ${damage} damage to ${target.name}`;
    }
}

export interface CombatStats {
    attack: number;
    defense: number;
    speed: number;
}
