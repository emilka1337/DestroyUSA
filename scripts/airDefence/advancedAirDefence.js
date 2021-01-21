"use strict";

import AirDefence from "./airDefenceClass/airDefence";

export default class AdvancedAirDefence extends AirDefence {
    constructor(count) {
        super({
            efficiency: 0.2,
            price: 50000
        });
        this._count = count;
    }
}