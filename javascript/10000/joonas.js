//10926번 문제

const readline = require("readline");

const rl = readline.createInterface({input:process.stdin, output:process.stdout});


let alert='';


if(alert===''){
    rl.on('line',function(oldID){
        if(IsLower(oldID)&&LengthCheck(oldID)){
            alert = oldID;
            rl.close();
        }
    });
}
rl.on('close',function(){
    console.log(alert+"??!");//놀람(??!)문자열 추가하여 출력
    process.exit();
});


//입력값 체크(알파벳 소문자 제한)
function IsLower(oldID){
    if(oldID===oldID.toLocaleLowerCase()){
        return true;
    }
    return false;
}




//문자열 길이 체크(최대 50자 제한)
function LengthCheck(oldID){
    if(oldID.length<=50){
        return true;
    }
    return false;
}
