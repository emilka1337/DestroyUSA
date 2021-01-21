/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/airDefence/advancedAirDefence.js":
/*!**************************************************!*\
  !*** ./scripts/airDefence/advancedAirDefence.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AdvancedAirDefence\n/* harmony export */ });\n/* harmony import */ var _airDefenceClass_airDefence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airDefenceClass/airDefence */ \"./scripts/airDefence/airDefenceClass/airDefence.js\");\n\r\n\r\n\r\n\r\nclass AdvancedAirDefence extends _airDefenceClass_airDefence__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(count) {\r\n        super({\r\n            efficiency: 0.2,\r\n            price: 50000\r\n        });\r\n        this._count = count;\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/airDefence/advancedAirDefence.js?");

/***/ }),

/***/ "./scripts/airDefence/airDefenceClass/airDefence.js":
/*!**********************************************************!*\
  !*** ./scripts/airDefence/airDefenceClass/airDefence.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AirDefence\n/* harmony export */ });\n\r\n\r\nclass AirDefence {\r\n    // constructor(efficiency, price) {\r\n    constructor(specs) {\r\n        this._efficiency = specs.efficiency || 0;\r\n        this._price = specs.price || 0;\r\n        this._count;\r\n    }\r\n\r\n    //#region Getters and Setters\r\n    get efficiency() {\r\n        return this._efficiency;\r\n    }\r\n\r\n    get count() {\r\n        return this._count;\r\n    }\r\n\r\n    set count(value) {\r\n        if (value >= 0 && typeof(value) == 'number') {\r\n            this._count = value;\r\n        } else {\r\n            throw new Error(\"Air Defence count can't be less than 0\");\r\n        }\r\n    }\r\n    //#endregion\r\n\r\n    buy() {\r\n        this._count += 1;\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/airDefence/airDefenceClass/airDefence.js?");

/***/ }),

/***/ "./scripts/airDefence/simpleAirDefence.js":
/*!************************************************!*\
  !*** ./scripts/airDefence/simpleAirDefence.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ SimpleAirDefence\n/* harmony export */ });\n/* harmony import */ var _airDefenceClass_airDefence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airDefenceClass/airDefence */ \"./scripts/airDefence/airDefenceClass/airDefence.js\");\n\r\n\r\n\r\n\r\n\r\nclass SimpleAirDefence extends _airDefenceClass_airDefence__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(count) {\r\n        super({\r\n            efficiency: 0.1,\r\n            price: 10000\r\n        });\r\n        this._count = count;\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/airDefence/simpleAirDefence.js?");

/***/ }),

/***/ "./scripts/eventListeners.js":
/*!***********************************!*\
  !*** ./scripts/eventListeners.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AddEventListener\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./scripts/index.js\");\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ \"./scripts/interface.js\");\n\r\n\r\n\r\n\r\nclass AddEventListener {\r\n    static AllListeners() {\r\n        this.ToLaunchButton();\r\n        this.ToToggleInventoryButton();\r\n        this.ToCloseInventoryButton();\r\n    }\r\n\r\n    static ToStartButton() {\r\n        document.getElementById('startGame').addEventListener('click', () => {\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.game.startGame();\r\n        });\r\n    }\r\n\r\n    static ToLaunchButton() {\r\n        document.getElementById('bigButton').addEventListener('click', () => {\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.kimInventory.rockets.smallNuclearBomb.use();\r\n        })\r\n    }\r\n\r\n    static ToToggleInventoryButton() {\r\n        document.getElementById('inventoryButton').addEventListener('click', () => _interface__WEBPACK_IMPORTED_MODULE_1__.default.toggleInventory());\r\n    }\r\n\r\n    static ToCloseInventoryButton() {\r\n        document.getElementById('closeInventoryTab').addEventListener('click', () => _interface__WEBPACK_IMPORTED_MODULE_1__.default.hideInventory());\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/eventListeners.js?");

/***/ }),

