'use strict';

import Rocket from "./rocketClass/rocket";

export default class UndefinedRocket extends Rocket {
    constructor(count) {
        super();
        this._count = count;
    }
}