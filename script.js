"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
function activeButton() {
    var bts = document.querySelectorAll(".deleteButton");
    bts.forEach(function (el) {
        el.addEventListener("click", function () {
            var id = el.value;
            if (confirm("Voulez-vous vraiment supprimer cette élement ?")) {
                utils_1.axiosDelete(id).then(function () {
                    document.location.reload(true);
                });
            }
        });
    });
}
function buildCards(table) {
    console.log(table);
    table.forEach(function (element) {
        var temp = "<div class=\"card\" width=\"100px\" height=\"100px\">\n            <a href=\"./single/single.html?id=" + element.id + "\"><img src=\"data:image/gif;base64," + element.image + "\" alt=\"Image vide\"></a>\n            <div class=\"card-body\">\n                <h5 class=\"card-title text-center name\">" + element.name + "</h5>\n                <p class=\"card-text text-center short-desc\">" + element.shortDescription + "</p>\n                <div class=\"text-center\">\n                    <a href=\"./modify/modify.html?id=" + element.id + "\" class=\"btn btn-primary\">Modify</a>\n                    <button type=\"button\" value=" + element.id + " class=\"btn btn-primary deleteButton\">Delete</button>\n                </div>\n                <input type=\"hidden\" class=\"charac-id\" value=\"" + element.id + "\" >\n            </div>\n        </div>";
        var target = document.querySelector(".personnalcenter");
        target.innerHTML += temp;
    });
    activeButton();
}
utils_1.axiosGet("").then(function (rep) {
    buildCards(rep);
});