/***/ "./scripts/game.js":
/*!*************************!*\
  !*** ./scripts/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Game\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./scripts/index.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ \"./scripts/eventListeners.js\");\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ \"./scripts/interface.js\");\n/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress */ \"./scripts/progress.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor(startMoney) {\r\n        // this._score = 0;\r\n        // this._money = startMoney;\r\n        // this._income = 100;\r\n        // this._kimHealth = 100;\r\n        // this._trumpHealth = 100;\r\n    }\r\n\r\n    //#region Getters and Setters\r\n    // get kimHealth() {\r\n    //     return this._kimHealth;\r\n    // }\r\n\r\n    // set kimHealth(health) {\r\n    //     if (health > 0 && health <= 100 && typeof (health) == \"number\") {\r\n    //         this._kimHealth = health;\r\n    //         Interface.changeKimHP(health);\r\n    //         this.checkForLose();\r\n    //         return true;\r\n    //     } else if (health <= 0 && health <= 100 && typeof (health) == \"number\") {\r\n    //         this._kimHealth = health;\r\n    //         Interface.changeKimHP(health);\r\n    //         this.checkForLose();\r\n    //         return true;\r\n    //     }\r\n    //     else throw new Error('property \"kimHealth\" can only be of type \"number\"');\r\n    // }\r\n\r\n    // get trumpHealth() {\r\n    //     return this._trumpHealth;\r\n    // }\r\n\r\n    // set trumpHealth(health) {\r\n    //     if (health > 0 && health <= 100 && typeof (health) == \"number\") {\r\n    //         this._trumpHealth = health;\r\n    //         Interface.changeTrumpHP(health);\r\n    //         return true;\r\n    //     } else if (health <= 0 && typeof (health) == \"number\") {\r\n    //         this._trumpHealth = health;\r\n    //         Interface.changeTrumpHP(health);\r\n    //         this.checkForWin();\r\n    //         return true;\r\n    //     } else throw new Error('property \"trumpHealth\" can only be of type \"number\"');\r\n    // }\r\n\r\n    \r\n    //#endregion\r\n\r\n    startGame() {\r\n        // Progress.autoLoadGame();\r\n\r\n        _interface__WEBPACK_IMPORTED_MODULE_2__.default.hideStartButton();\r\n        _interface__WEBPACK_IMPORTED_MODULE_2__.default.reduceHeaderHeightOnStart();\r\n        _interface__WEBPACK_IMPORTED_MODULE_2__.default.displayScore(this._score);\r\n        _interface__WEBPACK_IMPORTED_MODULE_2__.default.displayMoney(___WEBPACK_IMPORTED_MODULE_0__.kim.money);\r\n        _interface__WEBPACK_IMPORTED_MODULE_2__.default.displayIncome(___WEBPACK_IMPORTED_MODULE_0__.kim.income);\r\n        _interface__WEBPACK_IMPORTED_MODULE_2__.default.showPlayersHP();\r\n        // Interface.changeKimHP(this._kimHealth);\r\n        // Interface.changeTrumpHP(this._trumpHealth);\r\n        \r\n        _interface__WEBPACK_IMPORTED_MODULE_2__.default.changeKimHP(___WEBPACK_IMPORTED_MODULE_0__.kim.health);\r\n        _interface__WEBPACK_IMPORTED_MODULE_2__.default.changeTrumpHP(___WEBPACK_IMPORTED_MODULE_0__.trump.health);\r\n\r\n        setInterval(() => {\r\n            // this._processIncome(), 1000);\r\n            ___WEBPACK_IMPORTED_MODULE_0__.kim.processIncome();\r\n            ___WEBPACK_IMPORTED_MODULE_0__.trump.processIncome();\r\n        }, 1000)\r\n\r\n        // Progress.autoSaveGame(10000);\r\n    }\r\n\r\n    _checkForWin() {\r\n        if (___WEBPACK_IMPORTED_MODULE_0__.trump.health <= 0) {\r\n            alert(\"CONGRATULATIONS!!! USA HAS BEEN SUCCESSFULLY DESTROYED!!!\");\r\n        }\r\n    }\r\n\r\n    _checkForLose() {\r\n        if (___WEBPACK_IMPORTED_MODULE_0__.kim.health <= 0) {\r\n            alert(\"Shit... You lost this war...\");\r\n        }\r\n    }\r\n\r\n    checkGameStatus() {\r\n        this._checkForWin();\r\n        this._checkForLose();\r\n    }\r\n\r\n    // _processIncome() {\r\n    //     this._money += this._income;\r\n    //     Interface.displayMoney(this._money);\r\n    // }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/game.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => /* binding */ game,\n/* harmony export */   \"kim\": () => /* binding */ kim,\n/* harmony export */   \"trump\": () => /* binding */ trump,\n/* harmony export */   \"kimInventory\": () => /* binding */ kimInventory,\n/* harmony export */   \"trumpInventory\": () => /* binding */ trumpInventory\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./scripts/game.js\");\n/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory */ \"./scripts/inventory.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ \"./scripts/eventListeners.js\");\n/* harmony import */ var _players_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players/player */ \"./scripts/players/player.js\");\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface */ \"./scripts/interface.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\nlet kimInventory = new _inventory__WEBPACK_IMPORTED_MODULE_1__.default(\"Kim\");\r\nlet trumpInventory = new _inventory__WEBPACK_IMPORTED_MODULE_1__.default(\"Trump\");\r\n\r\nlet kim = new _players_player__WEBPACK_IMPORTED_MODULE_3__.default({\r\n    name: \"Kim\", \r\n    money: 1e6, \r\n    score: 0, \r\n    health: 100, \r\n    defence: 0,\r\n    inventory: kimInventory\r\n});\r\nlet trump = new _players_player__WEBPACK_IMPORTED_MODULE_3__.default({\r\n    name: \"Trump\", \r\n    money: 1e6, \r\n    score: 0, \r\n    health: 100, \r\n    defence: 0,\r\n    inventory: trumpInventory\r\n});\r\n\r\nkimInventory.airDefence.simpleAirDefence.buy();\r\nkimInventory.airDefence.simpleAirDefence.buy();\r\nkimInventory.airDefence.simpleAirDefence.buy();\r\n\r\nconsole.log(kim);\r\nconsole.log(trump);\r\nconsole.log(kimInventory);\r\nconsole.log(trumpInventory);\r\nconsole.log(kimInventory.calculatePlayerDefence());\r\nconsole.log(trumpInventory.calculatePlayerDefence());\r\n\r\n\r\n\r\n_interface__WEBPACK_IMPORTED_MODULE_4__.default.fullfillRocketsInventory();\r\n\r\n_eventListeners__WEBPACK_IMPORTED_MODULE_2__.default.ToStartButton();\r\n_eventListeners__WEBPACK_IMPORTED_MODULE_2__.default.AllListeners();\n\n//# sourceURL=webpack://destroyusa/./scripts/index.js?");

