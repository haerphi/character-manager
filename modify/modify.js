"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var url_string = window.location.href; //récupère l'url de la page sous forme de string
var url = new URL(url_string); //transforme le string en URL
var id = url.searchParams.get("id"); //id de character
utils_1.axiosGet(id).then(function (rep) {
    console.log(rep);
    var name = document.querySelector("#hero-name");
    name.value = rep.name;
    var img = document.querySelector("#image");
    img.src = "data:image/gif;base64," + rep.image;
    var shortdesc = document.querySelector("#short-desc");
    shortdesc.value = rep.shortDescription;
    var desc = document.querySelector("#long-desc");
    desc.textContent = rep.description;
});
var postBTN = document.querySelector(".postBTN");
postBTN.addEventListener("click", function () {
    var name = document.querySelector("#hero-name")
        .value;
    var shortdesc = (document.querySelector("#short-desc")).value;
    var longdesc = (document.querySelector("#long-desc")).value;
    var image = document.querySelector("#input-image")
        .files;
    if (image.length > 0) {
        console.log("Hello");
        var file = image[0];
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            var split = reader_1.result.split(",");
            var data = {
                name: name,
                description: longdesc,
                shortDescription: shortdesc,
                image: split[1]
            };
            console.log(data);
            utils_1.axiosPut(id, data).then(function () {
                window.location.href = "../";
            });
        };
        reader_1.readAsDataURL(file);
    }
    else {
        console.log("World");
        var img = document.querySelector("#image");
        var data = {
            name: name,
            description: longdesc,
            shortDescription: shortdesc,
            image: img.src.split(",")[0]
        };
        console.log(data);
        utils_1.axiosPut(id, data).then(function () {
            window.location.href = "../";
        });
    }
});
