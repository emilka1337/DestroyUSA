"use strict";

import Methods from "../methods";

export default class TrumpReactions {
    static GenerateAngryPhrase() {
        let anger = [
            "HOOOLY SHIT!!!",
            "FUCK YOU, KIMMY! YOU'RE REALLY ASSHOLE",
            "IT WAS ONE OF MY FAVORITE BUILDINGS...😭",
            "WAIT FOR REVENGE, BITCH!!!",
            "SHIIIIIIIIT",
            "SORRY, KIMMY! I DIDN'T WANT THIS WAR!",
            "OH SHIT! HERE WE GO AGAIN",
            "I THOUGHT WE'RE FRIENDS!"
        ];
        return (anger[Methods.Random(0, anger.length)]);
    }

    static GenerateHappyPhrase() {
        let happy = [
            "HAHAHAHA!",
            "YOU'LL NEVER BEAT ME!!",
            "USA!!! USA!!! USA!!!",
            "WE'LL MAKE AMERICA GREAT AGAIN!",
            "SUCK MY DICK, KIM! HAHAHA"
        ];
        return (happy[Methods.Random(0, happy.length)]);
    }

    static generateHappyPhoto() {
        return `img/popup/trump_happy/TrumpHappy${Methods.Random(1, 9)}.jpg`;
    }

    static generateAngryPhoto() {
        return `img/popup/trump_angry/TrumpAngry${Methods.Random(1, 9)}.jpg`;
    }
}