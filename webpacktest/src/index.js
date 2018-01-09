import calc from './utils/utility.js';

let x = 5;
let y = 5;
let str = `<h2>${x} + ${y} = ${calc.add(x,y)}<h2>`;

document.getElementById("app").innerHTML = str;