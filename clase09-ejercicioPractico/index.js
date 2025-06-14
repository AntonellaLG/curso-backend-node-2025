//Configura un servidor basico que corra en el puerto 3000 con Express
//Agrega una ruta /ping que responda con un texto plano "/pong" cuando sea visitada desde el navegador
import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
    res.send('/pong');     
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});