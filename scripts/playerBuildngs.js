"use strict";

import BigHospital from "./buildings/hospitals/bigHospital";
import MediumHospital from "./buildings/hospitals/mediumHospital";
import SmallHospital from "./buildings/hospitals/smallHospital";

export default class PlayerBuildings {
    constructor(owner) {
        this.owner = owner;

        this.hospitals = {
            smallHospital: new SmallHospital(owner, 0),
            mediumHospital: new MediumHospital(owner, 0),
            bigHospital: new BigHospital(owner, 0)
        };
    }
}