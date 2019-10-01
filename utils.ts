import axios from "axios";

export async function axiosGet(url: string){
    return await axios
        .get("https://character-database.becode.xyz/characters").then(rep => { return rep.data });
}