/***/ }),

/***/ "./scripts/interface.js":
/*!******************************!*\
  !*** ./scripts/interface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Interface\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./scripts/index.js\");\n\r\n\r\n\r\n\r\nclass Interface {    // Работа с интерфейсом и непосредственно с веб-страницей\r\n    //#region On game start\r\n    static hideStartButton() {\r\n        document.getElementById('startGame').style.display = 'none';\r\n    }\r\n\r\n    static reduceHeaderHeightOnStart() {\r\n        document.getElementById('siteHeader').style.height = '15%';\r\n        document.getElementById('siteFooter').style.height = '20%';\r\n    }\r\n    //#endregion\r\n\r\n    //#region Score and money\r\n    static displayScore(score) {\r\n        document.getElementById('gameScore').innerHTML = `Score: ${score}`;\r\n    }\r\n\r\n    static displayIncome(income) {\r\n        document.getElementById('gameIncome').innerHTML = `Income: ${income}$/sec.`;\r\n        this.styleIncome(income);\r\n    }\r\n\r\n    static styleIncome(income) {\r\n        let incomeText = document.getElementById('gameIncome');\r\n\r\n        if (income > 0) {\r\n            incomeText.style.color = 'lime';\r\n        } else if (income < 0) {\r\n            incomeText.style.color = 'red';\r\n        } else {\r\n            incomeText.style.color = 'yellow';\r\n        }\r\n    }\r\n\r\n    static displayMoney(money) {\r\n        document.getElementById('gameMoney').innerHTML = `Money: ${money}$`;\r\n    }\r\n    //#endregion\r\n\r\n    //#region HP\r\n    static showPlayersHP() {\r\n        let hp = document.getElementsByClassName('players-hp');\r\n\r\n        for (let playerHP of hp) {\r\n            playerHP.style.display = 'flex';\r\n        }\r\n    }\r\n\r\n    static changeKimHP(hp) {\r\n        document.getElementById('kimHPGraph').style.width = `${hp}%`;\r\n        document.getElementById('kimHP').innerHTML = hp;\r\n    }\r\n\r\n    static changeTrumpHP(hp) {\r\n        document.getElementById('trumpHPGraph').style.width = `${hp}%`;\r\n        document.getElementById('trumpHP').innerHTML = hp;\r\n    }\r\n    //#endregion\r\n\r\n    //#region Inventory visibility\r\n    static showInventory() {\r\n        document.getElementById('inventoryContainer').classList.remove('d-none');\r\n    }\r\n\r\n    static hideInventory() {\r\n        document.getElementById('inventoryContainer').classList.add('d-none');\r\n    }\r\n\r\n    static toggleInventory() {\r\n        document.getElementById('inventoryContainer').classList.toggle('d-none');\r\n    }\r\n    //#endregion\r\n\r\n    //#region Rockets store\r\n    static createRocketStoreCard(rocket) {\r\n        let card = document.createElement('div');\r\n        card.className = 'card my-3';\r\n        card.style.width = '18rem';\r\n\r\n        let img = document.createElement('img');\r\n        img.src = rocket.imgSrc;\r\n        img.className = 'card-img-top';\r\n        img.style.width = '17,99rem';\r\n        img.style.height = '300px';\r\n\r\n        let cardBody = document.createElement('div');\r\n        cardBody.className = 'card-body d-flex flex-column';\r\n\r\n        let cardHeading = document.createElement('h5');\r\n        cardHeading.className = 'card-title';\r\n        cardHeading.innerText = `${rocket.title}`;\r\n        cardHeading.style.color = 'black';\r\n\r\n        let cardDescription = document.createElement('p');\r\n        cardDescription.className = 'card-text';\r\n        cardDescription.innerText = `${rocket.description}`;\r\n        cardDescription.style.color = 'black';\r\n\r\n        let damage = document.createElement('p');\r\n        damage.style.color = 'black';\r\n        damage.style.marginBottom = '5px';\r\n        damage.innerHTML = `<b>Damage:</b> ${rocket.damage} HP`;\r\n\r\n        let accuracy = document.createElement('p');\r\n        accuracy.style.color = 'black';\r\n        accuracy.style.marginBottom = '5px';\r\n        accuracy.innerHTML = `<b>Accuracy:</b> ${rocket.accuracy * 100}%`;\r\n\r\n        let youHave = document.createElement('p');\r\n        youHave.style.color = 'black';\r\n        youHave.style.marginBottom = '5px';\r\n        youHave.innerHTML = `<b>You have: </b> ${rocket.count}`;\r\n\r\n        let buyButton = document.createElement('a');\r\n        buyButton.className = 'btn btn-primary';\r\n        buyButton.innerText = `${rocket.price}$`;\r\n        buyButton.style.color = '#fff';\r\n        buyButton.style.justifySelf = 'flex-end';\r\n        buyButton.onclick = () => rocket.buy(buyButton);\r\n\r\n        card.appendChild(img);\r\n        card.appendChild(cardBody);\r\n        cardBody.appendChild(cardHeading);\r\n        cardBody.appendChild(cardDescription);\r\n        cardBody.appendChild(damage);\r\n        cardBody.appendChild(accuracy);\r\n        cardBody.appendChild(youHave);\r\n        cardBody.appendChild(buyButton);\r\n\r\n        return card;\r\n    }\r\n\r\n    static fullfillRocketsInventory() {\r\n        let rockets = ___WEBPACK_IMPORTED_MODULE_0__.kimInventory.rockets;\r\n\r\n        for (let i in rockets) {\r\n            let rocket = rockets[i];\r\n            document.getElementById('rocketsInventory').appendChild(this.createRocketStoreCard(rocket));\r\n        }\r\n    }\r\n\r\n    static changeRocketCountInStore(buyButton, count) {\r\n        buyButton.parentElement.children[4].innerHTML = `<b>You have: </b> ${count}`;\r\n    }\r\n    //#endregion\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/interface.js?");

/***/ }),

