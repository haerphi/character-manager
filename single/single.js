"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var url_string = window.location.href; //récupère l'url de la page sous forme de string
var url = new URL(url_string); //transforme le string en URL
var id = url.searchParams.get("id"); //id de character
utils_1.axiosGet(id).then(function (rep) {
    console.log(rep);
    var name = document.querySelector(".name");
    name.textContent = rep.name;
    var img = document.querySelector(".image");
    img.src = "data:image/gif;base64," + rep.image;
    var shortdesc = document.querySelector(".short-description");
    shortdesc.textContent = rep.shortDescription;
    var desc = document.querySelector(".description");
    desc.textContent = rep.description;
});
//BOUTON DELETE
document.querySelector(".deleteBTN").addEventListener("click", function () {
    if (confirm("Voulez-vous vraiment supprimer cette élement ?")) {
        utils_1.axiosDelete(id).then(function () {
            window.location.href = "../";
        });
    }
});
