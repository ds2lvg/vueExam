let arr = [10, 20, 30, 40];
let [a1,a2,a3] = arr;
console.log(a1,a2,a3); // 10 20 30

let p1 = { name:"홍길동", age:20, gender:"M" };
let { name:n, age:a, gender} = p1;
console.log(n,a,gender); // 홍길동 20 M