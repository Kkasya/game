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

    for (let i = 0; i < 50; i++) {
        const randIndex = Math.floor(Math.random() * Math.floor(initArray.length));
        if (randIndex != emptyIndex) {
            if (Math.abs(emptyIndex - randIndex) == 4 || Math.abs(emptyIndex - randIndex) == 1) {
                randArray[emptyIndex] = randArray[randIndex];
                randArray[randIndex] = ' ';
                emptyIndex = randIndex;
            }
        }
    }
    return randArray;

}