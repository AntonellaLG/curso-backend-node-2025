/*Ejc 1: 
Misión:
1. Utiliza la API pública de Rick and Morty (docs) para obtener la lista de personajes.
2. Con las herramientas then, catch y finally, procesa la respuesta y devuelve por
consola un array con los primeros 5 resultados de los 20 personajes recibidos.
*/

fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => console.log(data.results.slice(0, 5))) //solo quiero los personajes, que están en data.result
                                               // slice extrae la info desde 0 hasta 5 (sin incluir 5)
//Traemos solamente 5 elementos. 
//Traer toda la info, cuesta.
// Si utilizaramos map o filter, igualmente recorrería todo el array

/*Otra forma
fetch("https://rickandmortyapi.com/api/character/[1,2,3,4,5]") //Traigo los primeros 5, así estaba en la documentación de la API
    .then((response) => response.json())
    .then((data) => console.log(data))
*/


/*Misión 2:
1. Realiza el mismo ejercicio anterior, pero esta vez usa una función asíncrona con
async y await para consumir la API.
2. Asegúrate de manejar errores correctamente con un bloque try/catch.
*/

const taskAsync = async() => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/[1,2,3,4,5]");
        const data = await response.result.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

taskAsync();

/*Otra forma
const taskAsync = async() => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();     //el results puede ir aca: await response.results.json();
        const dataFirstFive = data.results.slice(0, 5);     //o el results puede ir aca
        console.log(dataFirstFive);
    } catch (error) {
        console.log(error);
    }
}

taskAsync();
*/