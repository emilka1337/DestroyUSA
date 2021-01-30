"use strict";

import Building from "../../buildingClass/building";

export default class Hospital extends Building {
    constructor() {
        super();
        this._price;
        this._regeneration;
    }

    get regeneration() {
        return this._regeneration;
    }

    processRegeneration() {
        this.owner.health += this._regeneration;
    }
}