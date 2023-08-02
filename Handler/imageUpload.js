export function imageUpload(req, res) {
    if (!req.files || !req.files.image) {
        return res.status(400).send("No se ha encontrado ninguna imagen");
    }

    const imageName = req.body.imageName;
    const imageExtension = req.body.imageExtension;

    if (!imageName || !imageExtension) {
        return res.status(400).send("Debe ingresar un nombre y una extensión para la imagen")
    }


    res.send(`Imagen subida correctamente con el nombre ${imageName} y la extensión .${imageExtension}`);
};