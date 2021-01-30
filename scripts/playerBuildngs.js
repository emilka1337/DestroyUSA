"use strict";

import SmallHospital from "./buildings/hospitals/smallHospital";

export default class PlayerBuildings {
    constructor(owner) {
        this.owner = owner;

        this.smallHospital = new SmallHospital(owner, 0);
    }
}