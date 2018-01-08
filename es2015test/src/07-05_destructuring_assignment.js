let arr = [10, 20, 30, 40];
// arr배열의 값 10,20,30을 a1,a2,a3변수에 각각 할당한다
let [a1,a2,a3] = arr;
console.log(a1,a2,a3); // 10 20 30

let p1 = { name:"홍길동", age:20, gender:"M" };
// p1객체의 name속성을 변수n에, age속성을 변수a에, gender속성을  변수gender(이름 동일시 생략가능)
let { name:n, age:a, gender} = p1;
console.log(n,a,gender); // 홍길동 20 M