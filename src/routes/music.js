const { Router } = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router     = Router();
const _ = require('underscore');

const Cancion = require('../sample.json');
//console.log(Cancion);

router.get('/', (req, res) => {
    res.json(Cancion);  
});

router.post('/', (req, res) => {
    const {id, titulo, autor, interprete, productor, genero, publicacion, duracion, album} = req.body;
    if (id && titulo && autor && interprete && productor && genero && publicacion && duracion && album){
        const id = Cancion.length + 1;
        const nuevaCancion = {...req.body, id};
        console.log(nuevaCancion);
        Cancion.push(nuevaCancion);
        res.json(Cancion);
        
    } else {
        res.send('petición errónea');
    }
    res.send("recibido");
});


router.put('/:id', (req, res) => {
    const {id, titulo, autor, interprete, productor, genero, publicacion, duracion, album} = req.body;
    if (id && titulo && autor && interprete && productor && genero && publicacion && duracion && album){
        _.each(Cancion, (cancion, i) => {
            if(cancion.id == id){
                cancion.titulo = titulo;
                cancion.autor = autor;
                cancion.interprete = interprete;
                cancion.productor = productor;
                cancion.genero = genero;
                cancion.publicacion = publicacion;
                cancion.duracion = duracion;
                cancion.album = album;
            }
        }); 
        res.json(Cancion);
        console.log(Cancion);
    } else {
        res.status(400).json({ msg: `No existe una canción con el id: ${req.params.id}`});
        }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(Cancion, (cancion, i) => {
        if(cancion.id == id){
            Cancion.splice(i, 1);
        }
    });
    res.send(Cancion);
    res.send('borrado');
});

module.exports = router;