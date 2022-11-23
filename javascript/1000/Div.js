//1008번 문제

const { on } = require("events");
const readline = require("readline");

const rl = readline.createInterface({input:process.stdin, output:process.stdout,});

let A, B;

if((A===undefined)&&(B===undefined)){
    rl.on("line",function(operands){
        [A,B] = operands.split(' ').map(element => parseInt(element));
        if(check()){
            rl.close();
        }
    });
}
rl.on("close",function(){
    console.log(A/B);
    process.exit();
});


//입력 값 확인
function check(){
    if((0<A)&&(B<10)){
        return true;
    }
    return false;
}