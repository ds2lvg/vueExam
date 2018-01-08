"use strict";

// 전달받은 객체는 구조 분해 할당을 수행함
function addContact(_ref) {
    var name = _ref.name,
        phone = _ref.phone,
        _ref$email = _ref.email,
        email = _ref$email === undefined ? "이메일 없음" : _ref$email,
        _ref$age = _ref.age,
        age = _ref$age === undefined ? 0 : _ref$age;

    console.log("이름 : " + name);
    console.log("전번 : " + phone);
    console.log("이메일 : " + email);
    console.log("나이 : " + age);
}

// 함수호출 할때 객체를 파라미터로 전달 가능(전달 순서는 실행결과에 영향을 미치지 않음)
addContact({
    phone: "010-3434-8989",
    name: "이몽룡"
});