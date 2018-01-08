function Person(name, yearCount) {
    this.name = name;
    this.age = 0;
    // arrow function안의 this는 외부 영역(Person)의 this와 같음  
    var incrAge = ()=>{
        this.age++; 
    }
    for (let i = 0; i < yearCount; i++) {
        // arrow function은 내부 함수속의 this는 Person을 가리킴
        incrAge();
    }
}
var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : " + p1.age); // 홍길동님의 나이 : 20