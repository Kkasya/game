import create from "./base/create";
import getTime from './game/timeStep';
import * as arrays from './game/arrays';

const audio = create('audio', '');
export const times = create('span', 'times', ' 00:00:00');
const timeBlock = create('div', 'time',  [create('span', null, 'Time: '),times]);
export const steps = create('span', 'steps', '0');
const stepBlock = create('div', 'step',  [create('span', null, 'Steps: '), steps]);
const header = create('div', 'header',
    [audio,
        create('h1', '', 'Gem Puzzle'),
    create('div', 'time-step',[timeBlock, stepBlock])]);
const menuBtn = create('button', 'menuBtn', 'Menu');
const footer = create('div', 'footer', menuBtn);

const continueBtn = create('div','hide', 'Continue');
const gameBtn = create('div', 'start', 'New game');
const solutionBtn = create('div', 'solution', 'Solution');
const saveBtn = create('div', 'save', 'Save game');
const soundBtn = create('div', 'sound', 'Sound');
const menu =  create('div', 'menu', [continueBtn, gameBtn, saveBtn, solutionBtn, soundBtn]);
let main = '';

let stopwatchNew = false;



export default class Puzzle {
    constructor(numberRows) {
        this.numberRows = numberRows;
        this.itemEmpty;
        this.stopwatch;
        this.move = 0;
    }

    stopwatchF() {
        clearInterval(this.stopwatch);
        this.stopwatch = setInterval(function () {times.innerHTML = getTime(stopwatchNew)}, 1000);
        setTimeout((() => { stopwatchNew = false;}), 1500);
    }

    init(array) {
        const childMain = [];
        const childs = () => {
            array.forEach((i, index) => {
                const item = create('div', 'item', `${i}`);
                item.style.order = index;
                childMain.push(item);
                item.addEventListener('click', () => this.replace(item));
            });

            this.itemEmpty = childMain.find(child => child.innerHTML == " ");
            this.itemEmpty.classList.add('hide');
            childMain.push(menu);
            return childMain;
        }
        main = create('main', 'container', childs());
        document.body.prepend(create('div', 'wrapper_body', [header, main, footer]));

        gameBtn.addEventListener('click', () => {
            times.innerHTML = '00:00:00';
            this.move = 0;
            stopwatchNew = true;
            this.showGame();
        });

        menuBtn.addEventListener('click', () => {
            if( menu.classList.contains('hide')) {
                menu.classList.remove('hide');
               clearInterval(this.stopwatch);
               continueBtn.classList.remove('hide');
            }
        });

        continueBtn.addEventListener('click', () => {
            menu.classList.add('hide');
            this.stopwatchF();
        })
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
        if (item.style.order != empty) {
            if (Math.abs(empty - itemOrder) == 4 || Math.abs(empty - itemOrder) == 1) {
                this.itemEmpty.style.setProperty('order', itemOrder);
                item.style.setProperty('order', empty);
                this.move++;
                steps.innerHTML = this.move;
            }
        }
    }
};


