"use strict";

import Hospital from "./hospitalClass/hospital";

export default class MediumHospital extends Hospital {
    constructor(owner, count) {
        super();
        this._name = "Medium Hospital";
        this._price = 100000;
        this._regeneration = 0.15;
        this.buildTimeInMinutes = 5;
        // this.buildTimeInMinutes = 0.1;
        this._count = count;
        this.owner = owner;
    }
}