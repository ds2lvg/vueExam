"use strict";

function Person(name, yearCount) {
    this.name = name;
    this.age = 0;
    var incrAge = function incrAge() {
        this.age++;
    };
    /* 연결 메서드안쓰고 바깥영역에 this를 선언해서 쓰는 방법도 있음
    var outerThis = this
    var incrAge = function(){
        outerThis.age++;
    }
    */
    for (var i = 0; i < yearCount; i++) {
        // 내부 함수속의 this는 Person을 가리키질 못함
        // incrAge();
        // 호출하는 문맥을 넘어 this를 연결하려면 bind(), apply(), call() 필요
        incrAge.apply(this);
    }
}
var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : " + p1.age); // 홍길동님의 나이 : 0