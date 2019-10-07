const express = require ('express');
const bodyParser = require ('body-Parser')

const app = express();

const PORT = 3000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/create/endpoint', (req,res)=>{
    const {newEndPoint} = req.body;
    console.log(req.body);
    res.send({message: `Esta nueva end point contendra ${newEndPoint}`})
})

app.post('/new/create', (req,res)=>{                                  
    console.log(req.body);
    res.send({message: `Esta es mi nueva End Point ${createNew}` })
})

app.post('/my/endpoint', (req,res)=>{
    const {myNew} = req.body;
    console.log(req.body);
    res.send({message: `Mi nueva End Point funcionara ${myNew}` })
})

app.post('/my/new', (req,res)=>{
    const {newCreate} = req.body;
    console.log(req.body);
    res.send({message: `Mi nueva End Point funcionara ${newCreate}` })
})

app.listen(PORT,()=>{
    console.log(`Servidor inicializado en el puerto ${PORT}`)
});