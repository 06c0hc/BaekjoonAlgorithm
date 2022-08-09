//10818번 문제

/*
이 문제는 최대,최솟값을 찾는데 배열을 순회하며 찾을지(최대,최솟값을 각각 찾는데 반복문 2회 사용됨),
아니면 정렬을 한해서 찾을지(최대,최솟값 찾는데  반복문 1회 사용됨)에 따라 정답의 여부가 갈렸다.
*/

//백준 알고리즘에서 '맞았습니다'라고 뜬 케이스
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin, output:process.stdout,});

let lines = [];//입력 라인
let numlist = [];//배열
let count = 0;//(1번째 줄)배열 원소 개수
if(numlist.length===0){ //배열이 비어 있으면
    rl.on('line',function(input){
        lines.push(input);
        if(lines.length===2){//2번째 줄까지 입력이 완료 되었다면
            inputCount(lines[0]);
            inputNumbers(lines[1]);
            numlist.sort((a,b)=>a-b);
            if((count==numlist.length)&&(checkList())){//1번째 입력 값 만큼 배열이 초기화 되었다면
                rl.close();
            }else{
                lines.splice(0);//배열 초기화
            }
        }
    });
    rl.on('close',function(){
        output();
        process.exit();
    });
}

//배열에 저장할 값의 개수를 지정
function inputCount(value){
    if(checkCount()){
        count = Number(value);
    }
}

//배열 초기화
function inputNumbers(numbers){
    numlist = numbers.split(' ').map(element => parseInt(element));
}

//배열 원소 수 조건 확인(1 <= count <= 1000000)
function checkCount(){
    if((1<=count)&&(count<=1000000)){
        return true;
    }
    return false;
}


//배열 원소 확인(-1000000 <= i <= 1000000)
function checkList(){
    for(let i of numlist){
        if((-1000000<=i)&&(i<=1000000)){
            continue;
        }else{
            return false;
        }
    }
    return true;
}


//출력(최댓값, 최솟값)
function output(){
    console.log(`${numlist[0]} ${numlist[numlist.length-1]}`);
}




/*
백준알고리즘에서 '틀렸습니다'라고 뜬 케이스1
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin, output:process.stdout,});

let lines = [];//입력 라인
let numlist = [];//배열
let count = 0;//(1번째 줄)배열 원소 개수
if(numlist.length===0){ //배열이 비어 있으면
    rl.on('line',function(input){
        lines.push(input);
        if(lines.length===2){//2번째 줄까지 입력이 완료 되었다면
            inputCount(lines[0]);
            inputNumbers(lines[1]);
            if((count==numlist.length)&&(check())){//1번째 입력 값 만큼 배열이 초기화 되었다면
                rl.close();
            }else{
                lines.splice(0);//배열 초기화
            }
        }
    });
    rl.on('close',function(){
        output();
        process.exit();
    });
}

function inputCount(value){
        count = Number(value);
}

function inputNumbers(numbers){
    numlist = numbers.split(' ').map(element => parseInt(element));
}


function check(){
    for(let i of numlist){
        if((-1000000<=i)&&(i<=1000000)){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

//최댓값
function max(){
    let num = 0;
    for (let i of numlist){
        if(num < i){
            num = i;
        }
    }
    return num;
}

//최솟값
function min(){
    let num = 0;
    for(let i of numlist){
        if(num>i){
            num = i;
        }
    }
    return num;
}

//최댓값, 최솟값 출력
function output(){
    console.log(`${max()} ${min()}`);
}



백준 알고리즘에서 '틀렸습니다'라고 뜬 케이스2
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin, output:process.stdout,});

let lines = [];//입력 라인
let numlist = [];//배열
let count = 0;//(1번째 줄)배열 원소 개수
if(numlist.length===0){ //배열이 비어 있으면
    rl.on('line',function(input){
        lines.push(input);
        if(lines.length===2){//2번째 줄까지 입력이 완료 되었다면
            inputCount(lines[0]);
            inputNumbers(lines[1]);
            if((count==numlist.length)&&(checkList())){//1번째 입력 값 만큼 배열이 초기화 되었다면
                rl.close();
            }else{
                lines.splice(0);//배열 초기화
            }
        }
    });
    rl.on('close',function(){
        output();
        process.exit();
    });
}


function inputCount(value){
    if(checkCount()){
        count = Number(value);
    }
}

function inputNumbers(numbers){
    numlist = numbers.split(' ').map(element => parseInt(element));
}

//배열 원소 수 조건 확인(1 <= count <= 1000000)
function checkCount(){
    if((1<=count)&&(count<=1000000)){
        return true;
    }
    return false;
}

//배열 초기화 (-1000000<= i <= 1000000)
function checkList(){
    for(let i of numlist){
        if((-1000000<=i)&&(i<=1000000)){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

//최댓값
function max(){
    let num = numlist[0];
    for(let i = 1; i<numlist.length-1; i++){
        if(num < numlist[i]){
            num = numlist[i];
        }
    }
    return num;
}


//최솟값
function min(){
    let num = numlist[0];
    for(let i = 1; i<numlist.length-1; i++){
        if(num > numlist[i]){
            num = numlist[i];
        }
    }
    return num;
}

//최댓값, 최솟값 출력
function output(){
    console.log(`${max()} ${min()}`);
}
*/


/*
참고
https://hianna.tistory.com/419 : 빈(empty) 배열로 초기화하는 방법

*/