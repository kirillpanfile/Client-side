const frame = document.getElementById("frame");
const iframeWindow = frame.contentWindow;
const changeFrame = document.getElementById("changeFrame");
const history = document.getElementById("history");
const input = document.querySelector(".input");
const protocol = document.getElementById("protocol");
const url = document.URL;
changeFrame.addEventListener(
  "click",
  () => (frame.src = frame.src == url ? "page1.html" : "index.html")
);
iframeWindow.onfocus = function () {
  frame.style.width = "600px";
  console.log("focus");
};
iframeWindow.onblur = function () {
  frame.style.width = "400px";
  console.log("blur");
};

history.addEventListener("click", () => {
  console.log(window.history.length);
  document.write(window.history.go(-input.value));
});
protocol.addEventListener("click", () => {
  console.log(
    window.location.href,
    window.location.hostname,
    window.location.pathname,
    window.location.protocol
  );
});
