//2562번 문제

const { checkPrime } = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({input:process.stdin, output:process.stdout,});


let lines=[];//입력 라인
let numlist = [];//숫자 배열
if(lines.length===0){
    rl.on('line',function(input){
        lines.push(input);
        if((lines.length===9)){//입력이 완료되면
            numlist = lines.map(element => parseInt(element));
            if(checkValue()){//모든 입력값이 입력값 조건을 만족하면
                rl.close();
            }
        }
    });
    rl.on('close',function(){
        output();
        process.exit();
    });
}


//입력값 확인(0<자연수<100)
function checkValue(){
    for(let i of lines){
        if((1>i)||(i>99)){//(입력값이 1보다 작거나 99보다 크면)
            return false;
        }
    }
    return true;
}

//출력
function output(){
    const max = Math.max(...numlist);
    console.log(max);
    console.log(numlist.indexOf(max)+1);
}