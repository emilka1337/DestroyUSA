"use strict";

import Hospital from "./hospitalClass/hospital";

export default class BigHospital extends Hospital {
    constructor(owner, count) {
        super();
        this._name = "Big Hospital";
        this._price = 200000;
        this._regeneration = 0.3;
        this.buildTimeInMinutes = 10;
        // this.buildTimeInMinutes = 0.1;
        this._count = count;
        this.owner = owner;
    }
}