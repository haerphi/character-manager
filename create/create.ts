import { axiosPost } from "../utils";

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

  const image = document.querySelector("#image").files[0];
  let reader = new FileReader();
  reader.onloadend = function() {
    let split = reader.result.split(",");
    const data = {
      name: name,
      description: longdesc,
      shortDescription: shortdesc,
      image: split[1]
    };
    axiosPost(data).then(() => {
      window.location.href = "../";
    });
  };
  reader.readAsDataURL(image);
});
