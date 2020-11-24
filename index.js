const express=require('express');
const app=express();
//const cliente=require('./routes/Cliente'); // defino todos los middleware de los modulo
const producto=require('./routes/Producto');
//const venta=require('./routes/venta');
//const usuario=require('./routes/Usuarios');

const productos=require('./routes/producto');
// Ajustess 
app.set('port', 3000);//puerto único  //firewall

// middleware
app.use(express.json());
// ajustess
// defino middleware
app.use('/api/producto',producto);
//app.use('/api/Cliente',cliente);
//app.use('/api/venta',venta);
//app.use('/api/Usuarios', usuario);


app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
});



