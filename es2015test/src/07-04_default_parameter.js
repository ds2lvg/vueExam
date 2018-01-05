// ...파라미터명 : 가변 파라미터로 갯수 상관없이 다 받을수 있음
function foodReport(name, age, ...favoriteFoods){
    console.log(name + " , " + age);
    console.log(favoriteFoods);
}

foodReport("안지현", 22, "짜장면", "냉면", "불고기");
foodReport("김설현", 24, "초밥");