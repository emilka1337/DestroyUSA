'use strict';
import { game } from './index';

export default class Progress {
    static saveGame() {
        let toSave = {
            game: game,
            // inventory: inventory
        }

        localStorage.setItem('DestroyUSA', JSON.stringify(toSave));
    }

    static autoSaveGame(milliseconds) {
        setInterval(this.saveGame, milliseconds);
    }

    static autoLoadGame() {
        if (localStorage.getItem('DestroyUSA')) {
            // let saved = JSON.parse(localStorage.getItem('DestroyUSA'));

            // game.money = saved.game._money;
            // game.score = saved.game._score;
            // game.income = saved.game._income;
            // game.kimHealth = saved.game._kimHealth;
            // game.trumpHealth = saved.game._trumpHealth;

            // inventory.rockets = savedRockets;
            // inventory.airDefence = saved.inventory._airDefence;
            // Object.assign(inventory.rockets, saved.inventory._rockets);
            // Object.assign(inventory._airDefence, saved.inventory._airDefence);

            // console.log(inventory);
        }
    }

    static resetGame() {
        if (confirm("Are you sure you want to RESET the game? All progress will be erased.")) {
            localStorage.removeItem('DestroyUSA');
            game = new Game(10000);
            location.reload();
        }
    }
}