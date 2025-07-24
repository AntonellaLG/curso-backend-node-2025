import express from 'express';
import cors from 'cors';
const app = express();

//app.use((req, res, next) => { 
//    res.json({ message: 'En mantenimiento' }); Si no uso next, no va a serguir con el resto del código
//});
//Esto se puede usar por ejemplo para verificar que un user esté logueado: si no está, le dejo un msj; si está, uso next para que pueda seguir 

app.use(cors());
app.use(express.json()); //Cuando viene una peticion, pasa por este middleware, este filtro. Al enviar un POST, siempre necesitamos este middleware. Si en el cuerpo de la petición viene info, la transforma y la dispone en el request body. Sin esto, no podemos tener esa info

app.get('/', (req, res) => {
    res.json('API Rest en Node.js')
});

//para que tome, por ej, http://localhost:3000/products y no dé "not found" (ya que eso quedó en products.router.js y no en el index)
//incorporo el módulo aca
import productsRouter from './src/routes/products.router.js'; //SIEMPRE poner el ".js", sino va a dar error
app.use('/api', productsRouter); //le puedo poner un prefijo, por ej: '/api'. Entonces será /api/products


app.use((req, res, next) => { //si escribo mal la ruta, me aparece un error en HTML generado automáticamente por express. Pero una API no debe devolver HTML. Entonces creamos un middleware al final, para que lo ejecute si pasa por todas las rutas y no encuentra nada. En este caso, el next no hace falta porque es lo ultimo que se va a ejecutar y abajo ya no hay nada
    res.status(404).json({error: 'Not Found'}); //Este error lo controla mi middleware
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
