'use strict';

import { kim, trump, kimBuildings, trumpBuildings, kimInventory } from ".";
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

        this._startIncoming();

        kimBuildings.hospitals.smallHospital.build();
        kimBuildings.hospitals.mediumHospital.build();
        kimBuildings.hospitals.bigHospital.build();
        // trumpBuildings.hospitals.smallHospital.build();
        // trumpBuildings.hospitals.mediumHospital.build();
        // trumpBuildings.hospitals.bigHospital.build();

        this._startRegeneration();

        if (this._settings.autosave) {
            // Progress.autoSaveGame(10000);
        }
        this._checkForAutosaveEnabled();
    }

    _startIncoming() {
        setInterval(() => {
            kim.processIncome();
            trump.processIncome();
        }, 1000);
    }

    _startRegeneration() {
        setInterval(() => {
            kimBuildings.hospitals.smallHospital.processRegeneration();
            trumpBuildings.hospitals.smallHospital.processRegeneration();
            // console.log(kim);
        }, 1000);
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

    _checkForAutosaveEnabled() {
        if (!this._settings.autosave) {
            Interface.createPopup({
                text: '<b>Notice:</b> Autosave is turned off!',
                color: 'info',
                timeout: 5000
            });
        }
    }

    fire() {
        if (this.gameStarted && !this.gameOver) {
            kimInventory.selectedRocket.use();
        } else if (!this.gameStarted) {
            Interface.createPopup({
                text: 'Not so fast! Press <b>Start Game</b> firts :D',
                color: 'info'
            });
        } else if (this.gameOver) {
            Interface.createPopup({
                text: 'Kimmy, calm down!\n<b>Game</b> is already <b>over</b>! :D',
                color: 'success'
            });
        }
    }

    checkGameStatus() {
        this._checkForWin();
        this._checkForLose();
    }
}