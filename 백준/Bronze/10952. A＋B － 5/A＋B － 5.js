const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");



function solution() {
  for(let i=0; i<input.length; i++){
    input[i] = input[i].split(' ').map((item) => +item);

    if(input[i][0] === 0 && input[i][1] === 0) break;
    console.log(input[i][0]+input[i][1]);


   
  
}
}
solution();
