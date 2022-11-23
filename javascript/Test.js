/*
//  콜백 함수 호출
function test(callback){
    callback();//콜백함수 호출
}


test(function (A, B){
    A = 3,B = 4;
    console.log(A+B);
});
console.log(7+8);
*/
<<<<<<< HEAD


let AnswerList = "OXXXOOOXXOOOXXXXXXXX";
AnswerList = AnswerList.split('X');//문자열 배열 반환



//불필요한 요소 삭제
AnswerList = AnswerList.filter((data)=>{
    return data != "";
});

console.log(AnswerList);


for(let i; i<AnswerList.length; i++){
    AnswerList[i].reduce();
}
=======
>>>>>>> origin/main
