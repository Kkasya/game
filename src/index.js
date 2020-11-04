import './sass/style.scss';
import Puzzle from './js/main';
import * as arrays from './js/game/arrays';

export let numberRows = 4;
const initArray = arrays.initialArray(numberRows);

new Puzzle(numberRows).init(initArray);