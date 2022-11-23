//10869번 문제

const readline = require("readline");

const rl = readline.createInterface({input:process.stdin,output:process.stdout,});


let A, B;


if((A===undefined)&&(B===undefined)){
   rl.on('line',function(operands){
       [A, B] = operands.split(' ').map(element => parseInt(element));
       if(check()){
           rl.close();
       }
   });
}
rl.on('close',function(){
    console.log(Add());
    console.log(Sub());
    console.log(Mul());
    console.log(Div());
    console.log(Rem());
    process.exit();
});



//덧셈
function Add(){
    return A+B;
}


//뺄셈
function Sub(){
    return A-B;
}


//곱셈
function Mul(){
    return A*B;
}


//나눗셈(몫)
function Div(){
    return parseInt(A/B);
}


//나머지
function Rem(){
    return A%B;
}



//입력값 체크
//조건 : A와 B는 자연수, 1<=A, B<=10000
function check(){
    if(((1<=A)&&((0<B)&&(B<=10000)))){
        return true;
    }
    return false;
}