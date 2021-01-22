'use strict';
import { game, kimInventory } from './index';
import Interface from './interface';

export default class AddEventListener {
    static AllListeners() {
        this.ToStartButton();
        this.ToStartInInventoryButton();
        this.ToLaunchButton();
        this.ToToggleInventoryButton();
        this.ToCloseInventoryButton();
    }

    static ToStartButton() {
        document.getElementById('startGame').addEventListener('click', () => {
            game.startGame();
        });
    }

    static ToStartInInventoryButton() {
        document.getElementById('rocketsInventoryStartGame').addEventListener('click', () => {
            game.startGame();
            Interface.hideInventory();
        })
    }

    static ToLaunchButton() {
        document.getElementById('bigButton').addEventListener('click', () => {
            if (game.gameStarted) {
                kimInventory.selectedRocket.use();
            } else {
                alert('Not so fast! Press "Start Game" button firts :D');
            }
        })
    }

    static ToToggleInventoryButton() {
        document.getElementById('inventoryButton').addEventListener('click', () => Interface.toggleInventory());
    }

    static ToCloseInventoryButton() {
        document.getElementById('closeInventoryTab').addEventListener('click', () => Interface.hideInventory());
    }
}