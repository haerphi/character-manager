import axios from "axios";

export async function axiosGet(url: string) {
  return await axios
    .get(`https://character-database.becode.xyz/characters/${url}`)
    .then(rep => {
      return rep.data;
    });
}

export async function axiosDelete(id: string) {
  return await axios
    .delete(`https://character-database.becode.xyz/characters/:${id}`)
    .then(rep => {
      return rep.data;
    });
}
