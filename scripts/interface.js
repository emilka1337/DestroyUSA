'use strict';

import { kimInventory } from ".";

export default class Interface {    // Работа с интерфейсом и непосредственно с веб-страницей
    //#region On game start
    static hideStartButton() {
        document.getElementById('startGame').style.display = 'none';
    }

    static reduceHeaderHeightOnStart() {
        document.getElementById('siteHeader').style.height = '15%';
        document.getElementById('siteFooter').style.height = '20%';
    }
    //#endregion

    //#region Score and money
    static displayScore(score) {
        document.getElementById('gameScore').innerHTML = `Score: ${score}`;
    }

    static displayIncome(income) {
        document.getElementById('gameIncome').innerHTML = `Income: ${income}$/sec.`;
        this.styleIncome(income);
    }

    static styleIncome(income) {
        let incomeText = document.getElementById('gameIncome');

        if (income > 0) {
            incomeText.style.color = 'lime';
        } else if (income < 0) {
            incomeText.style.color = 'red';
        } else {
            incomeText.style.color = 'yellow';
        }
    }

    static displayMoney(money) {
        document.getElementById('gameMoney').innerHTML = `Money: ${money}$`;
    }
    //#endregion

    //#region HP
    static showPlayersHP() {
        let hp = document.getElementsByClassName('players-hp');

        for (let playerHP of hp) {
            playerHP.style.display = 'flex';
        }
    }

    static changeKimHP(hp) {
        document.getElementById('kimHPGraph').style.width = `${hp}%`;
        document.getElementById('kimHP').innerHTML = hp;
    }

    static changeTrumpHP(hp) {
        document.getElementById('trumpHPGraph').style.width = `${hp}%`;
        document.getElementById('trumpHP').innerHTML = hp;
    }
    //#endregion

    //#region Inventory visibility
    static showInventory() {
        document.getElementById('inventoryContainer').hidden = false;
    }

    static hideInventory() {
        document.getElementById('inventoryContainer').hidden = true;
    }

    static toggleInventory() {
        document.getElementById('inventoryContainer').hidden ? this.showInventory() : this.hideInventory();
    }
    //#endregion

    //#region Rockets store
    static createRocketStoreCard(rocket) {
        let card = document.createElement('div');
        card.className = 'card my-3';
        card.style.width = '18rem';

        let img = document.createElement('img');
        img.src = rocket.imgSrc;
        img.className = 'card-img-top';
        img.style.width = '17,99rem';
        img.style.height = '300px';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column';

        let cardHeading = document.createElement('h5');
        cardHeading.className = 'card-title';
        cardHeading.innerText = `${rocket.title}`;
        cardHeading.style.color = 'black';

        let cardDescription = document.createElement('p');
        cardDescription.className = 'card-text';
        cardDescription.innerText = `${rocket.description}`;
        cardDescription.style.color = 'black';

        let damage = document.createElement('p');
        damage.style.color = 'black';
        damage.style.marginBottom = '5px';
        damage.innerHTML = `<b>Damage:</b> ${rocket.damage} HP`;

        let accuracy = document.createElement('p');
        accuracy.style.color = 'black';
        accuracy.style.marginBottom = '5px';
        accuracy.innerHTML = `<b>Accuracy:</b> ${rocket.accuracy * 100}%`;

        let youHave = document.createElement('p');
        youHave.style.color = 'black';
        youHave.style.marginBottom = '5px';
        youHave.innerHTML = `<b>You have: </b> ${rocket.count}`;

        let buttons = document.createElement('div');
        buttons.className = 'd-flex justify-content-around'
        buttons.style.justifySelf = 'flex-end';

        let buyButton = document.createElement('a');
        buyButton.className = 'btn btn-primary col-md-5';
        buyButton.innerText = `${rocket.price}$`;
        buyButton.style.color = '#fff';
        // buyButton.onclick = () => rocket.buy(buyButton);
        // console.log(this);
        // buyButton.onclick = () => rocket.buy.call(buyButton);
        buyButton.onclick = () => rocket.buy(youHave);

        let selectButton = document.createElement('a');
        selectButton.className = 'btn btn-danger col-md-5';
        selectButton.innerText = `Select`;
        buyButton.style.color = '#fff';
        selectButton.onclick = () => rocket.select();

        /* Задаёт свойство со ссылкой на Node-елемент кнопки выбора ракеты и служит для того, 
        чтобы относительно неё находить путь до пункта с количеством 
        в карточке ракеты в магазине. ЖЕСТОКИЙ КОСТЫЛЬ, ИСПРАВИТЬ!!!*/
        // UPD: ИСПРАВЛЕНО, НА ИСПЫТАТЕЛЬНОМ СРОКЕ!!!
        // rocket.relativeSelectButton = selectButton;
        rocket.rocketCountInInventory = youHave;
        // console.log(rocket);

        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(cardHeading);
        cardBody.appendChild(cardDescription);
        cardBody.appendChild(damage);
        cardBody.appendChild(accuracy);
        cardBody.appendChild(youHave);
        cardBody.appendChild(buttons);
        buttons.appendChild(buyButton);
        buttons.appendChild(selectButton);

        return card;
    }

