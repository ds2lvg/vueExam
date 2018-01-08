// as로 이름 변경가능
// from의 경로는 상대경로임
// 경로에서 파일확장자(.js) 생략 가능,
import { add, var1 as v } from './utils/utility1';

console.log(add(4,5));
console.log(v);

// ★ babel src -d build로 트랜스 파일한뒤에 트랜스 파일된 코드를 실행해야 작동
// node build/07-17_import.js