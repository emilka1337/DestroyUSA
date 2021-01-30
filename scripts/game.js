'use strict';

import { kim, trump, kimBuildings, trumpBuildings } from ".";
import Interface from "./interface";
import Progress from './progress';

export default class Game {
    constructor(settings) {
        this._settings = settings;
        this.gameStarted = false;
        this.gameOver = false;
    }

    startGame() {
        this.gameStarted = true;

        if (this._settings.autoload) {
            // Progress.autoLoadGame();
        }

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
        }, 1000);

        setInterval(() => {
            kimBuildings.owner.smallHospital.processRegeneration();
        }, 1000);

        // Progress.autoSaveGame(10000);
        this._checkForAutosaveEnabled();
    }

    _checkForWin() {
        if (trump.health <= 0) {
            for (let i = 0; i < 3; i++) {
                Interface.createPopup({
                    color: 'success',
                    text: "<b>CONGRATULATIONS!!! USA HAS BEEN SUCCESSFULLY DESTROYED!!!</b>",
                    imgSrc: 'img/popup/Rena.jpg',
                    timeout: 0
                });
            }
        }
    }

    _checkForLose() {
        if (kim.health <= 0) {
            Interface.createPopup({
                color: 'danger',
                text: "Shit... You lost this war...",
                timeout: 0
            });
        }
    }

    checkGameStatus() {
        this._checkForWin();
        this._checkForLose();
    }

    _checkForAutosaveEnabled() {
        if (!this._settings.autosave) {
            Interface.createPopup({
                text: '<b>Notice:</b> Autosave is turned off!',
                color: 'info',
                timeout: 5000
            });
        }
    }
}