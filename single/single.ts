const url_string: string = window.location.href; //récupère l'url de la page sous forme de string
const url: URL = new URL(url_string); //transforme le string en URL
const id: string = url.searchParams.get("id"); //id de character

//Requête axios

//afficher le résultat dans la page (dans le then de axios)
