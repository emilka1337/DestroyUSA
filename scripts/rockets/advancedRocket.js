'use strict'

import Rocket from "./rocketClass/rocket";

export default class AdvancedRocket extends Rocket {
    constructor(count) {
        // super(3, 3000, 0.4, 'Advanced Rocket', 'Advanced Rocket to fuck Trump\'s ass', './img/rockets/AdvancedRocket.png');
        super({
            damage: 3,
            price: 3000,
            accuracy: 0.4,
            title: 'Advanced Rocket',
            description: 'Advanced Rocket to fuck Trump\'s ass',
            imgSrc: './img/rockets/AdvancedRocket.png'
        });
        this._count = count
    }
}