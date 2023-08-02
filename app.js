import express from 'express';
import fileUpload from 'express-fileupload';
import { routes } from './Routes/routes.js';

const app = express();
const port = 3000;

app.use(fileUpload({
    limits: { fileSize: 3 * 1024 * 1024 },
}));

//app.use((req, res) => {
//    res.status(404).send("Página no encontrada");
//});

routes(app);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});