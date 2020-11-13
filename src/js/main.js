import create from "./base/create";
import getTime from './game/timeStep';
import * as arrays from './game/arrays';
import chooseClass from './game/arrays';
import getScores from './game/scores';

const times = create('span', 'times', ' 00:00:00');
const timeBlock = create('div', 'time', [create('span', null, 'Time: '), times]);
const steps = create('span', 'steps', '0');
const stepBlock = create('div', 'step', [create('span', null, 'Steps: '), steps]);
const header = create('div', 'header',
    [create('h1', '', 'Gem Puzzle'),
        create('div', 'time-step', [timeBlock, stepBlock])]);
const menuBtn = create('button', 'menuBtn', 'Menu');
const footer = create('div', 'footer', menuBtn);

const continueBtn = create('div', 'hide', 'Continue');
const pictureBtn = create('div', '', 'Use picture');
const numberBtn = create('div', 'none', 'Use numbers');
const gameBtn = create('div', 'start', 'New game');
const game3Btn = create('div', 'start', '3х3');
const game4Btn = create('div', 'start', '4х4');
const game5Btn = create('div', 'start', '5х5');
const game6Btn = create('div', 'start', '6х6');
const game7Btn = create('div', 'start', '7х7');
const game8Btn = create('div', 'start', '8х8');
const gameSize = create('div', 'gameSize none', [game3Btn, game4Btn, game5Btn, game6Btn, game7Btn, game8Btn]);
const solutionBtn = create('div', 'solution', 'Solution');
const saveBtn = create('div', 'save', 'Save game');
const scoreBtn = create('div', '', 'Best scores');
const audioIcon = create('div', 'none-audio');
const audioBtn = create('div', '', 'Sound');
const soundBtn = create('div', 'sound', [audioIcon, audioBtn]);
const menu = create('div', 'menu', [continueBtn, pictureBtn, numberBtn, gameBtn, gameSize, saveBtn, solutionBtn, scoreBtn, soundBtn]);

const message1 = create('div', '', `Yippee!`);
const message2 = create('div', 'message', `You solved the puzzle in `);
const messageResult = create('div');
const question = create('p', '', 'What is your name?');
let nameInput = create('div', 'name', '', null, ['contenteditable', true]);
const askName = create('div', 'ask-name', [question, nameInput]);
const messageWin = create('div', 'messageWin hide', [message1, message2, messageResult, askName]);

const messageSave = create('div', 'message-save hide', 'Your game is saved');

const nameTable = create('span', 'name-table', 'Best scores');
const trHeader = create('tr', 'table-header', [
    create('td', '', "№"),
    create('td', '', 'Name'),
    create('td', '', 'Size'),
    create('td', '', 'Moves')
]);
const backBtn = create('div', 'back', 'Back');
let table;

let stopwatchNew = false;
let stopwatchSave = false;

const audioItem = new Audio('./src/sounds/move.mp3');
const audioField = new Audio('./src/sounds/field.mp3');
const numberPictures = 150;

export default class Puzzle {
    constructor(numberRows) {
        this.numberRows = numberRows;
        this.move = 0;
        this.isSound = false;
        this.game = false;
        this.usePicture = false;
        this.src = '';
        //this.arr;
    }

    stopwatchF() {
        clearInterval(this.stopwatch);
        this.stopwatch = setInterval(function () {
            times.innerHTML = getTime(stopwatchNew, stopwatchSave)
        }, 1000);
        setTimeout((() => {
            stopwatchNew = false;
            stopwatchSave = false;
        }), 1500);
    }

    init(array) {
        this.initArray = arrays.initialArray(this.numberRows);
        if (localStorage.getItem('array')) array = this.getSaveGame();
        this.main = create('main', 'container', this.getItems(array));
        // if (this.src && this.usePicture) {
        //     this.main.style.background = `url(${this.src})`;
        //     this.main.style.backgroundSize = `cover`;
        //     this.main.style.opacity = '0.5';
        // }

        this.main.classList.add(`size${this.numberRows}`);
        if (localStorage.getItem('array')) menu.classList.add('hide');
        document.body.prepend(create('div', 'wrapper_body', [header, this.main, footer]));

        this.handler();
    }

