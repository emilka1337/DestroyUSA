'use strict'

import { game } from "../..";
import Interface from "../../interface";

import TrumpPhrases from "../../trumpPhrases/trumpPhrases";

export default class Rocket {                       // Базовый класс для всех типов бомб и ракет
    constructor(rocket = {}) {
        this._damage = rocket.damage || 0;
        this._price = rocket.price || 0;
        this._accuracy = rocket.accuracy || 0;
        this._title = rocket.title || 'Please, give a name to this rocket';
        this._description = rocket.description || 'Please, describe this rocket';
        this._imgSrc = rocket.imgSrc || './img/undefined.gif';
        this._count;
    }

    //#region Getters and Setters
    get count() {
        return this._count;
    }

    set count(count) {
        if (count >= 0 && typeof(count) == 'number') {
            this._count = count;
        } else {
            throw new Error(`Rockets count can't be less than 0`);
        }
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get imgSrc() {
        return this._imgSrc;
    }

    get damage() {
        return this._damage;
    }

    get price() {
        return this._price;
    }

    get accuracy() {
        return this._accuracy;
    }
    //#endregion

    buy(relativeBuyButton) {
        try {
            game.money -= this._price;
            Interface.displayMoney(game.money);
            this.count += 1;
            Interface.changeRocketCountInStore(relativeBuyButton, this._count);
        } catch {
            alert(`Not enough money to buy this weaphon! You need at least ${this._price}$`);
        }
    }

    use() {
        try {
            this.count -= 1;

            if (Math.random() < this._accuracy) {

                /*Расчёт урона*/
                let critChance = Math.random();
                if (critChance <= 0.1) {
                    if (critChance <= 0.05) {
                        if (critChance <= 0.01) {
                            game.trumpHealth <= this._damage * 5;   // Крит (шанс 1%), множитель урона 5х
                        } else {
                            game.trumpHealth -= this._damage * 4;   // Крит (шанс 5%), множитель урона 4х
                        }
                    } else {
                        game.trumpHealth -= this._damage * 3;   // Крит (шанс 10%), множитель урона 3х
                    }
                } else {
                    game.trumpHealth -= this._damage;       // Стандартный урон без крита
                }
                /*Расчёт урона окончен*/

                setTimeout(() => alert(TrumpPhrases.GenerateAngerPhrase()), 500);
                return true;
            } else {
                alert(TrumpPhrases.GenerateHappyPhrase());
                return false;
            }
        } catch {
            alert("You have no that type of rockets!");
            return false;
        }
    }
}