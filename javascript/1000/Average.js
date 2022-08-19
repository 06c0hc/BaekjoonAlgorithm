//1546번 문제

const readline = require('readline');

const rl = readline.createInterface({input:process.stdin, outout:process.stdout});

let lines = [];//입력 라인
let scores = [];//과목 점수들
let NumberOfSubject = 0;//과목 수
if(lines.length===0){
    rl.on('line',function(inputs){
        lines.push(inputs);
        if(lines.length===2){
            NumberOfSubject = Number(lines[0]);
            scores = lines[1].split(' ').map((element)=>parseInt(element));
            if(countSubjects()&&checkScores()){
                rl.close();
            }
        }
    });
    rl.on('close',function(){
        console.log(toFloat(average()));//평균값을 부동소수점으로 출력
        process.exit();
    });
}


//점수 조작
function rig(){
    const num = Math.max(...scores);
    return scores.reduce((prev, cur)=>{
        if(cur<=num){
            prev.push((cur/num)*100);
        }
        return prev;
    },[]);
}

//평균 계산
function average(){
   const RigedScores = rig();//조작된 점수
   let sum = 0;//합계
   for(let score of RigedScores){
        sum+=score;
   }
   return (sum/RigedScores.length);
}


//과목 수의 입력 조건(과목 수 <= 1000)
function countSubjects(){
    if(NumberOfSubject <= 1000){
        return true;
    }
    return false;
}

//각 과목 점수 입력 조건(0 <= 각 과목 점수 <= 100, 입력된 과목들의 점수 중 한 과목 이상은 0보다 큼)
function checkScores(){
    for(let score of scores){
        if((0>score)||(score>100)){
            return false;
        }
    }
    return true;
}


//정수를 부동소수점으로 변환
function toFloat(average){
    if(Number.isInteger(average)){
        return average.toFixed(1);//평균값이 정수일땐 소수점 이하 한자릿수는 0으로 출력
    }
    return average;
}