    handler() {
        gameBtn.addEventListener('click', () => this.chooseGame());
        menuBtn.addEventListener('click', () => this.startMenu());
        continueBtn.addEventListener('click', () => this.continueGame());
        saveBtn.addEventListener('click', () => this.saveGame());
        scoreBtn.addEventListener('click', () => this.showScores());
        backBtn.addEventListener('click', () => this.startMenu());
        soundBtn.addEventListener('click', () => {
            !this.isSound ? this.playSound() : this.stopSound()
        });
        nameInput.addEventListener('keypress', (e) => this.setName(e));
        pictureBtn.addEventListener('click', () => this.addPicture());
        numberBtn.addEventListener('click', () => this.removePicture());
        solutionBtn.addEventListener('click', () => this.solvePuzzle());
    }

    getSaveGame() {
        const array = JSON.parse((localStorage.getItem('array')));
        if (localStorage.getItem('src')) {
            this.src = localStorage.getItem('src');
            this.usePicture = true;
        }
        this.move = localStorage.getItem('move');
        this.numberRows = +localStorage.getItem('numberRows');
        times.innerHTML = `${localStorage.getItem('hour')}:${localStorage.getItem('min')}:${localStorage.getItem('sec')}`;
        steps.innerHTML = this.move;
        stopwatchSave = true;
        this.stopwatchF();

        return array;
    }

    getItems(array) {
        const childMain = [];
        const sizeBackground = 100 / (this.numberRows - 1);
        const randIndex = Math.floor(Math.random() * Math.floor(numberPictures));
        if (!this.src) this.src = `./src/images/box/${randIndex}.jpg`;

        array.forEach((i, index) => {
            const item = create('div', 'item', `${i}`);
            item.style.order = index;
            if (this.usePicture) {

                item.style.fontSize = 0;
                item.style.backgroundImage = `url(${this.src})`;
                item.style.backgroundSize = `${this.numberRows * 100}% auto`;
                item.style.backgroundPositionY = `${Math.trunc((i - 1) / this.numberRows) * sizeBackground}%`;
                while (i > this.numberRows) i -= this.numberRows;
                item.style.backgroundPositionX = `${(i - 1) * sizeBackground}%`;
            }
            childMain.push(item);
            item.addEventListener('mousedown', (e) => this.dragDrop(e, item, this.main));
        });

        this.itemEmpty = childMain.find(child => child.innerHTML === " ");
        this.itemEmpty.classList.add('opacity');
        childMain.push(menu, messageWin, messageSave);
        return childMain;
    }

    showGame() {
        menu.classList.add('hide');
        document.body.innerHTML = '';
        this.arr = arrays.randomArray(this.numberRows);
        this.init(this.arr.randArray);
        steps.innerHTML = this.move;
        this.moveArray = [];
        this.stopwatchF();
        this.game = true;
    }

    dragDrop(e, item, main) {
        let itemClone = create('div', 'item');
        itemClone.classList.add('opacity');
        itemClone.style.order = item.style.order;

        let moveMouse = false;
        let currentDropable = null;
        let shiftX = e.clientX - item.getBoundingClientRect().left;
        let shiftY = e.clientY - item.getBoundingClientRect().top;

        moveAt(e.pageX, e.pageY);

        function moveAt(pageX, pageY) {
            item.style.left = pageX - shiftX - 560 + 'px';
            item.style.top = pageY - shiftY - 165 + 'px';
        }

        function onMouseMove(e) {
            main.appendChild(itemClone);
            item.style.position = 'absolute';
            item.style.zIndex = 1000;

            moveAt(e.pageX, e.pageY);

            moveMouse = true;
            item.hidden = true;
            let elem = document.elementFromPoint(e.clientX, e.clientY);
            item.hidden = false;

            if (!elem) return;

            let dropElem = elem.closest('.opacity');
            currentDropable = dropElem;
        }

        const listen = () => {
            item.removeEventListener('mousemove', onMouseMove);
            item.removeEventListener('mouseup', listen);
            item.style.position = item.style.zIndex = item.style.left = item.style.top = null;
            if (main.contains(itemClone)) main.removeChild(itemClone);

            if (moveMouse) {
                if (currentDropable === this.itemEmpty) {
                    this.replace(item, false);
                }
            } else this.replace(item, true);
        };
        item.addEventListener('mousemove', onMouseMove);
        item.addEventListener('mouseup', listen);
    }

