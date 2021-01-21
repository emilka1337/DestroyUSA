'use strict'

import SimpleRocket from './rockets/simpleRocket';
import AdvancedRocket from './rockets/advancedRocket';
import SimpleAirDefence from './airDefence/simpleAirDefence';
import AdvancedAirDefence from './airDefence/advancedAirDefence';
import SmallNuclearBomb from './rockets/smallNuclearBomb';
import MiddleNuclearBomb from './rockets/middleNuclearBomb';
import BigNuclearBomb from './rockets/bigNuclearBomb';
import UndefinedRocket from './rockets/undefinedRocket';

export default class Inventory {                    // Класс основного инвентаря игры
    constructor(name) {
        this._name = name;
        this._rockets = {
            simpleRocket: new SimpleRocket(5),      // В скобках число указывает количество оборудования у игрока на старте игры
            advancedRocket: new AdvancedRocket(1),
            smallNuclearBomb: new SmallNuclearBomb(0),
            middleNuclearBomb: new MiddleNuclearBomb(0),
            bigNuclearBomb: new BigNuclearBomb(0),
            undefinedRocket: new UndefinedRocket(0)
        };
        this._airDefence = {
            simpleAirDefence: new SimpleAirDefence(0), 
            advancedAirDefence: new AdvancedAirDefence(0)
        };
    }

    //#region Getters and Setters
    get rockets() {
        return this._rockets;
    }

    set rockets(value) {
        if (typeof(value) == "object") {
            this._rockets = value;
        }
    }

    get airDefence() {
        return this._airDefence;
    }

    set airDefence(value) {
        if (typeof(value) == "object") {
            this._airDefence = value;
        }
    }

    get name() {
        return this._name;
    }
    //#endregion

    calculatePlayerDefence() {      // Доработать?
        let simple = (1 - this._airDefence.simpleAirDefence.efficiency) ** this._airDefence.simpleAirDefence.count;
        let advanced = (1 - this._airDefence.advancedAirDefence.efficiency) ** this._airDefence.advancedAirDefence.count;

        let successfulAttackChance = +(simple * advanced).toFixed(3);

        return successfulAttackChance;
    }
}