    static fullfillRocketsInventory() {
        document.getElementById('rocketsInventory').innerHTML = '';

        let rockets = kimInventory.rockets;
        // let rockets = Array.from(kimInventory.rockets);
        // console.log(rockets);

        for (let i in rockets) {
            let rocket = rockets[i];
            rocket.inventoryId = `rocketInventoryId-${i}`;
            document.getElementById('rocketsInventory').appendChild(this.createRocketStoreCard(rocket));
        }

        // for (let i = 0; i < Array.from(rockets).length; i++) {
        //     let rocket = rockets[i];
        //     rocket.inventoryId = `rocketInventoryId-${i}`;
        //     document.getElementById('rocketsInventory').appendChild(this.createRocketStoreCard(rocket));
        // }
    }

    /* Метод, меняющий количество ракет в карточке. 
    Ищет поле с количеством, отталкиваясь от кнопки "Buy" в карточке */
    // UPD: ИСПРАВЛЕНО, НА ИСПЫТАТЕЛЬНОМ СРОКЕ!!!
    static changeRocketCountInStore(youHave, count) {
        // buyButton.parentElement.parentElement.children[4].innerHTML = `<b>You have: </b> ${count}`;
        youHave.innerHTML = `<b>You have: </b> ${count}`;
    }

    static changeSelectedRocket(title, count) {
        document.getElementById('selectedRocket').innerHTML = `Selected: <span>${title} (x${count})</span>`;
    }
    //#endregion

    //#region Notifications and Popups
    static createPopup(params = { text, color, imgWidth, imgSrc, timeout }) {

        let popup = {               // Default popup params
            color: 'info',
            text: '',
            imgSrc: '',
            imgWidth: '100px',
            timeout: 3000
        };

        Object.assign(popup, params);   // Modifying default popup by user setted params

        let alert = document.createElement('div');
        alert.className = `alert alert-${popup.color} alert-dismissible fade show`;
        alert.id = 'noRocketsAlert';
        alert.style.transition = '300ms';
        alert.style.opacity = '0';

        let div = document.createElement('div');

        let p = document.createElement('p');
        p.innerHTML = popup.text;
        p.className = 'float-left';
        p.style.color = 'inherit';
        p.style.width = '200px';

        let img = document.createElement('img');
        img.src = popup.imgSrc;
        img.className = 'float-right';
        img.style.width = popup.imgWidth;

        let close = document.createElement('button');
        close.type = 'button';
        close.className = 'close';
        close.setAttribute('data-dismiss', 'alert')
        close.setAttribute('aria-label', 'Close');
        close.style.outline = 'none';

        let span = document.createElement('span');
        span.innerHTML = '&times;';
        span.setAttribute('aria-hidden', 'true');

        alert.oncontextmenu = () => { close.click(); return false };

        alert.appendChild(div);
        div.appendChild(p);
        popup.imgSrc ? div.appendChild(img) : undefined;
        alert.appendChild(close);
        close.appendChild(span);

        document.getElementById('popups').prepend(alert);
        setTimeout(() => alert.style.opacity = '1', 0);
        // document.getElementById('popups').appendChild(alert);

        // Если дать в параметрах таймаут 0, то попап будет 'бесконечным', а если не дать ничего, то 3 секунды
        setTimeout(() => close.click(), popup.timeout || 3600000);
    }
    //#endregion

    //#region Settings Menu
    static toggleSettings() {
        document.getElementById('settingsContainer').hidden = !document.getElementById('settingsContainer').hidden;
    }
    //#endregion

    //#region Color scheme
    _getAllTextElementsForChangingColorScheme() {
        let tagNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label']
        let allItems = [];

        for (let tagname of tagNames) {
            allitems = Array.prototype.concat.apply(allitems, x.getElementsByTagName(tagname));
        }
        // allitems = Array.prototype.concat.apply(allitems, x.getElementsByTagName("h1"));

        return allItems;
    }

    static setDarkColorScheme() {

    }

    static setLightColorScheme() {

    }

    static setColorScheme(colorScheme) {
        
    }
    //#endregion
}