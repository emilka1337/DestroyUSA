"use strict"

import Interface from "../../interface";

export default class Building {
    constructor() {             // время постройки будет основано на Promise
        this._name = 'Undefined building';
        this._price = 0;
        this._buildTimeInMs = 0;
        this._count = 0;
        this.owner;
    }

    //#region Getters and Setters
    get price() {
        return this._price;
    }

    set price(value) {
        if (value >= 0 && typeof (value) == 'number') {
            this._price = value;
        } else throw new Error("Error setting building price");
    }

    get buildTimeInMs() {
        return this._buildTimeInMs;
    }

    set buildTimeInMs(value) {
        if (value >= 0 && typeof (value) == 'number') {
            this._buildTimeInMs = value;
        } else throw new Error("Error setting build time in milliseconds");
    }

    get buildTimeInMinutes() {
        return this._buildTimeInMs / 60000;
    }

    set buildTimeInMinutes(value) {
        if (value >= 0 && typeof (value) == 'number') {
            this._buildTimeInMs = value * 60000;
        } else throw new Error("Error setting build time in minutes");
    }

    get count() {
        return this._count;
    }

    set count(value) {
        if (value >= 0 && typeof (value) == 'number') {
            this._count = value;
        } else {
            throw new Error("Incorrect Buildings count value");
        }
    }

    get name() {
        return this._name;
    }
    //#endregion

    build(callback) {
        try {
            this.owner.money -= this.price;

            Interface.createPopup({
                text: `Building of <b>${this.name}</b> for player <b>${this.owner.nickname}</b> has started. Please, wait ${this.buildTimeInMinutes} minutes...`,
                timeout: 4000
            });

            console.log(this._buildTimeInMs);

            let buildProcess = new Promise(
                (resolve) => {
                    setTimeout(
                        () => {
                            this.count += 1;
                            callback();
                            resolve();
                        },
                        this._buildTimeInMs
                    );
                }
            );

            buildProcess.then(() => Interface.createPopup({
                text: `Building of <b>${this._name}</b> for player <b>${this.owner.nickname}</b> has successfully completed!`,
                timeout: 5000
            }));
        } catch {
            Interface.createPopup({
                text: "Not enough <b>money</b> to build this building"
            });
        }
    }

    demolish(callback) {
        try {
            this.count -= 1;
            Interface.createPopup({
                text: `${this._name} has been demolished!`
            })
            callback();
        } catch {
            Interface.createPopup({
                text: "Nothing to demolish yet!"
            });
        }
    }
}