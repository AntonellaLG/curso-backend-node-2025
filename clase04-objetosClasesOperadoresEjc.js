/*Misión 1:
1. Crea un array con 10 objetos, donde cada objeto represente un automóvil con la
siguiente información: Marca, Modelo, Año, Color
2. Usa un método de array para recorrer la lista e imprime por consola todos los datos
de los automóviles cuyo año sea mayor a 2018.
*/

const automoviles = [
    {
        marca: "Volkswagen",
        modelo: "Polo",
        año: 2021,
        color: "Blanco",
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2019,
        color: "Beige",
    },
    {
        marca: "BMW",
        modelo: "X6",
        año: 2015,
        color: "Negro",
    },
    {
        marca: "Ford",
        modelo: "Fiesta",
        año: 2023,
        color: "Azul",
    },
    {
        marca: "Peugeot",
        modelo: "208",
        año: 2024,
        color: "Gris",
    },
    {
        marca: "Renault",
        modelo: "Clio",
        año: 2022,
        color: "Rojo",
    },
    {
        marca: "Volkswagen",
        modelo: "Vento",
        año: 2025,
        color: "Negro",
    },
    {
        marca: "Toyota",
        modelo: "Hilux",
        año: 2022,
        color: "Negro",
    },
   {
        marca: "Renault",
        modelo: "Kwind",
        año: 2018,
        color: "Naranja",
    },
    {
        marca: "Ford",
        modelo: "Focus",
        año: 2016,
        color: "Gris",
    }
]

const autos_anio_mayor_2018 = automoviles.filter(auto => auto.año > 2018);
autos_anio_mayor_2018.forEach(auto => console.log(auto));

//Otra opcion: 
/*automoviles.forEach((auto) => {
    if (auto.año > 2018){
        console.log(`Marca: ${auto.marca}, año: ${auto.año}`);
        
    }
})*/

/*
Misión 2:
1. Crea una función que recorra el array de automóviles.
2. Usa destructuring dentro de la función para obtener el color de cada automóvil.
3. La función debe aceptar un color como parámetro y devolver por consola cuántos
automóviles tienen ese color.
*/

const cant_autos_color =  (items, colorPedido) => {
    //const {marca, modelo, año, color} = auto; no hace falta usar forEach y filter dentro, uso directamente filter
    //Se usó destructuring directamente en el parámetro de la función de filter: ({ color })
    const filtrados = items.filter(
        ({color}) => color.toLowerCase() == colorPedido.toLowerCase()
    ); 
    console.log(`Hay ${filtrados.length} automoviles de color ${colorPedido.toLowerCase()}.`);
};

cant_autos_color(automoviles, "Negro");


//Otra opción (profe)
const obtenerColor = (items, colorPedido) => {
    //items.forEach((auto) => console.log(auto.color)); queremos solo el color, no toda la info
    let contador = 0;
    items.forEach(({color}) => {
        if(color == colorPedido){
            contador++;
        }
    })
    console.log(`Hay ${contador} automóviles de color ${colorPedido}.`);
    
}

obtenerColor(automoviles, "Azul");