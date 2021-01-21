'use strict';

import Rocket from "./rocketClass/rocket";

export default class SimpleRocket extends Rocket {
    constructor(count) {
        // super(1, 1000, 0.2, 'Simple Rocket', 'Simple Rocket to fuck Trump\'s ass', './img/rockets/SimpleRocket.png');
        super({
            damage: 1,
            price: 1000,
            accuracy: 0.2,
            title: 'Simple Rocket',
            description: 'Simple Rocket to fuck Trump\'s ass',
            imgSrc: './img/rockets/SimpleRocket.png'
        });
        this._count = count;
    }
}