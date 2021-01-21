"use strict";

import Methods from "../methods";

export default class TrumpPhrases {
    static GenerateAngerPhrase() {
        let anger = ["HOOOLY SHIT!!!", "FUCK YOU, KIMMY! YOU'RE REALLY ASSHOLE", "IT WAS ONE OF MY FAVORITE BUILDINGS...😭", "WAIT FOR REVENGE, BITCH!!!", "SHIIIIIIIIT", "SORRY, KIMMY! I DON'T WANTED THIS WAR!"];
        return (anger[Methods.Random(0, anger.length)]);
    }

    static GenerateHappyPhrase() {
        let happy = ["HAHAHAHA!", "YOU'LL NEVER BEAT ME!!", "USA!!! USA!!! USA!!!", "WE'LL MAKE AMERICA GREAT AGAIN!"];
        return (happy[Methods.Random(0, happy.length)]);
    }
}