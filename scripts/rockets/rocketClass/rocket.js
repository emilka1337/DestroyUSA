'use strict'

import { game, kim, kimInventory, trump } from "../..";
import Interface from "../../interface";
import Methods from "../../methods";

import TrumpReactions from "../../trumpReactions/trumpReactions";

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
        if (count >= 0 && typeof (count) == 'number') {
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
            kim.money -= this.price;
            Interface.displayMoney(kim.money);
            this.count += 1;
            console.log(this);
            Interface.changeRocketCountInStore(relativeBuyButton, this.count);
            this.select();
        } catch {
            // Interface.createPopup(`Not enough <b>money</b> to buy this weaphon! You need at least <b>${this.price}$</b>`, 'info', 3500);
            Interface.createPopup({
                text: `Not enough <b>money</b> to buy this weaphon! You need at least <b>${this.price}$</b>`,
                color: 'info',
                timeout: 3500
            });
        }
    }

    use() {                                               // ПОКА МЕТОД МОЖЕТ УМЕНЬШАТЬ ТОЛЬКО ЗДОРОВЬЕ ТРАМПА!!!!
        try {
            this.count -= 1;
            console.log(this);

            Interface.changeRocketCountInStore(this.relativeSelectButton, this.count);
            Interface.changeSelectedRocket(this.title, this.count);

            if (Math.random() < this.accuracy) {

                /*Расчёт урона*/
                let critChance = Math.random();

                if (critChance <= 0.1) {
                    if (critChance <= 0.05) {
                        if (critChance <= 0.01) {
                            trump.health <= this.damage * 5;   // Крит (шанс 1%), множитель урона 5х
                        } else {
                            trump.health -= this.damage * 4;   // Крит (шанс 5%), множитель урона 4х
                        }
                    } else {
                        trump.health -= this.damage * 3;   // Крит (шанс 10%), множитель урона 3х
                    }
                } else {
                    trump.health -= this.damage;       // Стандартный урон без крита
                }
                /*Расчёт урона окончен*/

                Interface.changeTrumpHP(trump.health);
                // Interface.createPopup(`<b>Trump: </b>${TrumpReactions.GenerateAngerPhrase()}`, 'danger');
                Interface.createPopup({
                    text: `<b>Trump: </b>${TrumpReactions.GenerateAngryPhrase()}`,
                    imgSrc: TrumpReactions.generateAngryPhoto(),
                    color: 'danger'
                });
                game.checkGameStatus();

                return true;
            } else {
                // Interface.createPopup(`<b>Trump: </b>${TrumpReactions.GenerateHappyPhrase()}`, 'danger');
                Interface.createPopup({
                    text: `<b>Trump: </b>${TrumpReactions.GenerateHappyPhrase()}`,
                    imgSrc: TrumpReactions.generateHappyPhoto(),
                    color: 'danger'
                });
                return false;
            }
        }
        catch {
            // Interface.createPopup('You have <b>NO</b> that type of rockets!', 'info');
            Interface.createPopup({
                text: 'You have <b>NO</b> that type of rockets!',
                color: 'info',
            });
            return false;
        }
    }

    select() {
        kimInventory.selectedRocket = this;
        Interface.changeSelectedRocket(this.title, this.count);
        console.log(this);
    }
}