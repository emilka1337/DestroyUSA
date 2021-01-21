'use strict';

import { kim, trump } from ".";
import AddEventListener from "./eventListeners";
import Interface from "./interface";
import Progress from './progress';

export default class Game {
    constructor(startMoney) {
        // this._score = 0;
        // this._money = startMoney;
        // this._income = 100;
        // this._kimHealth = 100;
        // this._trumpHealth = 100;
    }

    //#region Getters and Setters
    // get kimHealth() {
    //     return this._kimHealth;
    // }

    // set kimHealth(health) {
    //     if (health > 0 && health <= 100 && typeof (health) == "number") {
    //         this._kimHealth = health;
    //         Interface.changeKimHP(health);
    //         this.checkForLose();
    //         return true;
    //     } else if (health <= 0 && health <= 100 && typeof (health) == "number") {
    //         this._kimHealth = health;
    //         Interface.changeKimHP(health);
    //         this.checkForLose();
    //         return true;
    //     }
    //     else throw new Error('property "kimHealth" can only be of type "number"');
    // }

    // get trumpHealth() {
    //     return this._trumpHealth;
    // }

    // set trumpHealth(health) {
    //     if (health > 0 && health <= 100 && typeof (health) == "number") {
    //         this._trumpHealth = health;
    //         Interface.changeTrumpHP(health);
    //         return true;
    //     } else if (health <= 0 && typeof (health) == "number") {
    //         this._trumpHealth = health;
    //         Interface.changeTrumpHP(health);
    //         this.checkForWin();
    //         return true;
    //     } else throw new Error('property "trumpHealth" can only be of type "number"');
    // }

    
    //#endregion

    startGame() {
        // Progress.autoLoadGame();

        Interface.hideStartButton();
        Interface.reduceHeaderHeightOnStart();
        Interface.displayScore(this._score);
        Interface.displayMoney(kim.money);
        Interface.displayIncome(kim.income);
        Interface.showPlayersHP();
        
        Interface.changeKimHP(kim.health);
        Interface.changeTrumpHP(trump.health);

        Interface.fullfillRocketsInventory();

        setInterval(() => {
            // this._processIncome(), 1000);
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