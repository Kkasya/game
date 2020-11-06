import create from "./base/create";
import getTime from './game/timeStep';
import * as arrays from './game/arrays';

const audioField = create('audio', '');
const audioItem = create('audio', '');
const src = './src/sounds/';
export const times = create('span', 'times', ' 00:00:00');
const timeBlock = create('div', 'time',  [create('span', null, 'Time: '),times]);
export const steps = create('span', 'steps', '0');
const stepBlock = create('div', 'step',  [create('span', null, 'Steps: '), steps]);
const header = create('div', 'header',
    [audioField, audioItem,
        create('h1', '', 'Gem Puzzle'),
    create('div', 'time-step',[timeBlock, stepBlock])]);
const menuBtn = create('button', 'menuBtn', 'Menu');
const footer = create('div', 'footer', menuBtn);

const continueBtn = create('div','hide', 'Continue');
const gameBtn = create('div', 'start', 'New game');
const game3Btn = create('div', 'start', '3х3');
const game4Btn = create('div', 'start', '4х4');
const game5Btn = create('div', 'start', '5х5');
const game6Btn = create('div', 'start', '6х6');
const game7Btn = create('div', 'start', '7х7');
const game8Btn = create('div', 'start', '8х8');
const gameSize = create('div', 'gameSize none', [game3Btn, game4Btn, game5Btn, game6Btn,game7Btn, game8Btn]);
const solutionBtn = create('div', 'solution', 'Solution');
const saveBtn = create('div', 'save', 'Save game');
const audioIcon = create('div', 'audio');
const audioBtn = create('div', '', 'Sound');
const soundBtn = create('div', 'sound', [audioIcon, audioBtn]);
const menu =  create('div', 'menu', [continueBtn, gameBtn, gameSize, saveBtn, solutionBtn, soundBtn]);

const message1 = create('div', '', `Yippee!`);
const message2 = create('div', 'message', `You solved the puzzle in `);
const messageResult = create('div', '', ' ');
const messageWin = create('div', 'messageWin hide',[message1, message2, messageResult]);

let stopwatchNew = false;
let stopwatchSave = false;

export default class Puzzle {
    constructor(numberRows) {
        this.numberRows = numberRows;
        this.move = 0;
        this.isSound = true;
    }

    stopwatchF() {
        clearInterval(this.stopwatch);
        this.stopwatch = setInterval(function () {times.innerHTML = getTime(stopwatchNew, stopwatchSave)}, 1000);
        setTimeout((() => {
            stopwatchNew = false;
            stopwatchSave = false;
        }), 1500);
    }

    init(array) {
        if (localStorage.getItem('array')) {
            array = JSON.parse((localStorage.getItem('array')));
            this.move = localStorage.getItem('move');
            this.numberRows = +localStorage.getItem('numberRows');
            times.innerHTML = `${localStorage.getItem('hour')}:${localStorage.getItem('min')}:${localStorage.getItem('sec')}`;
            steps.innerHTML = this.move;
            stopwatchSave = true;
            this.stopwatchF();
        }
        this.main = create('main', 'container', this.getItems(array));

        if (this.numberRows === 3) this.main.classList.add('size3');
        if (this.numberRows === 4) this.main.classList.add('size4');
        if (this.numberRows === 5) this.main.classList.add('size5');
        if (this.numberRows === 6) this.main.classList.add('size6');
        if (this.numberRows === 7) this.main.classList.add('size7');
        if (this.numberRows === 8) this.main.classList.add('size8');

        if (localStorage.getItem('array')) menu.classList.add('hide');
        document.body.prepend(create('div', 'wrapper_body', [header, this.main, footer]));

        if (this.isSound) {
            audioField.src = src + 'field.mp3';
            audioField.currentTime = 0;
            audioField.play();
        }

        gameBtn.addEventListener('click', () => this.chooseGame());
        menuBtn.addEventListener('click', () => this.startMenu());
        continueBtn.addEventListener('click', () => this.continueGame());
        saveBtn.addEventListener('click', () => this.saveGame());
        soundBtn.addEventListener('click', () => this.playSound());
    }

