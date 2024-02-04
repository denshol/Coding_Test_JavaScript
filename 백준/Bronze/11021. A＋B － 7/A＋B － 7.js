const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let n = +input[0];

function solution() {
  for (let i = 1; i <= n; i++) {
    input[i] = input[i].split(" ");
    console.log(`Case #${i}: ${+input[i][0] + +input[i][1]}`);
  }
}
solution();
