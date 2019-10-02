import { axiosGet, axiosDelete } from "./utils";

function activeButton(): void {
  const bts: NodeListOf<Element> = document.querySelectorAll(".deleteButton");
  bts.forEach(el => {
    el.addEventListener("click", () => {
      const id: string = (<HTMLInputElement>el).value;
      if (confirm("Voulez-vous vraiment supprimer cette élement ?")) {
        axiosDelete(id).then(() => {
          document.location.reload(true);
        });
      }
    });
  });
}

function buildCards(table): void {
  console.log(table);
  table.forEach(element => {
    let temp: string = `<div class="card" width="100px" height="100px">
            <a href="./single/single.html?id=${element.id}"><img src="data:image/gif;base64,${element.image}" alt="Image vide"></a>
            <div class="card-body">
                <h5 class="card-title text-center name">${element.name}</h5>
                <p class="card-text text-center short-desc">${element.shortDescription}</p>
                <div class="text-center">
                    <a href="#" class="btn btn-primary">Modify</a>
                    <button type="button" value=${element.id} class="btn btn-primary deleteButton">Delete</button>
                </div>
                <input type="hidden" class="charac-id" value="${element.id}" >
            </div>
        </div>`;
    let target: HTMLElement = document.querySelector(".personnalcenter");
    target.innerHTML += temp;
  });
  activeButton();
}

axiosGet("").then(rep => {
  buildCards(rep);
});
