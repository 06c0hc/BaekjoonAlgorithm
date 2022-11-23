//8958번 문제

const readline = require('readline');

const rl = readline.createInterface({input:process.stdin, output:process.stdout});

let lines = [];//입력라인 1번째 줄은 테스트 케이스 개수, 2번째 줄부터는 테스트 케이스 문자열
let TestCase = 0;//테스트 케이스 개수

if(lines.length===0){
    rl.on('line',function(inputs){
        lines.push(inputs);
       if(lines.length<=0){//테스트 케이스 개수
            TestCase = Number(lines[0]);
       }else{//테스트 케이스 처리
          //테스트 케이스 문자열 길이 검사

       }

    });
    
}
rl.on('close',function(){
    process.exit();
});




//입력된 테스트 케이스 길이 검사
//입력된 문자열의 길이는 0보다 크고 80보다 작다
function checkTestCase(OXstring){
    if((0<OXstring.length)&&(OXstring<80)){
       return true;
    }
    return false;
}


//반복문으로 순회하면서 테스트케이스의 요소를 하나하나 체크하는 방식

//최대 80개


//점수 산출
function score(OXstirng){
    
}

//테스트 케이스 처리
function processing(){
    let AnswerList = [];
    let toScoreList = [];
    for(let i=1; i<lines.length; i++){
        //문자열 분해('X'를 기준으로)하고 불필요한 문자열('')요소를 삭제
        AnswerList = lines[i].split('X').filter((item)=>{
            return item != '';
        });
        //점수 산출
        //AnswerList = lines[i]를 'O'로만 이루어진 문자열 배열을 만든 상태임 ex)['OO','OOOO',...]


        //toScoreLiset = 'O'로 이루어진 각 요소들을 점수로 환산 ex) [3,10,...]
        for(let j=0; j<AnswerList.length; j++){
            toScoreList = AnswerList.map((element)=>{
                return sum(element.length);
            });
        }

        //환산된 점수들을 모두 더해서 최종 점수 환산
        return toScoreList.reduce((prev,cur)=>{
            return prec + cur;
        },0);
    }
}

//1부터 EndNum까지의 합을 계산
function sum(EndNum){
    let total = 0;
    for(let i = 1;i<=EndNum;i++){
        total+=i;
    }
    return total;
}