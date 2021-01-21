"use strict";

import AirDefence from "./airDefenceClass/airDefence";


export default class SimpleAirDefence extends AirDefence {
    constructor(count) {
        super({
            efficiency: 0.1,
            price: 10000
        });
        this._count = count;
    }
}