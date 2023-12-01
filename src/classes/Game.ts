import { Pokemon } from "./Pokemon";

export class Game {
    private pokemon1: Pokemon;
    private pokemon2: Pokemon;
    private battleLogs: string[] = [];

    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    async startBattle(): Promise<{ winner: string; logs: string[] }> {
        this.battleLogs.push(`Battle started between ${this.pokemon1.name} and ${this.pokemon2.name}`);

        while (this.pokemon1.lifePoints > 0 && this.pokemon2.lifePoints > 0) {
            this.battleLogs.push(this.pokemon1.basicAttack(this.pokemon2));
            this.battleLogs.push(this.pokemon2.basicAttack(this.pokemon1));
            
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        const winner = this.displayWinner();
        // this.battleLogs.push(`Winner is ${winner}`);
        
        return {
            winner: winner,
            logs: this.battleLogs
        };
    }

    private displayWinner(): string {
        return this.pokemon1.lifePoints > 0 ? this.pokemon1.name : this.pokemon2.name;
    }
}
