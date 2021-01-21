'use strict';

export default class AirDefence {
    // constructor(efficiency, price) {
    constructor(specs) {
        this._efficiency = specs.efficiency || 0;
        this._price = specs.price || 0;
        this._count;
    }

    //#region Getters and Setters
    get efficiency() {
        return this._efficiency;
    }

    get count() {
        return this._count;
    }

    set count(value) {
        if (value >= 0 && typeof(value) == 'number') {
            this._count = value;
        } else {
            throw new Error("Air Defence count can't be less than 0");
        }
    }
    //#endregion

    buy() {
        this._count += 1;
    }
}