    replace(item, doAnimation) {
        const empty = this.itemEmpty.style.order;
        const itemOrder = item.style.order;
        this.moveArray = this.arr.moveArray;
        console.log(this.moveArray);
        if (item.style.order !== empty) {
            if (Math.abs(empty - itemOrder) === this.numberRows || Math.abs(empty - itemOrder) === 1) {
                if (!(((empty + 1) % this.numberRows === 0 || (itemOrder + 1) % this.numberRows === 0) &&
                    (empty % this.numberRows === 0 || itemOrder % this.numberRows === 0))) {

                    let classSlide;
                    this.moveArray.push([+empty, +itemOrder])
                    if (this.isSound) {
                        audioItem.currentTime = 0;
                        audioItem.play();
                    }
                    if (!doAnimation) {
                        if (item.classList.contains(classSlide)) item.classList.remove(classSlide);
                        this.itemEmpty.style.setProperty('order', itemOrder);
                        item.style.setProperty('order', empty);
                    } else {
                        const classSlide = chooseClass((itemOrder - empty), this.numberRows);
                        item.classList.add(classSlide);
                        setTimeout(() => {
                            this.itemEmpty.style.setProperty('order', itemOrder);
                            item.style.setProperty('order', empty);
                            if (item.classList.contains(classSlide)) item.classList.remove(classSlide);
                        }, 510);
                    }
                    this.move++;
                    steps.innerHTML = this.move;
                }
            }
        }
        setTimeout(() => {
            this.checkArray(item);
        }, 510);
    }

    checkArray(item) {
        let gameSaved = [];
        this.main.childNodes.forEach(item => {
            if (item.style.order) gameSaved[item.style.order] = item.innerHTML;
        });

        if (gameSaved.toString() == this.initArray.toString()) {
            this.showMessage();
            this.game = false;
        }
        ;
    }

    chooseGame() {
        gameBtn.classList.add('none');
        gameSize.classList.remove('none');
        game3Btn.addEventListener('click', () => {
            this.numberRows = 3;
            this.startGame();
        });
        game4Btn.addEventListener('click', () => {
            this.numberRows = 4;
            this.startGame();
        });
        game5Btn.addEventListener('click', () => {
            this.numberRows = 5;
            this.startGame();
        });
        game6Btn.addEventListener('click', () => {
            this.numberRows = 6;
            this.startGame();
        });
        game7Btn.addEventListener('click', () => {
            this.numberRows = 7;
            this.startGame();
        });
        game8Btn.addEventListener('click', () => {
            this.numberRows = 8;
            this.startGame();
        });
    }

    startGame() {
        times.innerHTML = '00:00:00';
        this.move = 0;
        this.src = 0;
        localStorage.removeItem('array');
        localStorage.removeItem('move');
        localStorage.removeItem('hour');
        localStorage.removeItem('min');
        localStorage.removeItem('sec');
        localStorage.removeItem('numberRows');
        localStorage.removeItem('src');
        gameBtn.classList.remove('none');
        gameSize.classList.add('none');

        stopwatchNew = true;
        this.showGame();
    }

    startMenu() {
        clearInterval(this.stopwatch);
        if (!menu.classList.contains('hide') && !continueBtn.classList.contains('hide')) {
            setTimeout(() => this.continueGame(), 150);
        } else {
            setTimeout(() => {
                if (menu.classList.contains('hide')) {
                    if (table && !table.classList.contains('none')) table.classList.add('none');
                    if (!messageWin.classList.contains('hide')) {
                        messageWin.classList.add('hide');
                    } else if (localStorage.getItem('array') || this.game) continueBtn.classList.remove('hide');
                    menu.classList.remove('hide');
                }
            }, 100);
        }
    }

    continueGame() {
        menu.classList.add('hide');
        this.stopwatchF();
    }

    saveGame() {
        let gameSaved = [];
        this.main.childNodes.forEach(item => {
            if (item.style.order) gameSaved[item.style.order] = item.innerHTML;
        });
        localStorage.setItem('array', JSON.stringify(gameSaved));
        localStorage.setItem('move', this.move);
        localStorage.setItem('hour', times.innerHTML.slice(0, 2));
        localStorage.setItem('min', times.innerHTML.slice(3, 5));
        localStorage.setItem('sec', times.innerHTML.slice(6));
        localStorage.setItem('numberRows', this.numberRows);
        if (this.usePicture) localStorage.setItem('src', this.src);
        messageSave.classList.remove('hide');
        messageSave.classList.add('animation');
        setTimeout(() => {
            messageSave.classList.add('hide');
            messageSave.classList.remove('animation');
        }, 2000);
    }

