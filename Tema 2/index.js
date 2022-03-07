//Problema 21 Pag 22
const GRADES = 180;
function main() {
    let a = 60, b = 60, c = 60;
    if (a + b + c == GRADES) {
        if (a == b && a == c) console.log('Echilateral');
        if (a == b && a != c) console.log('Isoscel');
        if (a != b && a != c) console.log('Scalen');
    }
    else console.log('false');
}; main()


//Problema 29 Pag 40
let numar = 45357637465827, ans = [];
numar = numar.toString().split('')
for (let index = numar.length; index >= 0; index--) {
    ans.push(numar[index]);
}
console.log(Number(ans.join('')))

//Problema 65
let mihai = 20
    , suma = 1
for (let i = 0; i <= mihai; i++) {
    console.log(suma);
    suma += suma * 2 + i;
}
console.log(suma);
