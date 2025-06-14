//Misión 1:
//1. Creá un array con 10 números que representen los precios de los productos.

const precios = [124, 32, 68, 790, 50, 436, 751, 239, 807, 110]

//2. Utiliza un método de array para calcular el precio con IVA del 21% incluido para cada valor.
//Quiero los precios más el 21% de IVA, ie 121% (1.00 + 0.21)
const precios_IVA = precios.map((precio) => precio *= 1.21) 

//Misión 2:
/*Usar template literals para mostrar los valores con IVA calculados. Estructurar tu salida de esta forma:
El precio es: ${valor}.- IVA incluido.
Imprimí cada precio ajustado en la consola siguiendo este formato.*/

//Primera forma (con template literals)
precios_IVA.forEach((precio) => console.log(`El precio es: ${precio.toFixed(2)}.- IVA incluido.`)) //toFixed(n) da n decimales


//Segunda forma (con template literals)
//const precios_IVA = precios.map((precio) => Number((precio *= 1.21).toFixed(2)))
//precios_IVA.forEach((precio) => console.log(`El precio es: ${precio}.- IVA incluido.`))


//La primera idea que se me había ocurrido:
/*Lo que hice primero para imprimir, con for... of:
for(let precio of precios_IVA){
    console.log("El precio es: " + precio + ".- IVA incluido.")
}*/
