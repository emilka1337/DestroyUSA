'use strict';
import {game, kimInventory} from './index';
import Interface from './interface';

export default class AddEventListener {
    static AllListeners() {
        this.ToLaunchButton();
        this.ToToggleInventoryButton();
        this.ToCloseInventoryButton();
    }

    static ToStartButton() {
        document.getElementById('startGame').addEventListener('click', () => {
            game.startGame();
        });
    }

    static ToLaunchButton() {
        document.getElementById('bigButton').addEventListener('click', () => {
            kimInventory.rockets.smallNuclearBomb.use();
        })
    }

    static ToToggleInventoryButton() {
        document.getElementById('inventoryButton').addEventListener('click', () => Interface.toggleInventory());
    }

    static ToCloseInventoryButton() {
        document.getElementById('closeInventoryTab').addEventListener('click', () => Interface.hideInventory());
    }
}