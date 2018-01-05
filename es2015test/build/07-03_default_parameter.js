"use strict";

// ${}쓸땐 '' 이게 아니라 ``로 감싸야 한다
function addContact(name, mobile) {
    var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "없음";
    var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "없음";
    var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "없음";

    var str = "name=" + name + ", mobile=" + mobile + ", home=" + home + ", address=" + address + ", email=" + email;
    console.log(str);
}

addContact("안지현", "010-1234-5678");
addContact("김설현", "010-2345-2345", "02-2345-0099", "서울시");