"use strict";

var arr = [10, 20, 30, 40];
// arr배열의 값 10,20,30을 a1,a2,a3변수에 각각 할당한다
var a1 = arr[0],
    a2 = arr[1],
    a3 = arr[2];

console.log(a1, a2, a3); // 10 20 30

var p1 = { name: "홍길동", age: 20, gender: "M" };
// p1객체의 name속성을 변수n에, age속성을 변수a에, gender속성을  변수gender(이름 동일시 생략가능)
var n = p1.name,
    a = p1.age,
    gender = p1.gender;

console.log(n, a, gender); // 홍길동 20 M