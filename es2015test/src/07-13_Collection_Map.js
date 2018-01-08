// Map은 key, value => key는 앨범
let teams = new Map();
teams.set("삼성 썬더스","2015~2017");
teams.set("SK 나이츠","2017~");
teams.set("삼성생명 블루밍스","2015~2017");
teams.set("KEB하나은행","2017~");
teams.set("우리카드 위비","2017~");
teams.set("히어로즈","2017~");

console.log(teams.has("LG")); // false
console.log(teams.get("삼성 썬더스")); // "2015~2017"
// clear(), delete() 메서드도 존재함