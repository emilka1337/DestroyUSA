"use strict"

import Rocket from "./rocketClass/rocket";

export default class MiddleNuclearBomb extends Rocket {
    constructor(count) {
        // super(7, 75000, 0.8, 'Middle Nuclear Bomb', "Nuclear bomb that has slightly more damage and accuracy", "./img/rockets/MiddleNuclearBomb.png");
        super({
            damage: 7,
            price: 75000,
            accuracy: 0.8,
            title: 'Middle Nuclear Bomb',
            description: 'Nuclear bomb that has slightly more damage and accuracy',
            imgSrc: './img/rockets/MiddleNuclearBomb.png'
        });
        this._count = count
    }
}