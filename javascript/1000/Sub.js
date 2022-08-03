//1001번 문제


const readline = require("readline");


const rl = readline.createInterface({input:process.stdin, output:process.stdout,});

let A, B;

//process.stdout.write("A와 B의 값을 각각 입력하세요.(단, 0 < A, B < 10) : ");
rl.on("line",function(operands){
    [A, B] = operands.split(' ').map(element => parseInt(element));
    if(check()){
        rl.close();
    }/*else{
        process.stdout.write("입력 조건에 맞지 않습니다. 다시 입력하세요... : ");
    }*/
});

rl.on("close", function(){
    console.log(A-B);
    process.exit();
});


function check(){
    if((0 < A)&&(B < 10)){
        return true;
    }
    return false;
}