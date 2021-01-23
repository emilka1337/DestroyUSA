'use strict';

import { kim, kimInventory, trump, trumpInventory } from ".";
import Interface from "./interface";
import Progress from './progress';

export default class Game {
    constructor() {
        this.gameStarted = false;
        this.gameOver = false;
    }

    startGame() {
        this.gameStarted = true;

        // Progress.autoLoadGame();

        Interface.hideStartButton();
        Interface.reduceHeaderHeightOnStart();
        Interface.displayScore(kim.score);
        Interface.displayMoney(kim.money);
        Interface.displayIncome(kim.income);
        Interface.showPlayersHP();

        Interface.changeKimHP(kim.health);
        Interface.changeTrumpHP(trump.health);

        Interface.fullfillRocketsInventory();

        setInterval(() => {
            kim.processIncome();
            trump.processIncome();
        }, 1000)

        // Progress.autoSaveGame(10000);
    }

    _checkForWin() {
        if (trump.health <= 0) {
            for (let i = 0; i < 5; i++) Interface.createPopup("<b>CONGRATULATIONS!!! USA HAS BEEN SUCCESSFULLY DESTROYED!!!</b>", 'success', 0);
            this._endGame();
        }
    }

    _checkForLose() {
        if (kim.health <= 0) {
            Interface.createPopup("Shit... You lost this war...", 'danger', 0);
            this._endGame();
        }
    }

    checkGameStatus() {
        this._checkForWin();
        this._checkForLose();
    }

    _endGame() {
        this.gameOver = true;

        setTimeout(() => {
            kim = null;
            trump = null;
            kimInventory = null;
            trumpInventory = null;
        }, 3000);
    }
}