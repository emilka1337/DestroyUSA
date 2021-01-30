'use strict';
import { game, kimInventory, settings } from './index';
import Interface from './interface';

export default class AddEventListener {
    static AllListeners() {
        this.ToStartButton();
        this.ToStartInInventoryButton();
        this.ToLaunchButton();
        this.ToToggleInventoryButton();
        this.ToCloseInventoryButton();
        this.ToSettingsButton();
    }

    static ToStartButton() {
        document.getElementById('startGame').addEventListener('click', () => {
            game.startGame();
        });
    }

    static ToStartInInventoryButton() {
        document.getElementById('rocketsInventoryStartGame').addEventListener('click', () => {
            game.startGame();
        })
    }

    static ToLaunchButton() {
        document.getElementById('bigButton').addEventListener('click', () => {
            if (game.gameStarted && !game.gameOver) {
                kimInventory.selectedRocket.use();
            } else if (!game.gameStarted) {
                Interface.createPopup({
                    text: 'Not so fast! Press <b>Start Game</b> firts :D',
                    color: 'info'
                });
            } else if (game.gameOver) {
                Interface.createPopup({
                    text: 'Kimmy, calm down!\n<b>Game</b> is already <b>over</b>! :D',
                    color: 'success'
                });
            }
        });
    }

    static ToToggleInventoryButton() {
        document.getElementById('inventoryButton').addEventListener('click', () => Interface.toggleInventory());
    }

    static ToCloseInventoryButton() {
        document.getElementById('closeInventoryTab').addEventListener('click', () => Interface.hideInventory());
    }

    //#region Settings
    static ToSettingsButton() {
        document.getElementById('settingsButton').addEventListener('click', () => Interface.toggleSettings());
    }

    static ToColorSchemeButton() {
        settings.colorScheme = !settings.colorScheme;
    }
    //#endregion
}