//3052번 문제


const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout,});

let lines = [];//입력 라인
let numlist = [];//정수 배열
let remainderList = [];//서로 다른 나머지 배열

if(lines.length===0){
    rl.on('line',function (input){
        lines.push(input);
        if(lines.length===10){
            numlist = lines.map((element)=>parseInt(element));
            if(check()){
                moduloFortyTwo();
                rl.close();
            }
        }
    });
    rl.on('close', function(){
        output();
        process.exit();
    });
}


//입력값 확인(0 <= 입력값 <= 1000)
function check(){
    for(let num of numlist){
        if((0>num)||(num>1000)){
            return false;
        }
    }
    return true;
}


//42로 나눈 나머지 구하기
function moduloFortyTwo(){
    for(let num of numlist){
        //만약 remainderList에 42로 나눈 나머지가 없으면 추가
        if(!remainderList.includes(num%42)){
            remainderList.push(num%42);
        }
    }
}

//출력
function output(){
    console.log(remainderList.length);
}
