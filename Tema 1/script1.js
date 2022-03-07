//========================================================================================================================================================
//a)
let m = Math;
function ctg(x) { return 1 / m.tan(x); }
let a = 4, b = 3, c = 1, x = 6, y = 9;
const first = a * m.pow(x, 2) + b * x + c;
console.log("🚀 ~ file: script.js ~ line 5 ~ first", first)
//b)
const second = (3 * m.pow(x, 2) + 7) / (2 * x - 1)
console.log("🚀 ~ file: script.js ~ line 8 ~ second", second)
//c)
const trei = m.sqrt(2 * m.pow(x, 2) + x * y)
console.log("🚀 ~ file: script.js ~ line 11 ~ trei", trei)
//d)
const patru = a * m.cos(2 * x) - m.sin(y)
console.log("🚀 ~ file: script.js ~ line 14 ~ patru", patru)
//e)
const cinci = m.tan(x) + ctg(y)
console.log("🚀 ~ file: script.js ~ line 17 ~ cinci", cinci)
//f)
const sase = m.pow(m.E, 2 * x + 1) + m.log(y) / m.log(3);
console.log("🚀 ~ file: script.js ~ line 20 ~ sase", sase)
//g)
x = 1 / 5;
y = 0;
const sapte = m.asin(5 * x) - m.pow(m.acos(2 * y), 3);
console.log("🚀 ~ file: script.js ~ line 20 ~ sapte", sapte)
//11
const l = 12;
const aria = 6 * m.pow(l, 2)
console.log("🚀 ~ file: script1.js ~ line 30 ~ aria", aria)
const volum = m.pow(l, 3)
console.log("🚀 ~ file: script1.js ~ line 30 ~ volum", volum)