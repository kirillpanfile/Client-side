const loginInputName = document.getElementById("loginInputName");
const loginInputPass = document.getElementById("loginInputPass");
const loginInputSubmit = document.getElementById("loginInputSubmit");
const form = document.getElementById("form");
import cfg from "../js/config.js";
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = { name: loginInputName.value, pass: loginInputPass.value };
  if (
    cfg.users.filter(
      (event) => event.name == data.name && event.pass == data.pass
    ).length > 0
  )
    window.location.href = "../html/main.html";
  else alert("Worng Username or Password");
});
