const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middlewares  
router.get('/Productos',(req,res)=>{
    mysqlConnection.query('SELECT * FROM Producto',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

    //actulizar
router.put('/Productos/', (req, res) => {
    const { nombre, nombreproveedor, telefonoproveedor, preciocompra, precioventa } = req.body;
    const { codigo } = req.params;
    mysqlConnection.query(`UPDATE Producto SET codigo=?, nombre=?, nombreproveedor=?, telefonoproveedor=?, preciocompra=?, precioventa=? WHERE codigo=?`,
        [ nombreproveedor, nombre, telefonoproveedor, preciocompra, precioventa, codigo], (err, rows, fields) => {
            if (!err) {

                res.json({ status: 'Tabla Actualizada' });
            } else {
                console.log(err);
            }
        })//fin

        //buscar
router.get('/Productos/codigo',(req,res)=>{
    const {codigo} = req.params; //codigo del producto
    mysqlConnection.query('SELECT * FROM Producto WHERE codigo =?', [codigo],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar

//crear un producto
router.post('/nuevo-producto', (req, res) => {
    const { nombre, nombreproveedor, telefonoproveedor, preciocompra, precioventa } = req.body;
    const { codigo } = req.params;
    let productoArreglo = [nombre, nombreproveedor, telefonoproveedor, preciocompra, precioventa, codigo];// Arreglo json
    //Definir el scrip sql en una variable
    let nuevoProducto = 'INSERT INTO Producto (nombre, nombreproveedor, telefonoproveedor, preciocompra, precioventa, codigo) value(?,?,?,?,?,?)';
    mysqlConnection.query(nuevoProducto, productoArreglo, (err, results, fields) => {
        //Si hay error
        if (!err) {
            //Verdadero
            return console.error(err.message);
        } else {//Si no
            //Falso
            res.json({ message: 'Producto creado' });
        }//Fin Si
    })
})//Fin guardar user

//Elimar un producto((aún indeciso))
router.delete('/borrar-producto',(req,res) =>{
    const{codigo} = req.params;
    mysqlConnection.query('DELETE FROM Producto WHERE codigo=?', [codigo],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
})
});

module.exports =router;