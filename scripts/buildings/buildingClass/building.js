"use strict"

import Interface from "../../interface";

export default class Building {
    constructor() {             // время постройки будет основано на Promise
        this._price;
        this._buildTimeInMs
        this._count;
    }

    //#region Getters and Setters
    get price() {
        return this._price;
    }

    set price(value) {
        if (value >= 0 && typeof(value) == 'number') {
            this._price = value;
        } else throw new Error("Error setting building price");
    }

    get buildTimeInMs() {
        return this._buildTimeInMs;
    }

    set buildTimeInMs(value) {
        if (value >= 0 && typeof(value) == 'number') {
            this._buildTimeInMs = value;
        } else throw new Error("Error setting build time in milliseconds");
    }

    get buildTimeInMinutes() {
        return this._buildTimeInMs / 60000;
    }

    set buildTimeInMinutes(value) {
        if (value >= 0 && typeof(value) == 'number') {
            this._buildTimeInMs = value * 60000;
        } else throw new Error("Error setting build time in minutes");
    }

    get count() {
        return _count;
    }
    //#endregion

    build() {
        this._count += 1;
    }

    demolish() {
        try {
            this.count -= 1;
        } catch {
            Interface.createPopup({
                text: "Nothing to demolish yet!",
                color: 'info'
            });
        }
    }
}