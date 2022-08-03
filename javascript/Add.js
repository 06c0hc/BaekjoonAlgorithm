//1000번 문제



const readline = require('readline');

//create Interface함수를 이용해 readline객체 생성
const rl = readline.createInterface({input: process.stdin,output: process.stdout,});


let A, B;

if((A==undefined) && (B==undefined)){
    input();
}
output();





//값 입력
function input(){
    process.stdout.write("A와 B의 값을 각각 입력하세요.(단, 0 < A, B < 10) : ");
    rl.on('line',function(operands){
            [A,B] = operands.split(" ").map(element => parseInt(element));
            if(check()){
                rl.close();
            }else{
                process.stdout.write("입력 조건이 만족되지 않았습니다.다시 입력하세요.. : ");
            }
    });
}



//입력값 체크
function check(){
    if((0 < A) && (B < 10)){
        return true;
    }
    return false;
}

//결과 출력
function output(){
    rl.on('close',function(){
        console.log(A+B);
        process.exit();
    });
}



/*
참고 링크
https://chanhuiseok.github.io/posts/js-10/ : 구조 분해 할당
https://sebhastian.com/javascript-console-input/ : 콘솔 입력 받기
*/