"use strict";

export default class Player {
    constructor(player) {
        this._name = player.name || "Unknown Player";
        this._money = player.money || 1e6;
        this._score = player.score || 0;
        this._income = player.income || 100;
        this._defence = player.defence || 0;
        this._inventory = player.inventory;
        this._health = 100;
    }

    //#region Getters and Setters
    get name() {
        return this._name;
    }

    get income() {
        return this._income;
    }

    set income(value) {
        if (typeof (value) == 'number') {
            this._income = value;
            return true;
        }
        else throw new Error('Property "income" can only be of type "number"');
    }

    get score() {
        return this._income;
    }

    set score(value) {
        if (value >= 0 && typeof (value) == "number") {
            this._score = value;
            return true;
        }
        else throw new Error('property "score" can only be of type "number"');
    }

    get money() {
        return this._money;
    }

    set money(value) {
        if (value >= 0 && typeof(value) == 'number') {
            this._money = value;
        } else {
            throw new Error("Money can't be less than 0");
        }
    }

    get defence() {
        return this._defence;
    }

    set defence(value) {
        if (value >= 0 && typeof (value) == 'number') {
            this._defence = value;
        } else {
            throw new Error("Defence can't be less than 0");
        }
    }

    get health() {
        return this._health;
    }

    set health(value) {
        if (value >= 0 && typeof (value) == 'number') {
            this._health = value;
        } else {
            throw new Error("Defence can't be less than 0");
        }
    }
    //#endregion

    _processIncome() {
        this._money += this._income;
        // Interface.displayMoney(this._money);
    }

    calculateDefence() {
        this._defence = this._inventory.calculatePlayerDefence();
    }
}