/***/ "./scripts/inventory.js":
/*!******************************!*\
  !*** ./scripts/inventory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Inventory\n/* harmony export */ });\n/* harmony import */ var _rockets_simpleRocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rockets/simpleRocket */ \"./scripts/rockets/simpleRocket.js\");\n/* harmony import */ var _rockets_advancedRocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rockets/advancedRocket */ \"./scripts/rockets/advancedRocket.js\");\n/* harmony import */ var _airDefence_simpleAirDefence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airDefence/simpleAirDefence */ \"./scripts/airDefence/simpleAirDefence.js\");\n/* harmony import */ var _airDefence_advancedAirDefence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./airDefence/advancedAirDefence */ \"./scripts/airDefence/advancedAirDefence.js\");\n/* harmony import */ var _rockets_smallNuclearBomb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rockets/smallNuclearBomb */ \"./scripts/rockets/smallNuclearBomb.js\");\n/* harmony import */ var _rockets_middleNuclearBomb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rockets/middleNuclearBomb */ \"./scripts/rockets/middleNuclearBomb.js\");\n/* harmony import */ var _rockets_bigNuclearBomb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rockets/bigNuclearBomb */ \"./scripts/rockets/bigNuclearBomb.js\");\n/* harmony import */ var _rockets_undefinedRocket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rockets/undefinedRocket */ \"./scripts/rockets/undefinedRocket.js\");\n\r\n\r\n;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Inventory {                    // Класс основного инвентаря игры\r\n    constructor(name) {\r\n        this._name = name;\r\n        this._rockets = {\r\n            simpleRocket: new _rockets_simpleRocket__WEBPACK_IMPORTED_MODULE_0__.default(5),      // В скобках число указывает количество оборудования у игрока на старте игры\r\n            advancedRocket: new _rockets_advancedRocket__WEBPACK_IMPORTED_MODULE_1__.default(1),\r\n            smallNuclearBomb: new _rockets_smallNuclearBomb__WEBPACK_IMPORTED_MODULE_4__.default(0),\r\n            middleNuclearBomb: new _rockets_middleNuclearBomb__WEBPACK_IMPORTED_MODULE_5__.default(0),\r\n            bigNuclearBomb: new _rockets_bigNuclearBomb__WEBPACK_IMPORTED_MODULE_6__.default(0),\r\n            undefinedRocket: new _rockets_undefinedRocket__WEBPACK_IMPORTED_MODULE_7__.default(0)\r\n        };\r\n        this._airDefence = {\r\n            simpleAirDefence: new _airDefence_simpleAirDefence__WEBPACK_IMPORTED_MODULE_2__.default(0), \r\n            advancedAirDefence: new _airDefence_advancedAirDefence__WEBPACK_IMPORTED_MODULE_3__.default(0)\r\n        };\r\n    }\r\n\r\n    //#region Getters and Setters\r\n    get rockets() {\r\n        return this._rockets;\r\n    }\r\n\r\n    set rockets(value) {\r\n        if (typeof(value) == \"object\") {\r\n            this._rockets = value;\r\n        }\r\n    }\r\n\r\n    get airDefence() {\r\n        return this._airDefence;\r\n    }\r\n\r\n    set airDefence(value) {\r\n        if (typeof(value) == \"object\") {\r\n            this._airDefence = value;\r\n        }\r\n    }\r\n\r\n    get name() {\r\n        return this._name;\r\n    }\r\n    //#endregion\r\n\r\n    calculatePlayerDefence() {      // Доработать?\r\n        let simple = (1 - this._airDefence.simpleAirDefence.efficiency) ** this._airDefence.simpleAirDefence.count;\r\n        let advanced = (1 - this._airDefence.advancedAirDefence.efficiency) ** this._airDefence.advancedAirDefence.count;\r\n\r\n        let successfulAttackChance = +(simple * advanced).toFixed(3);\r\n\r\n        return successfulAttackChance;\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/inventory.js?");

