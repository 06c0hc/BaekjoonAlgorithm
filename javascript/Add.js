//1000번 문제

const readline = require('readline');
//const {stdin:input, stdout:output} = require("process");

//create Interface함수를 이용해 readline객체 생성
const rl = readline.createInterface({input: process.stdin,output: process.stdout,});




//구조 분해 할당(Destructuring Assignment)을 사용
rl.question("A와 B를 입력하세요 : ", function(operands){
    let[A,B] = operands.split(" ").map(element => parseInt(element));
    console.log(A+B);
    rl.close();
});


//참고 링크
//구조 분해 할당
//https://chanhuiseok.github.io/posts/js-10/


//콘솔 입력 받기
//https://sebhastian.com/javascript-console-input/