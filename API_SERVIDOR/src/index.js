const express = require('express');
const path = require('path');
const app = express();
const morgan=require('morgan');
const db = require('./database.js')
 
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
//Nuestro primer WS Get
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/index.html')); 
})

app.get('/datos', (req, res) => {
    res.json(db.consultarProductos()); 
})

 
//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});