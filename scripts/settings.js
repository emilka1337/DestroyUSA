'use strict';

import Interface from "./interface";

export default class Settings {
    constructor(settings = { darkColorScheme, animations, autosave, autoload}) {
        this._colorScheme = settings.darkColorScheme || false;
        this._animations = settings.animations || false;
        this._autosave = settings.autosave || false;
        this._autoload = settings.autoload || false;

        // this._allowedColorSchemes = ['Dark', 'light'];
    }


    //#region Getters and Setters
    get colorScheme() {
        return this._colorScheme;
    }

    set colorScheme(value) {
        if (typeof(value) == 'string' && this.allowedColorSchemes.includes(value)) {
            this._colorScheme = value;
            Interface.toggleColorScheme(this._colorScheme);
        } else {
            throw new Error('Failed to set color scheme');
        }
    }

    get autosave() {
        return this._autosave;
    }

    set autosave(value) {
        if (typeof(value) == 'boolean') {
            this._autosave = value;
        } else {
            throw new Error(`Failed to toggle autosave mode. Autosave is currently set to ${this._autosave}`);
        }
    }

    get animations() {
        return this._animations;
    }

    set animations(value) {
        if (typeof (value) == 'boolean') {
            this._animations = value;
        } else {
            throw new Error(`Failed to toggle animations mode. Animations is currently set to ${this._animations}`);
        }
    }

    get autoload() {
        return this._autoload;
    }

    set autoload(value) {
        if (typeof (value) == 'boolean') {
            this._autoload = value;
        } else {
            throw new Error(`Failed to toggle autoload mode. Autoload is currently set to ${this._autoload}`);
        }
    }
    //#endregion
}