const express = require ('express');
const bodyParser = require ('body-Parser')

const app = express();

const PORT = 3000; //el clasico es 3000

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(request,response)=>{
    response.send( {id: 10, name:'Luis', age:18} )
})

app.get('/pokemod/:id', (req,res)=>{
    const {id} = req.params;
    console.log(req.params);
    res.send({id:id})
})

app.get('/search', (req,res)=>{
    const {gato,vidas,color} = req.query
    console.log(gato,vidas,color)
    res.send({message: `El gato buscado es de color: ${color}, tiene ${vidas} vidas, y se llama ${gato}`})
});

app.post('/create/user', (req,res)=>{
    const {name, password, email, id} = req.body;
    console.log(req.body);
    res.send({message: `Usuario ${name},con id ${id} ha sido creado`,user:{name:name, password:password, email:email, id:id}})
})

app.post('/new/post', (req,res)=>{
    const {post1, post2, post3} = req.body;
    console.log(req.body);
    res.send({message: `post1 ${post1}, con post2 ${post2} y finalmente el post3 ${post3}`})
})

app.post('/create/new', (req,res)=>{
    const {idk, idk2, idk3} = req.body;
    console.log(req.body);
    res.send({message: `No se que ponerle a este end point ${idk}, ${idk2}, ${idk3}`})
})

app.post('/new/endpoint', (req,res)=>{
    const {newEndPoint} = req.body;
    console.log(req.body);
    res.send({message: `Esta nueva end point contendra ${newEndPoint}`})
})

app.listen(PORT,()=>{
    console.log(`Servidor inicializado en el puerto ${PORT}`)
});
//Puerto que abriremos en nuestra compu para el servidor 
//Funcion para ver el end point en el que vamos 
//Funcion en que puerto definimos y ver en que local host 