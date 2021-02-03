'use strict';
import { game, settings } from './index';
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
        document.getElementById('bigButton').addEventListener('click', () => game.fire());
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