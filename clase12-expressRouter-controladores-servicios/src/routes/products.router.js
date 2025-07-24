import { Router } from 'express';

const router = Router(); //esto maneja sólo el tema de las rutas. Acá reemplazamos app por router. Es lo único que cambia de las rutas

//todo lo que tenga que ver con "/products" lo traigo

//me llevo los productos, ya que no corresponde que esté en las rutas

import { getAllProducts, searchProduct, getProductById, createProduct, modifyProductById, deleteProductById } from '../controllers/products.controller.js';

//tambien podriamos haaberlo usado asi
//import * as productsController from '../controllers/products.controller.js'; le estoy diciendo pasame todas las funciones que tengas acá, y pasalas a productsController que sería un objeto

router.get('/products', getAllProducts); //corto el callback
//siguiendo la linea 12, acá sería
//router.get('/products', productsController.getAllProducts); acá deberia repetir productsController cada vez que llame a una función

//Search debe ir antes de id, porqque sino va a ser capturado como un id y no lo es
router.get('/products/search', searchProduct);

router.get('/products/:id', getProductById);

router.post('/products', createProduct);

router.put('/products/:id', modifyProductById);

router.delete('/products/:id', deleteProductById);


export default router; //le puedo poner otro nombre al importarla en otro lado