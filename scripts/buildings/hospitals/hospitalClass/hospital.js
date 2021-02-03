"use strict";

import Building from "../../buildingClass/building";

export default class Hospital extends Building {
    constructor() {
        super();
        this._regeneration;
    }

    get regeneration() {
        return this._regeneration;
    }

    processRegeneration() {
        if (this.owner.health < this.owner.maxHealth - this.owner.regeneration) {
            this.owner.health += this.owner.regeneration;
        } else {
            this.owner.health = this.owner.maxHealth;
        }
    }

    refreshRegeneration() {
        let newRegeneration = 0;
        let hospitals = this.owner.buildings.hospitals

        for (let hospital in hospitals) {
            newRegeneration += hospitals[hospital].count * hospitals[hospital].regeneration;
        }

        this.owner.regeneration = newRegeneration;
    }

    build() {
        super.build(() => {
            this.refreshRegeneration();
            console.log(`regeneration refreshed: ${this.owner.regeneration}`);
        })
    }

    demolish() {
        super.demolish(() => {
            this.refreshRegeneration();
        })
    }
}