    getItems(array) {
        const childMain = [];
        array.forEach((i, index) => {
            const item = create('div', 'item', `${i}`);
            item.style.order = index;
            childMain.push(item);
            item.addEventListener('click', () => this.replace(item));
        });

        this.itemEmpty = childMain.find(child => child.innerHTML=== " ");
        this.itemEmpty.classList.add('hide');
        childMain.push(menu);
        childMain.push(messageWin);
        return childMain;
    }

    showGame() {
            menu.classList.add('hide');
            document.body.innerHTML = '';
            this.init(arrays.randomArray(this.numberRows));
            steps.innerHTML = this.move;
            this.stopwatchF();
    }

    replace(item) {
        const empty = this.itemEmpty.style.order;
        const itemOrder = item.style.order;
        if (item.style.order !== empty) {
            if (Math.abs(empty - itemOrder) === this.numberRows || Math.abs(empty - itemOrder) === 1) {
                let classSlide;
                if((itemOrder - empty) === 1) classSlide = 'slide-right';
                if((itemOrder - empty) === -1) classSlide = 'slide-left';
                if((itemOrder - empty) === this.numberRows)  classSlide = 'slide-top';
                if((itemOrder - empty) === -this.numberRows) classSlide = 'slide-bottom';

                item.classList.add(classSlide);
                if (this.isSound) {
                    audioItem.src = src + 'move.wav';
                    audioItem.currentTime = 0;
                    audioItem.play();
                }
                setTimeout(() => {
                    this.itemEmpty.style.setProperty('order', itemOrder);
                    item.style.setProperty('order', empty);
                    item.classList.remove(classSlide);
                }, 510);

                this.move++;
                steps.innerHTML = this.move;
            }
        }
       setTimeout( () => { this.checkArray(item); }, 510);
    }

    checkArray(item) {
        let gameSaved = [];
        this.main.childNodes.forEach(item => {
            if (item.style.order) gameSaved[item.style.order] = item.innerHTML;
        });

        if (gameSaved.toString() == this.initArray.toString()) {
            clearInterval(this.stopwatch);
            const hour = +times.innerHTML.slice(0,2);
            const min = times.innerHTML.slice(3,5);
            const sec = times.innerHTML.slice(6);
            if (hour) messageResult.innerHTML = `${hour}:`;
            messageResult.innerHTML += `${min}:`;
            if (sec) messageResult.innerHTML += `${sec} `;
            messageResult.innerHTML += `and ${this.move} moves`;
            messageWin.classList.remove('hide');
        }
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
            localStorage.removeItem('array');
            localStorage.removeItem('move');
            localStorage.removeItem('hour');
            localStorage.removeItem('min');
            localStorage.removeItem('sec');
            localStorage.removeItem('numberRows');
            gameBtn.classList.remove('none');
            gameSize.classList.add('none');

            this.initArray = arrays.initialArray(this.numberRows);
            stopwatchNew = true;
            this.showGame();
    }

    startMenu() {
        if( menu.classList.contains('hide')) {
            if (!messageWin.classList.contains('hide')) {
                messageWin.classList.add('hide');
            } else {
                clearInterval(this.stopwatch);
                continueBtn.classList.remove('hide');
            }
            menu.classList.remove('hide');
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
        localStorage.setItem('hour', times.innerHTML.slice(0,2));
        localStorage.setItem('min', times.innerHTML.slice(3,5));
        localStorage.setItem('sec', times.innerHTML.slice(6));
        localStorage.setItem('numberRows', this.numberRows);

        menu.classList.add('hide');
    }

    playSound() {
        if (this.isSound) {
            this.isSound = false;
            audioIcon.classList.add('none-audio');
            audioField.pause();
        } else {
            this.isSound = true;
            audioIcon.classList.remove('none-audio');
            audioField.currentTime = 0;
            audioField.play();
        }
    }
};


