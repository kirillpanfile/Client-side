// Varianta II

//cmmdc
const cmmdc = (a, b) => {
    while (a != b) a > b ? a = a - b : b = b - a;
    return a
}
console.log(cmmdc(4, 18));

//oglindit 
const oglindit = (a) => a.toString().split('').reverse().join('')
console.log(oglindit(418))

//cifrepare 
const cifrepare = (a) => a.toString().split('').map(elem => Number(elem) % 2 == 0 ? elem : "").join('')
console.log(cifrepare(418))

//cifreimpare
const cifreimpare = (a) => a.toString().split('').map(elem => Number(elem) % 2 != 0 ? elem : "").join('')
console.log(cifreimpare(77418))