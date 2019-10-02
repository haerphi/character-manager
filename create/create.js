"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var postBTN = document.querySelector(".postBTN");
postBTN.addEventListener("click", function () {
    var name = document.querySelector("#hero-name")
        .value;
    var shortdesc = (document.querySelector("#short-desc")).value;
    var longdesc = (document.querySelector("#long-desc")).value;
    var image = document.querySelector("#image").files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        var split = reader.result.split(",");
        var data = {
            name: name,
            description: longdesc,
            shortDescription: shortdesc,
            image: split[1]
        };
        utils_1.axiosPost(data).then(function () {
            window.location.href = "../";
        });
    };
    reader.readAsDataURL(image);
});
