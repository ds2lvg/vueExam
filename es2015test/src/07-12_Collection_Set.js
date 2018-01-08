var fruitSet = new Set();
fruitSet.add("사과");
fruitSet.add("배");
fruitSet.add("사과");
fruitSet.add("포도");
console.log(fruitSet); // Set { '사과', '배', '포도' }

var jihyun = new Set(["사과","포도","배"]);
var sulhyun = new Set(["복숭아","키위","배"]);

// 합집합
var union = new Set([...jihyun.values(), ...sulhyun.values()]);
console.log(union); // Set { '사과', '포도', '배', '복숭아', '키위' }

// 교집합 : filter()메서드 이용
var intersection = new Set([...jihyun.values()].filter(e => sulhyun.has(e)));
console.log(intersection); // Set { '배' }

// 차집합 : filter()메서드 이용
var diff = new Set([...jihyun.values()].filter(e => !sulhyun.has(e)));
console.log(diff); //  Set { '사과', '포도' }