/***/ }),

/***/ "./scripts/methods.js":
/*!****************************!*\
  !*** ./scripts/methods.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Methods\n/* harmony export */ });\n\r\n\r\nclass Methods {\r\n    static Random(min, max) {\r\n        return Math.floor(Math.random() * (max - min)) + min;\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/methods.js?");

/***/ }),

/***/ "./scripts/players/player.js":
/*!***********************************!*\
  !*** ./scripts/players/player.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Player\n/* harmony export */ });\n\r\n\r\nclass Player {\r\n    constructor(player) {\r\n        this._name = player.name || \"Unknown Player\";\r\n        this._money = player.money || 1e6;\r\n        this._score = player.score || 0;\r\n        this._income = player.income || 100;\r\n        this._defence = player.defence || 0;\r\n        this._inventory = player.inventory;\r\n        this._health = 100;\r\n    }\r\n\r\n    //#region Getters and Setters\r\n    get name() {\r\n        return this._name;\r\n    }\r\n\r\n    get income() {\r\n        return this._income;\r\n    }\r\n\r\n    set income(value) {\r\n        if (typeof (value) == 'number') {\r\n            this._income = value;\r\n            return true;\r\n        }\r\n        else throw new Error('Property \"income\" can only be of type \"number\"');\r\n    }\r\n\r\n    get score() {\r\n        return this._income;\r\n    }\r\n\r\n    set score(value) {\r\n        if (value >= 0 && typeof (value) == \"number\") {\r\n            this._score = value;\r\n            return true;\r\n        }\r\n        else throw new Error('property \"score\" can only be of type \"number\"');\r\n    }\r\n\r\n    get money() {\r\n        return this._money;\r\n    }\r\n\r\n    set money(value) {\r\n        if (value >= 0 && typeof(value) == 'number') {\r\n            this._money = value;\r\n        } else {\r\n            throw new Error(\"Money can't be less than 0\");\r\n        }\r\n    }\r\n\r\n    get defence() {\r\n        return this._defence;\r\n    }\r\n\r\n    set defence(value) {\r\n        if (value >= 0 && typeof (value) == 'number') {\r\n            this._defence = value;\r\n        } else {\r\n            throw new Error(\"Defence can't be less than 0\");\r\n        }\r\n    }\r\n\r\n    get health() {\r\n        return this._health;\r\n    }\r\n\r\n    set health(value) {\r\n        if (value >= 0 && typeof (value) == 'number') {\r\n            this._health = value;\r\n        } else {\r\n            throw new Error(\"Defence can't be less than 0\");\r\n        }\r\n    }\r\n    //#endregion\r\n\r\n    _processIncome() {\r\n        this._money += this._income;\r\n        // Interface.displayMoney(this._money);\r\n    }\r\n\r\n    calculateDefence() {\r\n        this._defence = this._inventory.calculatePlayerDefence();\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/players/player.js?");

/***/ }),

