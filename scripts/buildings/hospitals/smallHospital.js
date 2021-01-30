"use strict";

import Hospital from "./hospitalClass/hospital";

export default class SmallHospital extends Hospital {
    constructor(owner, count) {
        super();
        this._price = 50000;
        this._regeneration = 0.1;
        this.buildTimeInMinutes = 5;
        this._count = count;
        this.owner = owner;
    }
}