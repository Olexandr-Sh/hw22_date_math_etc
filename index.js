
let arr = [23, 34, 55, 3, 7, 14, 28, 1, 88, 73, 99];

let evenNum = arr.filter(x => x % 2 === 0);
console.log(evenNum);

function addScores(runningTotal, popularity) {
    return runningTotal + popularity;
}

let scoresTotal = evenNum.reduce(addScores, 0);
const averagePopularity = scoresTotal / evenNum.length;
console.log("Average popularity:", averagePopularity);


let start = new Date();

let birthday = new Date(1995, 05, 16, 0, 0);

console.log(start === birthday);
console.log(birthday - start);