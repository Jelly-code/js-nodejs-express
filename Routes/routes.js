import { Router } from "express";
import { imageUpload } from "../Handler/imageUpload.js";

export function routes(app) {
    const router = Router();

    router.get('/', (req, res) => {
        res.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
          <input type="file" name="image" accept="image/*">
          <label for="imageName">Nombre de la imagen:</label>
          <input type="text" id="imageName" name="imageName" required>
          <label for="imageExtension">Extensión de la imagen:</label>
          <input type="text" id="imageExtension" name="imageExtension" required>
          <input type="submit" value="Subir Imagen">
        </form>
        `);
    });

    router.post("/upload", imageUpload);

    app.use(router);
}