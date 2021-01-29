'use strict';

export default class Settings {
    constructor(settings = {colorScheme, autosave}) {
        this._colorScheme = settings.colorScheme || 'dark';
        this._autosave = settings.autosave || true;
    }
}