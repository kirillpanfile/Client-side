// const app = {
//     colors: ["red", "green", "blue", "aqua", "purple", "wheat"],
//     images: ["https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"],
//     inputs: document.querySelectorAll("input"),
//     res: document.getElementById("res"),
//     bgColorChnage: function () {
//         document.body.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)]
//     },
//     maxim: function () {
//         this.res.innerText = this.inputs[0].value > this.inputs[1].value ? this.inputs[0].value : this.inputs[1].value
//     },
//     img: function () {
//         document.getElementById("image").src = this.images[Math.floor(Math.random() * this.images.length)]
//     }
// };
// (() => {
//     document.getElementById("bgColorChnager").addEventListener("click", () => app.bgColorChnage());
//     document.getElementById("max").addEventListener("click", () => app.maxim());
//     document.getElementById("change").addEventListener("click", () => app.img());
//     document.querySelectorAll(".paragraf").forEach(el => {
//         el.style.color = "purple";
//         el.style.font = "serif"
//     })
// })();
