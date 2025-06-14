//HOF (Funciones de Orden Superior): fciones que reciben o retornan una fcion

// function calculadora(operacion){
//     return function(num1, num2){
//         if (operacion == "sumar"){
//             console.log("suma", num1 + num2);
//         } else if (operacion == "restar"){
//             console.log("resta", num1 - num2);
//         }
//     }
// }

// const sumar = calculadora("sumar");
// sumar(2,4); //trabaja en la funcion anonima del return de la funcion calculadora

// const restar = calculadora("restar");
// restar(2,4);

//calculadora(3, 6, "sumar")

function sumar(num1, num2) {
    console.log("suma", num1 + num2);
}

function restar(num1, num2) {
    console.log("resta", num1 - num2);
}

function calculadora(num1, num2, operacion) { //esta fcion es el callback, porque la rta depende de la salida de esta fcion
   operacion(num1, num2); 
}

calculadora(3, 6, sumar)
calculadora(3, 6, restar)

//Paso la operacion como callback
calculadora(3, 6, (a, b) => console.log("multiplicar", a*b));