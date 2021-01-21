'use strict';

import { kim, trump } from ".";
import Interface from "./interface";
import Progress from './progress';

export default class Game {
    startGame() {
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
            alert("CONGRATULATIONS!!! USA HAS BEEN SUCCESSFULLY DESTROYED!!!");
        }
    }

    _checkForLose() {
        if (kim.health <= 0) {
            alert("Shit... You lost this war...");
        }
    }

    checkGameStatus() {
        this._checkForWin();
        this._checkForLose();
    }
}