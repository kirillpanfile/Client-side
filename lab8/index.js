const phone = (event) => {
    if (/\d/.test(String.fromCharCode(!event.charCode ? event.which : event.charCode))) alert(true);
    event.preventDefault(); alert(false)
}
let ans = true;
function input_select() {
   if(ans) { 
    document.body.style.backgroundColor = 'red'
    ans = false
   }else {
    document.body.style.backgroundColor = 'blue'
    ans = true
   }

}

function f() {
    alert('Ati apasat pe button ura!')
}

const em = (event) => {
    if (/^[A-za-z0-9-@_+.]/.test(String.fromCharCode(!event.charCode ? event.which : event.charCode))) return true;
    event.preventDefault();
    return false;
}