fun main(){
    InputAction()
    OutputAction()
}

//입력
fun InputAction(){
    var ages : String
    var str_ages : List<String>
    var int_ages : List<Int>
    do{
        print("Spot(s), Puff(p), Yertle(y), Jane(j) : ")
        ages = readLine()!!.toString()
        str_ages = ages.split(" ")
        int_ages = toPositiveInt(str_ages)//여기까지 진행
    }while(!isPositive(int_ages))//입력된 agelist의 원소가 모두 음수가 아닐때까지
}

//입력 받은 데이터 정수로 변환
fun toPositiveInt(str_ages : List<String>):List<Int>{
    var int_ages = MutableList<Int>(str_ages.size,{0})
    val len : Int = str_ages.size - 1
    for(i : Int in 0..len){
        int_ages.set(i,str_ages[i].toInt())//str_ages[i]를 정수로 변환해서 int_ages[i]에 대
    }
    return int_ages.toList()
}


//입력받은 값이 모두 양수인지 검사
fun isPositive(int_ages : List<Int>):Boolean{
    val len : Int = int_ages.size-1
    for(i:Int in 0..len) {
        if (int_ages.get(i) <= 0) {
            return false
        }
    }
    return true
}



//출력 (여기서 중단) 21 = 11 7 3
//d+j = s+p+y
//(s>p>y)
//Spot은 Puff보다 s-1살 더 많음
//Puff는 Yertle보다 p-1살 더 많음
//Spot은 yertle보다 y-1살 더 많음
fun OutputAction(){

}