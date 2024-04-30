const express = require ('express');
const app = express();
const PORT= 3000;


//array
let librosBiblicos=[
    {id: 1, nombre: 'Genesis', autor:'Moises'},
    {id: 2, nombre: 'exodo', autor:'isra'},
    {id: 3, nombre: 'levitico', autor:'jhonny'},
]

//maneji jsion
app.use(express.json());
//endpoint
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




app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto  http://localhost:${PORT}`);
});