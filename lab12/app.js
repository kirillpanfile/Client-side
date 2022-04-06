//! For in javascript lucreaza in felul urmator :
/** 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
*/

//? avem variabila i care este egal cu 0 de la inceput si avem variabila n sau in cazul dat array.length care este egala c lungimea la masiv vesctor sau set si iteram prin i toate pozitiile masivului

const rand = (n) => Math.ceil(Math.random(n) * Math.sqrt(3)) + 1
console.log(rand(4));

const invers = (e)=> e.split('').reverse().join('')

console.log(invers("Salut"));

const max = (e)=> {
    let x =String(e).split('').sort((a,b)=>a+b)
    return x[0]
}

console.log(max(42136));

const azi = new Date();
const viitor = new Date("01/10/2022");

console.log(Math.floor((azi-viitor)/ (1000 * 3600 * 24)));