export default function getScores() {
    let scoreArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let score;
        if (+key) {
            score = JSON.parse(localStorage.getItem(key));
            if (score.moves) scoreArray.push(score);
        }
    }
    return scoreArray.sort((a, b) => a.moves > b.moves ? 1 : -1);
}