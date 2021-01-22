'use strict';

import './game';
import Game from './game';
import Inventory from './inventory';
import AddEventListener from './eventListeners';
import Player from './players/player';
import Interface from './interface';

let game = new Game();

let kimInventory = new Inventory("Kim");
let trumpInventory = new Inventory("Trump");

let kim = new Player({
    name: "Kim", 
    money: 1e6, 
    score: 0, 
    health: 100, 
    defence: 0,
    inventory: kimInventory
});
let trump = new Player({
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

export { game, kim, trump, kimInventory, trumpInventory }

Interface.changeSelectedRocket(kimInventory.selectedRocket.title, kimInventory.selectedRocket.count);

AddEventListener.AllListeners();