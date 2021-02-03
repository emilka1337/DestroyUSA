"use strict";

import Hospital from "./hospitalClass/hospital";

export default class SmallHospital extends Hospital {
    constructor(owner, count) {
        super();
        this._name = "Small Hospital";
        this._price = 50000;
        this._regeneration = 0.05;
        this.buildTimeInMinutes = 1;
        // this.buildTimeInMinutes = 0.1;
        this._count = count;
        this.owner = owner;
    }
}