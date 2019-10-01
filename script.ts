import { axiosGet } from "./utils";

function buildCards(table): void {
  console.log(table);
  table.forEach(element => {
    let temp: string = `<div class="card" width="100px" height="100px">
            <img src="data:image/gif;base64,${element.image}" alt="Image vide">
            <div class="card-body">
                <h5 class="card-title text-center name">${element.name}</h5>
                <p class="card-text text-center short-desc">${element.shortDescription}</p>
                <div class="text-center">
                    <a href="#" class="btn btn-primary">Modify</a>
                    <a href="#" class="btn btn-primary">Delete</a>
                </div>
                <input type="hidden" class="charac-id" value="${element.id}" >
            </div>
        </div>`;
    let target: HTMLElement = document.querySelector(".personnalcenter");
    target.innerHTML += temp;
  });
}

axiosGet("").then(rep => {
  buildCards(rep);
});
