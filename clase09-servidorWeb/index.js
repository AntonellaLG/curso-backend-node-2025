import express from 'express';
const app = express();



app.use(express.static('public')) //genero un archivo estático
//le digo a express que si hay un archivo estatico en public, si alguien lo pide, se lo va a dar de manera estática
//el middleware es "express.static"

app.get('/', (req, res) => { //metodo: get, ruta: /, req y res
    res.send('Hola mundo, desde Express!');
});

app.get('/productos', (req, res) => {
    res.send('Bienvenido a la página de productos');
});


app.get('/productos/14', (req, res) => {
    res.send('Estás viendo el producto n° 14.');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));