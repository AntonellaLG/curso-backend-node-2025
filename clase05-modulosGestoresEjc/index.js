import { argv } from "node:process";

/*Misión 1: 
Crea un nuevo proyecto en Node Js mediante el comando npm init -y y
configura un nuevo script dentro del archivo package.json que mediante la
instrucción npm run start ejecute el código de nuestro archivo script.js de forma
automática.

Misión 2:
Implementar un sistema simple para procesar comandos desde la terminal.
1. Si el comando es npm run start GET, imprime por consola el mensaje:
Toma un dato
2. Si el comando es npm run start POST {data}, imprime por consola el
mensaje:
Recibimos {data} satisfactoriamente
3. Si el comando es npm run start PUT {id}, imprime por consola el mensaje:
Modificamos el item con id: {id} satisfactoriamente
4. Si el comando es npm run start DELETE {id}, imprime por consola el
mensaje:
El item con el id: {id} se eliminó con éxito
*/ 

const args = process.argv.slice(2); //con slice(2) ignoramos los primeros 2 parametros

console.log(args);


if (args[0] === 'GET') {
    console.log('Toma un dato');
} else if (args[0] === 'POST' && args[1]) {
    console.log(`Recibimos ${args[1]} satisfactoriamente`);
} else if (args[0] === 'PUT' && args[1]) {
    console.log(`Modificamos el item con id: ${args[1]} satisfactoriamente`);
} else if (args[0] === 'DELETE' && args[1]) {
    console.log(`El item con el id: ${args[1]} se eliminó con éxito`);
} else {
    console.log(`Datos incompletos o erroneos.`);    
}
