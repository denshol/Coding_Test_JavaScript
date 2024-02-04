const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
let n = +input;
let str="long ";
  console.log(str.repeat(n/4)+"int") ;