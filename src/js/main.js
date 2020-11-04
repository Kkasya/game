import create from "./base/create";
import numberRows from '../index.js';
import * as arrays from './game/arrays';

const audio = create('audio', '');
const header = create('div', 'header',
    [audio,
        create('h1', '', 'Gem Puzzle'),
    create('div', 'time-step',
        [create('span', 'time', 'time'),
        create('span', 'step', 'step')])]);
const footer = create('div', 'footer', [create('button', 'solution', 'Solution')]);
const gameBtn = create('button', 'start', 'New game');
const soundBtn = create('button', 'sound', 'Sound');
const menu =  create('div', 'menu', [gameBtn, soundBtn]);

export default class Puzzle {
    constructor(numberRows) {
        this.numberRows = numberRows;
        this.initial = true;
    }

    init(array) {
        const childMain = [];

        const childs = () => {
            array.forEach(i => {
                childMain.push(create('div', 'item', `${i}`));
            });
            childMain.push(menu);
            return childMain;
        }
        const main = create('main', 'container', childs());
        document.body.prepend(create('div', 'wrapper_body', [header, main, footer]));

        if(this.initial) gameBtn.addEventListener('click', () => this.showGame());
        return this;
    }

    showGame() {
        menu.classList.add('hide');
        this.initial = false;
        document.body.innerHTML = '';
        this.init(arrays.randomArray(this.numberRows));
    }
};


