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
    .delete(`https://character-database.becode.xyz/characters/${id}`)
    .then(rep => {
      return rep.data;
    });
}

export async function axiosPost(data) {
  return await axios.post(
    `https://character-database.becode.xyz/characters`,
    data
  );
}

export async function axiosPut(id: string, data) {
  return await axios.put(
    `https://character-database.becode.xyz/characters/${id}`,
    data
  );
}
