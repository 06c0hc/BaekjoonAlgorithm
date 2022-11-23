//10480번 문제

/*
이 문제는 나머지 연산에 대한 분배 법칙과 멱등법칙이 성립함을 보여주는 문제이다.
*/

const readline = require('readline');

const rl = readline.createInterface({input:process.stdin, output:process.stdout});

let A, B, C;

if((A===undefined)&&(B===undefined)&&(C===undefined)){
    rl.on('line',function(operands){
        [A,B,C] = operands.split(' ').map(element => parseInt(element));
        if(check(A)&&check(B)&&check(C)){// 2<=A,B,C<=10000
            rl.close();
        }
    });
    rl.on('close',function(){
        process.exit();
    });
}
output();

//입력 값 확인(2<=value<=10000)
function check(value){
    if((2<=value)&&(value<=10000)){
        return true;
    }
    return false;
}

//출력
function output(){
    console.log((A+B)%C);
    console.log(((A%C)+(B%C))%C);
    console.log((A*B)%C);
    console.log(((A%C)*(B%C))%C);
}