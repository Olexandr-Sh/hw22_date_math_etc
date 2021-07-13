let arr = []
while(arr.length < 8){
  let randomnumber = Math.floor(Math.random()*100) + 1;
  if(arr.indexOf(randomnumber) > -1) continue;
  arr[arr.length] = randomnumber;
}
console.log(arr);

// let arr = [23, 34, 55, 3, 7, 14, 28, 1, 88, 73, 99];

let evenNum = arr.filter(x => x % 2 === 0);
console.log(evenNum);

function addScores(runningTotal, popularity) {
    return runningTotal + popularity;
}

let scoresTotal = evenNum.reduce(addScores, 0);
const averagePopularity = scoresTotal / evenNum.length;
console.log("Average popularity:", averagePopularity);


let start = new Date();

let birthday = new Date(1995, 05, 16, 0, 0, 0);

console.log(start === birthday);
console.log(birthday - start);

let timestamp = birthday.getTime();
let checkNow = new Date(timestamp);

console.log(checkNow);

let heads = 0;
let tails = 0;
let coin = document.querySelector(".inner-box");
let flipBtn = document.querySelector(".flip-button");
let resetBtn = document.querySelector(".reset-button");

flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-circle-head 3s forwards";
    }, 100);
    heads++;
  }
  else {
    setTimeout(function () {
      coin.style.animation = "spin-circle-tails 3s forwards";
    }, 100);
    tails++;
  }
  console.log(i);
  setTimeout(updateStats, 3000);
  disableButton();
});
function updateStats() {
  document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
  document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
  
}
function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
}
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
})







