"use strict";

export default class Methods {
    static Random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}