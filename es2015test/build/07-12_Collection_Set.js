"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fruitSet = new Set();
fruitSet.add("사과");
fruitSet.add("배");
fruitSet.add("사과");
fruitSet.add("포도");
console.log(fruitSet); // Set { '사과', '배', '포도' }

var jihyun = new Set(["사과", "포도", "배"]);
var sulhyun = new Set(["복숭아", "키위", "배"]);

// 합집합
var union = new Set([].concat(_toConsumableArray(jihyun.values()), _toConsumableArray(sulhyun.values())));
console.log(union); // Set { '사과', '포도', '배', '복숭아', '키위' }

// 교집합 : filter()메서드 이용
var intersection = new Set([].concat(_toConsumableArray(jihyun.values())).filter(function (e) {
  return sulhyun.has(e);
}));
console.log(intersection); // Set { '배' }

// 차집합 : filter()메서드 이용
var diff = new Set([].concat(_toConsumableArray(jihyun.values())).filter(function (e) {
  return !sulhyun.has(e);
}));
console.log(diff); //  Set { '사과', '포도' }