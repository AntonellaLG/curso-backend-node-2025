/*Misión 3: Registro de usuarios
Crea un array vacío llamado usuarios.
Crea una función registrarUsuario(nombre, email) que:

- Cree un objeto con id, nombre, email, fechaRegistro (usa new Date()).
- Agregue el usuario al array.
- Retorne un mensaje como "Usuario registrado: Juan".
- Asegúrate de que el id sea único (puedes usar usuarios.length + 1).
*/

let usuarios = [];

const registrarUsuario = (nombre, email) => {
    const fechaRegistro = new Date();
    const id = usuarios.length + 1;
    const usuario = {id, nombre, email, fechaRegistro};
    usuarios.push(usuario);
    // Sin destructuring
    // console.log(`Usuario registrado: ${usuarios[id-1].nombre}.`);

    //Con destructuring para extraer nombre del objeto que recién agregamos
    const {nombre : nombreRegistrado} = usuario;
    console.log(`Usuario registrado: ${nombreRegistrado}.`);
    
}

//registrarUsuario("Nicolás", "nico@gmail.com");


/*Misión 4: Búsqueda de usuarios
Usa el array usuarios de la misión anterior.

- Crea una función buscarUsuarioPorEmail(email) que devuelva el objeto del usuario 
con ese email, o un mensaje si no existe.
*/

/* Usando forEach()
const buscarUsuarioPorEmail = (emailBuscado) => {
    let encontrado = false;
    usuarios.forEach(user => {
        const {email : emailUser} = user;
        if(emailUser == emailBuscado){
            encontrado = true;
            console.log(user);
        }
    });
    if(!encontrado){
        console.log(`El email ${emailBuscado} no está regitrado.`);
    }
}*/

//Otra forma: usando find()
const buscarUsuarioPorEmail = (emailBuscado) => {
    const usuario = usuarios.find(({email}) => email == emailBuscado);
    if(usuario){
        console.log(usuario); 
    } else {
        console.log(`El email ${emailBuscado} no está regitrado.`);
    }
}

//buscarUsuarioPorEmail("nico@gmail.com")

/*Misión 5: Inventario de productos
- Crea un array con 5 objetos que representen productos: nombre, precio, stock.
- Escribe una función listarProductosDisponibles() que devuelva solo los productos
con stock > 0.
- Agrega una función calcularValorTotalInventario() que devuelva la suma de 
precio * stock de todos los productos.
*/

const productos = [
    {nombre: "Remera", precio: 5000, stock: 4},
    {nombre: "Camisa", precio: 20000, stock: 5},
    {nombre: "Short", precio: 7500, stock: 0},
    {nombre: "Pantalón", precio: 25000, stock: 15},
    {nombre: "Vestido", precio: 10000, stock: 3}
]

const listarProductosDisponibles = () =>{
    let disponibles = productos.filter(({stock}) => stock > 0);
    //disponibles.forEach(prod => console.log(prod));
    disponibles.forEach(({nombre, precio, stock}) => {
        console.log(`${nombre} - $${precio} - ${stock}`);
    });
};

//listarProductosDisponibles();


/*Misión 6: Carrito de compras
- Simula un carrito con un array vacío llamado carrito.
- Crea una función agregarAlCarrito(producto, cantidad) que agregue objetos al 
carrito con nombre, cantidad, precioUnitario.
- Crea otra función totalCarrito() que devuelva el total a pagar.
*/

let carrito = [];

const agregarAlCarrito = (producto, cantidad) => {
    const productoAgregado = productos.find(({nombre}) => nombre == producto);
    if(!productoAgregado){
        console.log(`El producto ${producto} no se encuentra disponible.`);
        return;
    }
    if(productoAgregado.stock < cantidad){
        console.log(`No hay suficiente stock de ${producto}. Stock disponible: ${cantidad}.`);
        return;
    }
    //Agrego el producto al carrito
    const {precio} = productoAgregado;
    carrito.push({producto, cantidad, precioUnitario: precio});
    console.log(`Agregado el producto "${producto}" al carrito (${cantidad} unidad/es).`);
    carrito.forEach(prod => console.log(prod));
}

//agregarAlCarrito("Remera", 1);


/*Misión 7: Autenticación simple
- Crea un array con 3 usuarios que tengan email y contraseña.
- Crea una función login(email, contraseña) que devuelva:
"Acceso concedido" si los datos coinciden.
"Credenciales inválidas" si no.
*/

let usersAutenticacion = [
    {email: "guille@gmail.com", contraseña: "j3j3j3"},
    {email: "nico@gmail.com", contraseña: "l4l4l4"},
    {email:"anto@gmail.com",contraseña: "m0m0m0"}
];

const login = (emailBuscado, contraseñaBuscada) => {
    const userValido = usersAutenticacion.find(({email, contraseña}) => 
        email===emailBuscado && contraseña===contraseñaBuscada);
    if(userValido){
        console.log("Acceso concedido.");
    } else {
        console.log("Credenciales inválidas.");
    }
}

//login("anto@gmail.com", "m0m0m0")


/*Misión 8: Agrupar por categoría
- Crea un array de productos con las propiedades: nombre, precio, categoría.
- Escribe una función agruparPorCategoria(productos) que devuelva un objeto 
agrupando los productos por su categoría.

Ejemplo de salida:
{
    "Electrónica": [ {nombre: "TV", precio: 300} ],
    "Ropa": [ {nombre: "Camisa", precio: 25} ]
}
*/

let prodCategorias = [
    {nombre: "Lavarropas", precio: 500000, categoria: "Electrodoméstico"},
    {nombre: "Heladera", precio: 800000, categoria: "Electrodoméstico"},
    {nombre: "Camisa", precio: 30000, categoria: "Ropa"},
];

const agruparPorCategoria = (productos) => {
    return productos.reduce((grupo, producto) => {
        const { categoria } = producto;
        if (!grupo[categoria]) {
            grupo[categoria] = []; // Si no existe la categoría, la crea
        }
        grupo[categoria].push(producto); // Agrega el producto a esa categoría
        return grupo;
    }, {}); // Objeto inicial vacío
};

const agrupado = agruparPorCategoria(prodCategorias);
//console.log(agrupado);