"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 클래스
var Person = function () {
    // constructor : 생성자
    function Person(name, tel, address) {
        _classCallCheck(this, Person);

        this.name = name;
        this.tel = tel;
        this.address = address;
        // 생성자에서 클래스의 count를 증가시키므로 생성할때마다 카운트 증가
        if (Person.count) Person.count++;else Person.count = 1;
    }
    // 인스턴스 메서드 : 객체 생성후 실행가능


    _createClass(Person, [{
        key: "toString",
        value: function toString() {
            return "name=" + this.name + ", tel=" + this.tel + ", address=" + this.address;
        }
        // static 메서드 : 클래스로 접근해서 실행가능 => 객체로 실행 불가!

    }], [{
        key: "getPersonCount",
        value: function getPersonCount() {
            return Person.count;
        }
    }]);

    return Person;
}();

var p1 = new Person("안지현", "010-1234-5678", "서울");
var p2 = new Person("김설현", "010-1234-5678", "서울");
console.log(p1.toString());
console.log(p2.toString());
console.log(Person.getPersonCount());