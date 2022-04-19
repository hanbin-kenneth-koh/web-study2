//const  중간에 값이 변경되지 않게 변수 저장할 수 있다.
//공식문서 mdn javascript
/*
let a = 100;
let b = "문자";
let arr = [1,2,3,4,5,true,"문자"]
let dic = {
    "key":"value"
}


dic.key2 = "value2"

console.log(arr[0])

*/

/*
function x(num){

    return num;
    
}

let y = x(100)

console.log(y)
*/




let str = "웹,사";
let str_arr = str.split(",");

console.log(str_arr)

let str_str = str_arr.join("*");

console.log(str_str)