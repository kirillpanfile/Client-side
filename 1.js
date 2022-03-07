// let x = 10, y = 20;
// const m = Math;
// let arr = {
//     a: x - y + 4 ? "true" : "false",
//     b: m.sqrt(x) + m.sqrt(y) - 2 * y - 9 > 0 ? "true" : "false",
//     c: 2 * x + y - 2 >= 0 ? "true" : "false",
//     d: x < 0 && x - y < 1 ? "true" : "false"
// }
// function xy() {
//     for (const element in arr) console.log(`${element})`, arr[element])
// }; xy()

fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => console.log(data))
