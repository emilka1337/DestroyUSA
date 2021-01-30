'use strict';

import './game';
import Game from './game';
import Inventory from './inventory';
import AddEventListener from './eventListeners';
import Player from './players/player';
import Interface from './interface';
import Settings from './settings';

const settings = new Settings({
    darkColorScheme: true,
    animations: true,
    autosave: true,
    autoload: true
});
const game = new Game(settings);

const kimInventory = new Inventory("Kim");
const trumpInventory = new Inventory("Trump");

const kim = new Player({
    name: "Kim", 
    money: 1e8, 
    score: 0, 
    health: 100, 
    defence: 0,
    inventory: kimInventory
});
const trump = new Player({
    name: "Trump", 
    money: 1e6, 
    score: 0, 
    health: 100, 
    defence: 0,
    inventory: trumpInventory
});

console.log(kim);
console.log(trump);
console.log(kimInventory);
console.log(trumpInventory);

// console.log(kim.constructor.name);

export { game, kim, trump, kimInventory, trumpInventory, settings }

Interface.changeSelectedRocket(kimInventory.selectedRocket.title, kimInventory.selectedRocket.count);

AddEventListener.AllListeners();