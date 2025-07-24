import express from 'express';
import cors from 'cors';
const app = express();

const products = [
    { id: 1, nombre: "Camiseta Deportiva", precio: 150 },
    { id: 2, nombre: "Zapatos Running", precio: 1200 },
    { id: 3, nombre: "Mochila Escolar", precio: 350 },
    { id: 4, nombre: "Auriculares Bluetooth", precio: 800 },
    { id: 5, nombre: "Botella Térmica", precio: 220 },
];

//app.use((req, res, next) => { 
//    res.json({ message: 'En mantenimiento' }); Si no uso next, no va a serguir con el resto del código
//});
//Esto se puede usar por ejemplo para verificar que un user esté logueado: si no está, le dejo un msj; si está, uso next para que pueda seguir 

app.use(cors());
app.use(express.json()); //Cuando viene una peticion, pasa por este middleware, este filtro. Al enviar un POST, siempre necesitamos este middleware. Si en el cuerpo de la petición viene info, la transforma y la dispone en el request body. Sin esto, no podemos tener esa info

app.get('/', (req, res) => {
    res.json('API Rest en Node.js')
});

app.get('/products', (req, res) => {
    res.json(products);
});

//Search debe ir antes de id, porqque sino va a ser capturado como un id y no lo es
app.get('/products/search', (req, res) => { 
    //console.log(req.query);
    //res.json(products);
    const { nombre } = req.query; //va a filtrar sólo por nombre si estoy poniendo solo esa categoría

    const filteredProducts = products.filter((p) =>
        p.nombre.toLowerCase().includes(nombre.toLowerCase())
    );

    res.json(filteredProducts);
});

app.get('/products/:id', (req, res) => {
    //console.log(req.params); es un objeto, con un identificador y el valor, en donde el valor es un parametro que viene en formato texto
    const { id } = req.params;
    const product = products.find((item) => item.id == id);
    if (!product) {
        res.status(404).json({ error: 'No existe el producto' });
    } else {
        res.json(product);
    }
});

app.post('/products', (req, res) => { //NECESITO USAR UN MIDDLEWARE, EL DE LA LINEA 19
    //Voy a definir parametros, que van a venir en el cuerpo de la peticion, no en la URL
    //console.log(req.body); Para leer la info, tengo que pasar por un middleware
    //res.send('POST');
    const { nombre, precio } = req.body;
    const newProduct = {
        id: products.length + 1,
        nombre,
        precio
    }

    products.push(newProduct);
    res.status(201).json(newProduct); //retorno el estatus 201 de que algo se acaba de crear, y el producto que acabo de crear
});

app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10); //parseInt pasa el identificador de req.params a un entero, en base 10
    const productIndex = products.findIndex((p) => p.id === productId);

    if ( productIndex === -1 ) {
        return res.status(404).json({error: 'Producto no encontrado'});
    }

    const { nombre, precio } = req.body;

    products[productIndex] = { id: productId, nombre, precio }; //piso el elemento que se encuentra en el indice dado
    res.json(products[productIndex]); //respondo un json solo con el producto que modifiqué
});

app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productIndex = products.findIndex((p) => p.id === productId);

    if ( productIndex === -1 ) {
        return res.status(404).json({error: 'Producto no encontrado'});
    }

    products.splice(productIndex, 1); //splice me trae elementos a partir de cierto indice, si le pongo 1 me quita ese elemento del array
    res.status(204).send(); //devuelve un 204, que es "sin contenido". Podría devolverme 200 y el elemento que borró, pero con esto alcanza
});

app.use((req, res, next) => { //si escribo mal la ruta, me aparece un error en HTML generado automáticamente por express. Pero una API no debe devolver HTML. Entonces creamos un middleware al final, para que lo ejecute si pasa por todas las rutas y no encuentra nada. En este caso, el next no hace falta porque es lo ultimo que se va a ejecutar y abajo ya no hay nada
    res.status(404).json({error: 'Not Found'}); //Este error lo controla mi middleware
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

