"use strict";

// ...파라미터명 : 가변 파라미터로 갯수 상관없이 다 받을수 있음
function foodReport(name, age) {
    console.log(name + " , " + age);

    for (var _len = arguments.length, favoriteFoods = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        favoriteFoods[_key - 2] = arguments[_key];
    }

    console.log(favoriteFoods);
}

foodReport("안지현", 22, "짜장면", "냉면", "불고기");
foodReport("김설현", 24, "초밥");