"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 클래스2
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

var Cheerleader = function (_Person) {
    _inherits(Cheerleader, _Person);

    // constructor : 생성자
    function Cheerleader(name, tel, address, agency, team) {
        _classCallCheck(this, Cheerleader);

        var _this = _possibleConstructorReturn(this, (Cheerleader.__proto__ || Object.getPrototypeOf(Cheerleader)).call(this, name, tel, address));

        _this.agency = agency;
        _this.team = team;
        return _this;
    }
    // 인스턴스 메서드 : 객체 생성후 실행가능


    _createClass(Cheerleader, [{
        key: "toString",
        value: function toString() {
            return _get(Cheerleader.prototype.__proto__ || Object.getPrototypeOf(Cheerleader.prototype), "toString", this).call(this) + ("agency=" + this.agency + ", team=" + this.team);
        }
    }, {
        key: "getInfo",
        value: function getInfo() {
            return this.agency + " \uC18C\uC18D\uC0AC\uC758 " + this.name + "\uC740 " + this.team + "\uD300\uC758 \uCE58\uC5B4\uB9AC\uB354\uC785\uB2C8\uB2E4";
        }
    }]);

    return Cheerleader;
}(Person);

var p1 = new Cheerleader("안지현", "010-1234-5678", "서울", "HSCOM", "넥센 히어로즈");
var p2 = new Cheerleader("서현숙", "010-1234-5678", "안양", "플레이위드어스 스포테인먼트", "안양 한라");

// 오버라이딩 된 toString()가 실행됨
console.log(p1.toString());
console.log(p1.getInfo());

console.log(p2.toString());
console.log(p2.getInfo());

// Person을 상속받았기때문에 Cheerleader도 getPersonCount() 사용 가능
console.log("Cheerleader의 인스턴스 갯수" + Cheerleader.getPersonCount());