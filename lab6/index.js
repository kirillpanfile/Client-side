"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var app = {
    id: document.getElementById("app"),
    images: fetch("https://picsum.photos/v2/list?page=1&limit=5"),
    random: function (num) { return Math.floor(Math.random() * num); },
    button: document.getElementById("rand"),
    ans: document.getElementById("ans"),
    imgId: document.getElementById("imgById"),
    rs: 0,
    dimensions: ['100', '150', '200', '250', '300'],
    list: document.getElementById("list"),
    size: 300
};
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var count, data, response, _i, response_1, element, _a, _b, element;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    count = 0;
                    return [4 /*yield*/, app.images];
                case 1:
                    data = _c.sent();
                    return [4 /*yield*/, data.json()];
                case 2:
                    response = _c.sent();
                    for (_i = 0, response_1 = response; _i < response_1.length; _i++) {
                        element = response_1[_i];
                        app.id.innerHTML += "<img src=\"".concat(element.download_url, "\" class=\"img\" id=\"").concat(count, "\">");
                        count++;
                    }
                    document.querySelectorAll(".img").forEach(function (el) { return el.style.width = app.size + "px"; });
                    app.button.addEventListener("click", function () {
                        app.rs = app.random(5);
                        app.ans.innerText = app.rs;
                    });
                    document.getElementById("newImg").addEventListener("click", function () {
                        app.imgId.innerHTML = "<img src=\"".concat(document.getElementById(app.rs).src, "\" class=\"img\" id=\"").concat(app.rs, "\" style=\"width:300px;\">");
                    });
                    for (_a = 0, _b = app.dimensions; _a < _b.length; _a++) {
                        element = _b[_a];
                        app.list.innerHTML += "<button>".concat(element, "</button>");
                        app.list.childNodes.forEach(function (button) {
                            button.addEventListener("click", function () {
                                app.size = +button.innerText;
                                document.querySelectorAll(".img").forEach(function (el) { return el.style.width = app.size + "px"; });
                            });
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
})(); 