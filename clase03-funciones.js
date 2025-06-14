//Funcion declarada: el problema es que la puedo pisar, por eso existen las fciones expresadas
// function sumar(num1, num2){
//     const suma = num1 + num2;
//     console.log("La suma es: " + suma);   
// }

// function sumar(num1, num2){
//     const suma = num1 * num2;
//     console.log("La suma es: " + suma);   
// }

//suma(2,6) => 12

//Funcion expresada: con const, porque no deberia cambiar a futuro
//Permite que si la fcion ya existe, no la pueda volver a crear
const sumar = function(num1, num2){
    const res = num1 + num2;
    console.log("La suma es: " + res);   
}

sumar(4,6)

const sumar_return = function(num1, num2){
    const res = num1 + num2;
    return res;   
}

const result = sumar(4,6)
console.log("La suma es: " + result);

//Funcion anonima: fcion sin nonbre. Sin el const sumar de la funcion expresada

//Funcion flecha
//con un solo parametro
const saludar = nombre => "Hola " + nombre; //sin llave tiene un return implicito
const mensaje = saludar("Pepe");
console.log(mensaje);

//con dos parametros
// const sumar_flecha = (num1, num2) => {
//     const res = num1 + num2;
//     return res;
// }

//mas reducida
const sumar_flecha = (num1, num2) => num1 + num2;
console.log(sumar_flecha(40,60))
