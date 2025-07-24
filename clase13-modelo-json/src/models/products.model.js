import fs from 'fs';
import path from 'path';

const __dirname = import.meta.dirname; //nos da la direccion exacta de donde está ubicado el archivo products.model.js

//Para leer el archivo necesitamos la ubicación y el nombre, para eso creamos
const jsonPath = path.join(__dirname, './products.json');

//Leemos el archivo
const json = fs.readFileSync(jsonPath, 'utf-8'); //con utf-8 transformamos el dato en un json, en un texto, sino queda como buffer

const products = JSON.parse(json);
//Todo esto es para lograr tener nuestra info

//console.log(products);

export const getAllProducts = () => {
    return products;
}

export const getProductById = (id) => {
    return products.find((item) => item.id == id);
};

export const createProduct = (data) => {
    const newProduct = {
        id: products.length + 1,
        ...data, //usamos express operator, expandimos el objeto que viene en data (que tiene name y price)
    }

    products.push(newProduct);
    //despues de hacerle push, tengo que guardarlo. Escribimos un archivo. LO GUARDA
    fs.writeFileSync(jsonPath, JSON.stringify(products)); //le agregamos el product, pero así como está es un objeto en JS, lo pasamos a JSON. LO PERSISTE

    return newProduct;
};

export const deleteProductById = (id) => {
    const productIndex = products.findIndex((p) => p.id === id);

    //EL MODELO NO RESPONDE, ESO LO HACE EL CONTROLADOR

    if (productIndex == -1) {
        return null; //el MODEL puede devolver un null, un false, un undefine, pero el que se encarga de hablar con el cliente es el CONTROLADOR
    } else {
        const product = products.splice(productIndex, 1); //splice me trae elementos a partir de cierto indice, si le pongo 1 me quita ese elemento del array

        fs.writeFileSync(jsonPath, JSON.stringify(products)); //guardo el array de productos que se modificó

        return product;
    }
};