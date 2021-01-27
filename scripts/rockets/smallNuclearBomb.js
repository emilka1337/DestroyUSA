'use strict';

import Rocket from "./rocketClass/rocket";

export default class SmallNuclearBomb extends Rocket {
    constructor(count = 0) {
        super({
            damage: 5,
            price: 50000,
            accuracy: 0.7,
            title: 'Small Nuclear Bomb',
            description: 'Nuclear bomb destroys everything around',
            imgSrc: './img/rockets/SmallNuclearBomb.png'
        });
        this._count = count;
    }
}