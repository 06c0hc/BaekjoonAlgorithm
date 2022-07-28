//1000번 문제

const readline = require('readline');
//const {stdin:input, stdout:output} = require("process");

//create Interface함수를 이용해 readline객체 생성
const rl = readline.createInterface({input: process.stdin,output: process.stdout,});


//구조 분해 할당(Destructuring Assignment)을 사용
rl.on('line',(values)=>{
    let [a,b] = values.split(' ');
    console.log(a+b);
    rl.close();
});


//참고 링크
//구조 분해 할당
//https://hashcode.co.kr/questions/7543/javascript-변수-여러개-입력받을때-질문
//https://chanhuiseok.github.io/posts/js-10/

//콘솔 입력 받기
//https://velog.io/@zaman17/node.js-자바스크립트-콘솔로-값-입력받기


