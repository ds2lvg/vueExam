// ${}쓸땐 '' 이게 아니라 ``로 감싸야 한다
function addContact(name, mobile, home="없음", address="없음", email="없음") {
    var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;
    console.log(str);
}

addContact("안지현", "010-1234-5678");
addContact("김설현", "010-2345-2345", "02-2345-0099", "서울시");