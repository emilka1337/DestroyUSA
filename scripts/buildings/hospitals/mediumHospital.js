"use strict";

import Hospital from "./hospitalClass/hospital";

export default class MediumHospital extends Hospital {
    constructor(count) {
        super();
        this._price = 100000;
        this._regeneration = 0.2;
        this.buildTimeInMinutes = 5;
        this._count = count;
    }
}