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
        this.owner.health += this.owner.regeneration;
    }

    refreshRegeneration() {
        let newRegeneration = 0;
        let hospitals = this.owner.buildings.hospitals

        for (let hospitalType in hospitals) {
            newRegeneration += hospitals[hospitalType].count * hospitals[hospitalType].regeneration;
        }

        this.owner.regeneration = newRegeneration;
    }

    build() {
        super.build(() => {
            this.refreshRegeneration();
            console.log(`regeneration refreshed: ${this.owner.regeneration}`);
        })
    }
}