    showScores() {
        if (table) {
            this.main.childNodes.forEach(node => {
                if (node.classList.contains('table')) this.main.removeChild(node);
            })
        }
        const scoreArray = getScores();
        const childTr = [];
        for (let i = 0; i < 10; i++) {
            const tr = (create('tr', 'tr-table', create('td', 'number-table', `${i + 1} `)));

            if (scoreArray[i]) {
                if (scoreArray[i].name) tr.appendChild(create('td', 'name-score', `${scoreArray[i].name}`));
                else tr.appendChild(create('td', 'name-score', 'Anonymous'));
                tr.appendChild(create('td', null, `${scoreArray[i].size}`));
                tr.appendChild(create('td', null, `${scoreArray[i].moves}`));
            } else {
                for (let j = 0; j < 3; j++) {
                    tr.appendChild(create('td'));
                }
            }
            childTr.push(tr);
        }
        table = create('div', 'table', childTr);
        table.prepend(nameTable, trHeader);
        table.appendChild(backBtn);
        this.main.appendChild(table);
        menu.classList.add('hide');
    }

    playSound() {
        setTimeout(() => {
            this.isSound = true;
            audioIcon.classList.remove('none-audio');
            audioIcon.classList.add('audio');
            audioField.currentTime = 0;
            setInterval(() => {
                if (this.isSound) audioField.play()
            }, 1);

        }, 100);
    }

    stopSound() {
        setTimeout(() => {
            this.isSound = false;
            audioIcon.classList.add('none-audio');
            audioIcon.classList.remove('audio');
            audioField.pause();
            audioField.currentTime = 0;
        }, 200);
    }

    showMessage() {
        messageResult.innerHTML = '';
        nameInput.innerHTML = '';
        clearInterval(this.stopwatch);
        const hour = +times.innerHTML.slice(0, 2);
        const min = times.innerHTML.slice(3, 5);
        const sec = times.innerHTML.slice(6);
        if (hour) messageResult.innerHTML = `${hour}:`;
        messageResult.innerHTML += `${min}:`;
        if (sec) messageResult.innerHTML += `${sec} `;
        messageResult.innerHTML += `and ${this.move} moves`;
        messageWin.classList.remove('hide');
    }

    addScore(name) {
        const score = {
            name: name,
            size: `${this.numberRows}x${this.numberRows}`,
            moves: this.move
        }
        if (!(localStorage.getItem(`${localStorage.length - 1}`) == JSON.stringify(score))) {
            localStorage.setItem(`${localStorage.length}`, JSON.stringify(score));
        }
    }

    setName(e) {
        if (e.code === 'Enter') {
            console.log(e.code);
            e.preventDefault();
            const name = nameInput.innerHTML;
            console.log(name);

            this.startMenu();
            this.addScore(name);
        }
    }

    addPicture() {
        pictureBtn.classList.add('none');
        numberBtn.classList.remove('none');
        this.usePicture = true;
        document.body.innerHTML = '';
        this.init(arrays.initialArray(this.numberRows));
        continueBtn.classList.add('hide');
    }

    removePicture() {
        pictureBtn.classList.remove('none');
        numberBtn.classList.add('none');
        this.usePicture = false;
        document.body.innerHTML = '';
        this.init(arrays.initialArray(this.numberRows));
        continueBtn.classList.add('hide');
    }

    solvePuzzle() {
        this.stopwatchF();
        menu.classList.add('hide');
        const moveArray = !this.moveArray.length ? this.arr.moveArray : this.moveArray;
        const main = this.main;
        const numberRows = this.numberRows;
        const itemEmpty = this.itemEmpty;
        const stopwatch = this.stopwatch;
        const isSound = this.isSound;
        let move = this.move;
        let game = this.game;

        let i = 1;

        function iteration() {
            const empty = moveArray[moveArray.length - i][1];
            const itemOrder = moveArray[moveArray.length - i][0];
            let item;
            if (isSound) {
                audioItem.currentTime = 0;
                audioItem.play();
            }
            for (let i = 0; i < main.childNodes.length - 3; i++) {
                if (+main.childNodes[i].style.order === itemOrder) {
                    item = main.childNodes[i];
                }
            }
            const classSlide = chooseClass((itemOrder - empty), numberRows);
            item.classList.add = classSlide;
            setTimeout(() => {
                itemEmpty.style.setProperty('order', itemOrder);
                item.style.setProperty('order', empty);
                if (item.classList.contains(classSlide)) item.classList.remove(classSlide);
            }, 510);
            if (i === moveArray.length) clearInterval(stopwatch);
            else setTimeout(() => iteration(), 520);
            move++;
            steps.innerHTML = move;
            i++;
        }

        iteration();
    }
};