/***/ "./scripts/progress.js":
/*!*****************************!*\
  !*** ./scripts/progress.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Progress\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./scripts/index.js\");\n\r\n\r\n\r\nclass Progress {\r\n    static saveGame() {\r\n        let toSave = {\r\n            game: _index__WEBPACK_IMPORTED_MODULE_0__.game,\r\n            // inventory: inventory\r\n        }\r\n\r\n        localStorage.setItem('DestroyUSA', JSON.stringify(toSave));\r\n    }\r\n\r\n    static autoSaveGame(milliseconds) {\r\n        setInterval(this.saveGame, milliseconds);\r\n    }\r\n\r\n    static autoLoadGame() {\r\n        if (localStorage.getItem('DestroyUSA')) {\r\n            // let saved = JSON.parse(localStorage.getItem('DestroyUSA'));\r\n\r\n            // game.money = saved.game._money;\r\n            // game.score = saved.game._score;\r\n            // game.income = saved.game._income;\r\n            // game.kimHealth = saved.game._kimHealth;\r\n            // game.trumpHealth = saved.game._trumpHealth;\r\n\r\n            // inventory.rockets = savedRockets;\r\n            // inventory.airDefence = saved.inventory._airDefence;\r\n            // Object.assign(inventory.rockets, saved.inventory._rockets);\r\n            // Object.assign(inventory._airDefence, saved.inventory._airDefence);\r\n\r\n            // console.log(inventory);\r\n        }\r\n    }\r\n\r\n    static resetGame() {\r\n        if (confirm(\"Are you sure you want to RESET the game? All progress will be erased.\")) {\r\n            localStorage.removeItem('DestroyUSA');\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.game = new Game(10000);\r\n            location.reload();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/progress.js?");

/***/ }),

/***/ "./scripts/rockets/advancedRocket.js":
/*!*******************************************!*\
  !*** ./scripts/rockets/advancedRocket.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AdvancedRocket\n/* harmony export */ });\n/* harmony import */ var _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocketClass/rocket */ \"./scripts/rockets/rocketClass/rocket.js\");\n\r\n\r\n;\r\n\r\nclass AdvancedRocket extends _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(count) {\r\n        // super(3, 3000, 0.4, 'Advanced Rocket', 'Advanced Rocket to fuck Trump\\'s ass', './img/rockets/AdvancedRocket.png');\r\n        super({\r\n            damage: 3,\r\n            price: 3000,\r\n            accuracy: 0.4,\r\n            title: 'Advanced Rocket',\r\n            description: 'Advanced Rocket to fuck Trump\\'s ass',\r\n            imgSrc: './img/rockets/AdvancedRocket.png'\r\n        });\r\n        this._count = count\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/rockets/advancedRocket.js?");

/***/ }),

/***/ "./scripts/rockets/bigNuclearBomb.js":
/*!*******************************************!*\
  !*** ./scripts/rockets/bigNuclearBomb.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ BigNuclearBomb\n/* harmony export */ });\n/* harmony import */ var _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocketClass/rocket */ \"./scripts/rockets/rocketClass/rocket.js\");\n\r\n\r\n\r\n\r\nclass BigNuclearBomb extends _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(count) {\r\n        // super(10, 1e5, 0.9, \"Big Nuclear Bomb\", \"Really BIG nuclear bomb, like Kimmy's dick\", \"./img/rockets/BigNuclearBomb.jpg\");\r\n        super({\r\n            damage: 10,\r\n            price: 1e5,\r\n            accuracy: 0.9,\r\n            title: 'Big Nuclear Bomb',\r\n            description: 'Really BIG nuclear bomb, like Kimmy\\'s dick',\r\n            imgSrc: './img/rockets/BigNuclearBomb.jpg'\r\n        });\r\n        this._count = count;\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/rockets/bigNuclearBomb.js?");

/***/ }),

