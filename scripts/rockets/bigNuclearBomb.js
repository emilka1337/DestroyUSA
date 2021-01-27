"use strict";

import Rocket from "./rocketClass/rocket";

export default class BigNuclearBomb extends Rocket {
    constructor(count) {
        super({
            damage: 10,
            price: 1e5,
            accuracy: 0.9,
            title: 'Big Nuclear Bomb',
            description: 'Really BIG nuclear bomb, like Kimmy\'s dick',
            imgSrc: './img/rockets/BigNuclearBomb.jpg'
        });
        this._count = count;
    }
}