import cfg from "./config.js";
document.querySelectorAll(".card").forEach((el) => {
  el.addEventListener(
    "focus",
    (callback) => (callback.target.style.width = "120px")
  );
  el.addEventListener(
    "focusout",
    (callback) => (callback.target.style.width = "100%")
  );
});
const newsletter = document.getElementById("newsletter");
const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!cfg.email.test(newsletter.value)) {
    alert("Email Gresit");
  }
});