/***/ "./scripts/rockets/middleNuclearBomb.js":
/*!**********************************************!*\
  !*** ./scripts/rockets/middleNuclearBomb.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ MiddleNuclearBomb\n/* harmony export */ });\n/* harmony import */ var _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocketClass/rocket */ \"./scripts/rockets/rocketClass/rocket.js\");\n\r\n\r\n;\r\n\r\nclass MiddleNuclearBomb extends _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(count) {\r\n        // super(7, 75000, 0.8, 'Middle Nuclear Bomb', \"Nuclear bomb that has slightly more damage and accuracy\", \"./img/rockets/MiddleNuclearBomb.png\");\r\n        super({\r\n            damage: 7,\r\n            price: 75000,\r\n            accuracy: 0.8,\r\n            title: 'Middle Nuclear Bomb',\r\n            description: 'Nuclear bomb that has slightly more damage and accuracy',\r\n            imgSrc: './img/rockets/MiddleNuclearBomb.png'\r\n        });\r\n        this._count = count\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/rockets/middleNuclearBomb.js?");

/***/ }),

/***/ "./scripts/rockets/rocketClass/rocket.js":
/*!***********************************************!*\
  !*** ./scripts/rockets/rocketClass/rocket.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Rocket\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ \"./scripts/index.js\");\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interface */ \"./scripts/interface.js\");\n/* harmony import */ var _trumpPhrases_trumpPhrases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trumpPhrases/trumpPhrases */ \"./scripts/trumpPhrases/trumpPhrases.js\");\n\r\n\r\n;\r\n\r\n\r\n\r\n\r\nclass Rocket {                       // Базовый класс для всех типов бомб и ракет\r\n    constructor(rocket = {}) {\r\n        this._damage = rocket.damage || 0;\r\n        this._price = rocket.price || 0;\r\n        this._accuracy = rocket.accuracy || 0;\r\n        this._title = rocket.title || 'Please, give a name to this rocket';\r\n        this._description = rocket.description || 'Please, describe this rocket';\r\n        this._imgSrc = rocket.imgSrc || './img/undefined.gif';\r\n        this._count;\r\n    }\r\n\r\n    //#region Getters and Setters\r\n    get count() {\r\n        return this._count;\r\n    }\r\n\r\n    set count(count) {\r\n        if (count >= 0 && typeof(count) == 'number') {\r\n            this._count = count;\r\n        } else {\r\n            throw new Error(`Rockets count can't be less than 0`);\r\n        }\r\n    }\r\n\r\n    get title() {\r\n        return this._title;\r\n    }\r\n\r\n    get description() {\r\n        return this._description;\r\n    }\r\n\r\n    get imgSrc() {\r\n        return this._imgSrc;\r\n    }\r\n\r\n    get damage() {\r\n        return this._damage;\r\n    }\r\n\r\n    get price() {\r\n        return this._price;\r\n    }\r\n\r\n    get accuracy() {\r\n        return this._accuracy;\r\n    }\r\n    //#endregion\r\n\r\n    buy(relativeBuyButton) {\r\n        try {\r\n            ___WEBPACK_IMPORTED_MODULE_0__.game.money -= this._price;\r\n            _interface__WEBPACK_IMPORTED_MODULE_1__.default.displayMoney(___WEBPACK_IMPORTED_MODULE_0__.game.money);\r\n            this.count += 1;\r\n            _interface__WEBPACK_IMPORTED_MODULE_1__.default.changeRocketCountInStore(relativeBuyButton, this._count);\r\n        } catch {\r\n            alert(`Not enough money to buy this weaphon! You need at least ${this._price}$`);\r\n        }\r\n    }\r\n\r\n    use() {\r\n        try {\r\n            this.count -= 1;\r\n\r\n            if (Math.random() < this._accuracy) {\r\n\r\n                /*Расчёт урона*/\r\n                let critChance = Math.random();\r\n                if (critChance <= 0.1) {\r\n                    if (critChance <= 0.05) {\r\n                        if (critChance <= 0.01) {\r\n                            ___WEBPACK_IMPORTED_MODULE_0__.game.trumpHealth <= this._damage * 5;   // Крит (шанс 1%), множитель урона 5х\r\n                        } else {\r\n                            ___WEBPACK_IMPORTED_MODULE_0__.game.trumpHealth -= this._damage * 4;   // Крит (шанс 5%), множитель урона 4х\r\n                        }\r\n                    } else {\r\n                        ___WEBPACK_IMPORTED_MODULE_0__.game.trumpHealth -= this._damage * 3;   // Крит (шанс 10%), множитель урона 3х\r\n                    }\r\n                } else {\r\n                    ___WEBPACK_IMPORTED_MODULE_0__.game.trumpHealth -= this._damage;       // Стандартный урон без крита\r\n                }\r\n                /*Расчёт урона окончен*/\r\n\r\n                setTimeout(() => alert(_trumpPhrases_trumpPhrases__WEBPACK_IMPORTED_MODULE_2__.default.GenerateAngerPhrase()), 500);\r\n                return true;\r\n            } else {\r\n                alert(_trumpPhrases_trumpPhrases__WEBPACK_IMPORTED_MODULE_2__.default.GenerateHappyPhrase());\r\n                return false;\r\n            }\r\n        } catch {\r\n            alert(\"You have no that type of rockets!\");\r\n            return false;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/rockets/rocketClass/rocket.js?");

