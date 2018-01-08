'use strict';

var _utility = require('./utils/utility1');

console.log((0, _utility.add)(4, 5)); // as로 이름 변경가능
// from의 경로는 상대경로임
// 경로에서 파일확장자(.js) 생략 가능,

console.log(_utility.var1);

// ★ babel src -d build로 트랜스 파일한뒤에 트랜스 파일된 코드를 실행해야 작동
// node build/07-17_import.js