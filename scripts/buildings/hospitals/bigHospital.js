"use strict";

import Hospital from "./hospitalClass/hospital";

export default class BigHospital extends Hospital {
    constructor(count) {
        super();
        this._price = 200000;
        this._regeneration = 0.5;
        this.buildTimeInMinutes = 10;
        this._count = count;
    }
}