/***/ }),

/***/ "./scripts/rockets/simpleRocket.js":
/*!*****************************************!*\
  !*** ./scripts/rockets/simpleRocket.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ SimpleRocket\n/* harmony export */ });\n/* harmony import */ var _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocketClass/rocket */ \"./scripts/rockets/rocketClass/rocket.js\");\n\r\n\r\n\r\n\r\nclass SimpleRocket extends _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(count) {\r\n        // super(1, 1000, 0.2, 'Simple Rocket', 'Simple Rocket to fuck Trump\\'s ass', './img/rockets/SimpleRocket.png');\r\n        super({\r\n            damage: 1,\r\n            price: 1000,\r\n            accuracy: 0.2,\r\n            title: 'Simple Rocket',\r\n            description: 'Simple Rocket to fuck Trump\\'s ass',\r\n            imgSrc: './img/rockets/SimpleRocket.png'\r\n        });\r\n        this._count = count;\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/rockets/simpleRocket.js?");

/***/ }),

/***/ "./scripts/rockets/smallNuclearBomb.js":
/*!*********************************************!*\
  !*** ./scripts/rockets/smallNuclearBomb.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ SmallNuclearBomb\n/* harmony export */ });\n/* harmony import */ var _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocketClass/rocket */ \"./scripts/rockets/rocketClass/rocket.js\");\n\r\n\r\n\r\n\r\nclass SmallNuclearBomb extends _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(count = 0) {\r\n        // super(5, 50000, 0.7, 'Small Nuclear Bomb', 'Nuclear bomb destroys everything around', './img/rockets/SmallNuclearBomb.png');\r\n        super({\r\n            damage: 5,\r\n            price: 50000,\r\n            accuracy: 0.7,\r\n            title: 'Small Nuclear Bomb',\r\n            description: 'Nuclear bomb destroys everything around',\r\n            imgSrc: './img/rockets/SmallNuclearBomb.png'\r\n        });\r\n        this._count = count;\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/rockets/smallNuclearBomb.js?");

/***/ }),

/***/ "./scripts/rockets/undefinedRocket.js":
/*!********************************************!*\
  !*** ./scripts/rockets/undefinedRocket.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ UndefinedRocket\n/* harmony export */ });\n/* harmony import */ var _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocketClass/rocket */ \"./scripts/rockets/rocketClass/rocket.js\");\n\r\n\r\n\r\n\r\nclass UndefinedRocket extends _rocketClass_rocket__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(count) {\r\n        super();\r\n        this._count = count;\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/rockets/undefinedRocket.js?");

/***/ }),

/***/ "./scripts/trumpPhrases/trumpPhrases.js":
/*!**********************************************!*\
  !*** ./scripts/trumpPhrases/trumpPhrases.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TrumpPhrases\n/* harmony export */ });\n/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods */ \"./scripts/methods.js\");\n\r\n\r\n\r\n\r\nclass TrumpPhrases {\r\n    static GenerateAngerPhrase() {\r\n        let anger = [\"HOOOLY SHIT!!!\", \"FUCK YOU, KIMMY! YOU'RE REALLY ASSHOLE\", \"IT WAS ONE OF MY FAVORITE BUILDINGS...😭\", \"WAIT FOR REVENGE, BITCH!!!\", \"SHIIIIIIIIT\", \"SORRY, KIMMY! I DON'T WANTED THIS WAR!\"];\r\n        return (anger[_methods__WEBPACK_IMPORTED_MODULE_0__.default.Random(0, anger.length)]);\r\n    }\r\n\r\n    static GenerateHappyPhrase() {\r\n        let happy = [\"HAHAHAHA!\", \"YOU'LL NEVER BEAT ME!!\", \"USA!!! USA!!! USA!!!\", \"WE'LL MAKE AMERICA GREAT AGAIN!\"];\r\n        return (happy[_methods__WEBPACK_IMPORTED_MODULE_0__.default.Random(0, happy.length)]);\r\n    }\r\n}\n\n//# sourceURL=webpack://destroyusa/./scripts/trumpPhrases/trumpPhrases.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./scripts/index.js");
/******/ })()
;