//utilizo * para importar una función de services que se llama igual a una que tengo acá en el controlador, sino estaría redeclarando y da error
import * as service from '../services/products.service.js'

//defino una contante y le asigno el callback que corté
export const getAllProducts = (req, res) => { //uso la función getAllProducts con su módulo para evitar el conflicto
    res.json(service.getAllProducts()); //necesito los products, los importo
};

export const searchProduct = (req, res) => { 
    //console.log(req.query);
    //res.json(products);
    const { name } = req.query; //va a filtrar sólo por name si estoy poniendo solo esa categoría

    const products = service.getAllProducts(); //pido los productos a service

    //podría pasar el filtrado a un servicio
    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(filteredProducts);
};

export const getProductById = (req, res) => {
    //console.log(req.params); es un objeto, con un identificador y el valor, en donde el valor es un parametro que viene en formato texto
    const { id } = req.params;

    //en este caso el servicio no nos está sirviendo mucho, estoy pasando un poquito de lógica a otro lado
    const product = service.getProductById(id);
    
    if (!product) {
        res.status(404).json({ error: 'No existe el producto' });
    } else {
        res.json(product);
    }
};

export const createProduct = (req, res) => { //NECESITO USAR UN MIDDLEWARE, EL DE LA LINEA 11 del index.js
    //Voy a definir parametros, que van a venir en el cuerpo de la peticion, no en la URL
    //console.log(req.body); Para leer la info, tengo que pasar por un middleware
    //res.send('POST');
    const products = service.getAllProducts(); //pido los productos al servicio

    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    }

    products.push(newProduct);
    res.status(201).json(newProduct); //retorno el estatus 201 de que algo se acaba de crear, y el producto que acabo de crear
};

export const modifyProductById = (req, res) => {
    const productId = parseInt(req.params.id, 10); //parseInt pasa el identificador de req.params a un entero, en base 10

    const products = service.getAllProducts(); //pido los productos al servicio

    const productIndex = products.findIndex((p) => p.id === productId);

    if ( productIndex === -1 ) {
        return res.status(404).json({error: 'Producto no encontrado'});
    }

    const { name, price } = req.body;

    products[productIndex] = { id: productId, name, price }; //piso el elemento que se encuentra en el indice dado
    res.json(products[productIndex]); //respondo un json solo con el producto que modifiqué
};

export const deleteProductById = (req, res) => {
    const productId = parseInt(req.params.id, 10);

    const products = service.getAllProducts(); //pido los productos al servicio

    const productIndex = products.findIndex((p) => p.id === productId);

    if ( productIndex === -1 ) {
        return res.status(404).json({error: 'Producto no encontrado'});
    }

    products.splice(productIndex, 1); //splice me trae elementos a partir de cierto indice, si le pongo 1 me quita ese elemento del array
    res.status(204).send(); //devuelve un 204, que es "sin contenido". Podría devolverme 200 y el elemento que borró, pero con esto alcanza
};