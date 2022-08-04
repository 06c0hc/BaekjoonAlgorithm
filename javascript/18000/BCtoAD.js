//문제 번호 : 18108번
//제목 : 1998년생인 내가 태국에서는 2541년생?!

const { parse } = require("path");
const readline = require("readline");
const rl = readline.createInterface({input:process.stdin ,output:process.stdout,});

let year;//년도

if(year===undefined){
    rl.on('line',function(BC){//Buddhist calendar
        year=parseInt(BC);
        if(check(BC)){
            rl.close();
        }
    });
}
rl.on('close',function(){
    console.log(translateAD());
    process.exit()
});



//입력 값 확인(1000<=BC<=3000)
function check(BC){
    if((1000<=BC)&&(BC<=3000)){
        return true;
    }
    return false;
}


//불기를 서기로 변환(서기는 태국의 불기를 기준으로 543을 빼주면 된다.)
function translateAD(){
    return year-543;
}





/*
[참고]
https://m.blog.naver.com/greenbini/110094106728 : 서기, 불기란?
https://namu.wiki/w/불멸기원 : 태국 불기를 기준으로 서기 계산하는 방법
*/