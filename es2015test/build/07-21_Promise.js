"use strict";

// 기존의 비동기가 완료됬을때 콜백함수 처리하는 방식은 많아지면 예외처리가 힘듬
// Promise객체를 생성할 때 전달하는 함수가 비동기로 실행
var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var num = Math.round(Math.random() * 20);
        var isValid = num % 2;
        if (isValid) {
            // resolve() : then()에 등록된 함수가 호출
            resolve(num);
        } else {
            // reject() : catch()에 등록된 함수가 호출
            reject(num);
        }
    }, 2000);
});

p.then(function (num) {
    console.log("홀수 : " + num);
}).catch(function (num) {
    console.log("짝수 : " + num);
});

console.log("20까지의 난수중 홀짝 구분");
console.log("결과는 2초후에");