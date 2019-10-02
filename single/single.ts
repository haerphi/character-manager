import { axiosGet, axiosDelete } from "../utils";

const url_string: string = window.location.href; //récupère l'url de la page sous forme de string
const url: URL = new URL(url_string); //transforme le string en URL
const id: string = url.searchParams.get("id"); //id de character

axiosGet(id).then(rep => {
  console.log(rep);
  const name: HTMLElement = document.querySelector(".name");
  name.textContent = rep.name;

  const img: HTMLImageElement = document.querySelector(
    ".image"
  ) as HTMLImageElement;
  img.src = `data:image/gif;base64,${rep.image}`;

  const shortdesc: HTMLElement = document.querySelector(".short-description");
  shortdesc.textContent = rep.shortDescription;

  const desc: HTMLElement = document.querySelector(".description");
  desc.textContent = rep.description;
});

//BOUTON DELETE
document.querySelector(".deleteBTN").addEventListener("click", () => {
  if (confirm("Voulez-vous vraiment supprimer cette élement ?")) {
    axiosDelete(id).then(() => {
      window.location.href = "../";
    });
  }
});
