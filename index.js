const { json } = require('body-parser');
const express = require ('express');
const app = express();
const PORT= 3000;

//#region arreglos
//array
let librosBiblicos=[
    {id: 1, nombre: "genesis", autor: "moises", anioPublic: 2020},
    {id: 2, nombre: "exodo", autor: "isra", anioPublic: 2024},
    {id: 3, nombre: "levitico", autor: "jhonny", anioPublic: 1990},
    {id: 4, nombre: "numeros", autor: "pedro garcía", anioPublic: 1987},
    {id: 5, nombre: "deuteronomio", autor: "ana martínez", anioPublic: 1975},
    {id: 6, nombre: "josue", autor: "david pérez", anioPublic: 1968},
    {id: 7, nombre: "jueces", autor: "laura rodríguez", anioPublic: 1955},
    {id: 8, nombre: "rut", autor: "carlos gonzález", anioPublic: 1947},
    {id: 9, nombre: "samuel", autor: "maría sánchez", anioPublic: 1933},
    {id: 10, nombre: "reinas", autor: "juan fernández", anioPublic: 1921},
    {id: 11, nombre: "juan", autor: "sofía lópez", anioPublic: 1908},
    {id: 12, nombre: "cronicas", autor: "diego torres", anioPublic: 1897},
    {id: 13, nombre: "esdras", autor: "elena ruiz", anioPublic: 1883},
    {id: 14, nombre: "nehemias", autor: "manuel garcía", anioPublic: 1871},
    {id: 15, nombre: "ester", autor: "carmen pérez", anioPublic: 1860},
    {id: 16, nombre: "job", autor: "javier fernández", anioPublic: 1847},
    {id: 17, nombre: "salmos", autor: "patricia martínez", anioPublic: 1835},
    {id: 18, nombre: "proverbios", autor: "roberto rodríguez", anioPublic: 1822},
    {id: 19, nombre: "eclesiastes", autor: "marta sánchez", anioPublic: 1810},
    {id: 20, nombre: "cantares", autor: "alejandro lópez", anioPublic: 1799},
    {id: 21, nombre: "isaías", autor: "raquel gonzález", anioPublic: 1786},
    {id: 22, nombre: "jeremias", autor: "fernando martínez", anioPublic: 1775},
    {id: 23, nombre: "lamentaciones", autor: "silvia pérez", anioPublic: 1761},
    {id: 24, nombre: "ezequiel", autor: "sergio sánchez", anioPublic: 1750},
    {id: 25, nombre: "daniel", autor: "luisa rodríguez", anioPublic: 1738},
    {id: 26, nombre: "oseas", autor: "gonzalo pérez", anioPublic: 1723},
    {id: 27, nombre: "joel", autor: "natalia martínez", anioPublic: 1711},
    {id: 28, nombre: "amos", autor: "andrea sánchez", anioPublic: 1700},
    {id: 29, nombre: "abdias", autor: "juan", anioPublic: 1689},
    {id: 30, nombre: "jonas", autor: "paula garcía", anioPublic: 1676}
]
//#endregion arreglos
//maneji jsion
app.use(express.json());
//endpoint 1 todo los libros
app.get('/libros',(req,resp)=>{
    resp.json(librosBiblicos);
});


//endpoint ontener libro por ID

app.get('/libros/:id',(req, res) => {
    const idCapturado = parseInt(req.params.id);
    console.log(idCapturado);
    const libroEncontrado = librosBiblicos.find((libro) => libro.id === idCapturado);
    if (libroEncontrado) {
        res.json(libroEncontrado);
    } else {
        res.status(404).json({mensaje : `libro no encontrado`});
    }
});

//endpoint 3 agregar un libro
app.post('/agregar-libro',(req, res) => {
    const nuevoLibro =req.body;
    console.log(nuevoLibro);
    librosBiblicos.push(nuevoLibro);
    res.status(201).json(`libro guardado exitosamente ${nuevoLibro}`);
});

//endpoint 4 modificar un libro
app.put('/actualizar-libro/:id',(req,res)=>{
    const idCapturado = parseInt(req.params.id);
    const libroLocalizado = librosBiblicos.findIndex((libro) => libro.id === idCapturado);
   // console.log(libroEncontrado);
    console.log(librosBiblicos);
   
if (libroLocalizado !== -1) {
    librosBiblicos[libroLocalizado]=req.body;
    res.json(librosBiblicos[libroLocalizado]);
}
else{
    res.status(404).json({mensaje : `libro no encontrado`});
}


});
// endpoint 5 Eliminar Libro
app.delete('/eliminar-libro/:id', (req, res) => {
    const id = parseInt(req.params.id);
    lBiblico = librosBiblicos.filter( libro => libro.id !== id);
    res.status(201).json({mensaje : 'se ha eliminado el libro'});
    console.log(lBiblico);
});
//endpoint 6 
app.get('/libros/publicacion/:anio', (req, res) => {
    const year =  parseInt(req.params.anio);
    const librosPublicados = librosBiblicos.filter( x => x.anioPublic === year);
    if (librosPublicados.length > 0) {
        res.json(librosPublicados);
    } else {
        res.status(404).json({mensaje : 'no se han encontrado libros publicados en ese anio'});
    }
});


app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto  http://localhost:${PORT}`);
});


// *endpoint 7  bienvenida con su nombre y su profesion actual

app.get('',(req, res) => {
    res.json({
        mensaje : 'Bienvenido',
        estudiante1 : 'Arista Huanca Josue Israel',
        Profesion:'Tecnico de Celulares',
        estudiante2:'Zaida Galarza Chauca',
        profesion: 'pendiente'
    });
});

// *endpoint 8  Obtener libros por Autor
//endpoint 6 
app.get('/libros/autor/:autor', (req, res) => {
    const autor =  req.params.autor;
    const librosPublicados = librosBiblicos.filter( x => x.autor === autor);
    if (librosPublicados.length > 0) {
        res.json(librosPublicados);
    } else {
        res.status(404).json({mensaje : 'no se han encontrado libros publicados por ese autor'});
    }
});

//* endpoint 9 obtener  la cantidad de libros

app.get('/libros/contados/total',(req, res) => {
    
    let contar= librosBiblicos.length;
    console.log(contar);
   if (contar) {
        res.json({
            mensaje: 'Cantidad de libros',
            total : contar
        });
    } else {
        res.status(404).json({mensaje : `no se cuenta con libros registrados`});
    }
});
// *endpoint 10  Obtener libros que contenga el texto juan
//endpoint 6 
app.get('/libros/texto/:text', (req, res) => {
    const buscar =  req.params.text;
//const TextoEncontrado = librosBiblicos.filter( x => x.nombre === buscar || x.autor ===buscar );
const TextoEncontrado = librosBiblicos.filter(libro => {
    return libro.nombre.includes(buscar) || libro.autor.includes(buscar);
});
if (TextoEncontrado.length > 0) {
        res.json(TextoEncontrado);
    } else {
        res.status(404).json({mensaje : 'no se han encontrado libros publicados por ese autor'});
    }
});

