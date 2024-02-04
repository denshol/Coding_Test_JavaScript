const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let X = +input[0];
let N = +input[1];

let sum = 0;

function solution() {
  for (let i = 2; i < N + 2; i++) {
    let [A, B] = input[i].split(" ").map(Number);
    sum += A * B;
  }
  if (X === sum) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
solution();
