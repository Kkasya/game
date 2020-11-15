export function initialArray(numberRows) {
    const initArray = [];
    for (let i = 0; i < numberRows * numberRows; i++) {
        initArray.push(i + 1);
    }
    initArray[initArray.length - 1] = ' ';
    return initArray;
}

export function randomArray(numberRows) {
    const initArray = initialArray(numberRows);
    let emptyIndex = initArray.length - 1;
    const randArray = initArray;
    const moveArray = [];

    for (let i = 0; i < numberRows * numberRows * 30
        ; i++) {
        const randIndex = Math.floor(Math.random() * Math.floor(initArray.length));
        if (randIndex != emptyIndex) {
            if (Math.abs(emptyIndex - randIndex) == numberRows || Math.abs(emptyIndex - randIndex) == 1) {
                if (!(((emptyIndex + 1) % numberRows === 0 || (randIndex + 1) % numberRows === 0) &&
                    (emptyIndex % numberRows === 0 || randIndex % numberRows === 0))) {
                    if (!moveArray[moveArray.length - 1] || (!((moveArray[moveArray.length - 1].indexOf(randIndex) !== -1 ) && (moveArray[moveArray.length - 1].indexOf(emptyIndex) !== -1 )))) {

                        moveArray.push([emptyIndex, randIndex]);
                        randArray[emptyIndex] = randArray[randIndex];
                        randArray[randIndex] = ' ';
                        emptyIndex = randIndex;
                    }
                }
            }
        }
    }
    return {randArray, moveArray};
}

export default function chooseClass(difference, numberRows) {
    let classSlide;
    if (difference === 1) classSlide = 'slide-right';
    if (difference === -1) classSlide = 'slide-left';
    if (difference === numberRows) classSlide = 'slide-top';
    if (difference === -numberRows) classSlide = 'slide-bottom';
    return classSlide;
}