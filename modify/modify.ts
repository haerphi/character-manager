import { axiosGet, axiosPut } from "../utils";

const url_string: string = window.location.href; //récupère l'url de la page sous forme de string
const url: URL = new URL(url_string); //transforme le string en URL
const id: string = url.searchParams.get("id"); //id de character

axiosGet(id).then(rep => {
  console.log(rep);
  const name: HTMLInputElement = document.querySelector("#hero-name");
  name.value = rep.name;

  const img: HTMLImageElement = document.querySelector(
    "#image"
  ) as HTMLImageElement;
  img.src = `data:image/gif;base64,${rep.image}`;

  const shortdesc: HTMLInputElement = document.querySelector("#short-desc");
  shortdesc.value = rep.shortDescription;

  const desc: HTMLInputElement = document.querySelector("#long-desc");
  desc.textContent = rep.description;
});

const postBTN: HTMLElement = document.querySelector(".postBTN");

postBTN.addEventListener("click", () => {
  const name: String = (<HTMLInputElement>document.querySelector("#hero-name"))
    .value;
  const shortdesc: String = (<HTMLInputElement>(
    document.querySelector("#short-desc")
  )).value;
  const longdesc: String = (<HTMLInputElement>(
    document.querySelector("#long-desc")
  )).value;
  const image = (<HTMLInputElement>document.querySelector("#image")).files;
  console.log(image);
  if (typeof image != "undefined") {
    console.log("Hello");
    const file = image[0];
    let reader = new FileReader();
    reader.onloadend = function() {
      let split = (<string>reader.result).split(",");
      const data = {
        name: name,
        description: longdesc,
        shortDescription: shortdesc,
        image: split[1]
      };
      console.log(data);
      /* axiosPut(id, data).then(() => {
      window.location.href = "../";
    }); */
    };
    reader.readAsDataURL(file);
  } else {
    console.log("World");
    const img: HTMLImageElement = document.querySelector(
      "#image"
    ) as HTMLImageElement;

    const data = {
      name: name,
      description: longdesc,
      shortDescription: shortdesc,
      image: img.src
    };
    console.log(data);
    /* axiosPut(id, data).then(() => {
    window.location.href = "../"; */
  }
});
