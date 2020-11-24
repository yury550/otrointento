const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middlewares  
router.get('/Usuarios',(req,res)=>{
    mysqlConnection.query('SELECT * FROM Usuario',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

    //actulizar
router.put('/Usuarios/', (req, res) => {
    const { nombre, apellido, fechadenacimiento, correoelectronico, genero, contrasena, perfil } = req.body;
    const { IdUsuario } = req.params;
    mysqlConnection.query(`UPDATE Producto SET IdUsuario=?, nombre=?, apellido=?, fechanacimiento=?, correoelectronico=?, genero=?, contrasena=?, perfil=? WHERE IdUsuario=?`,
        [ nombre, apellido, fechadenacimiento, correoelectronico, genero, contrasena, perfil], (err, rows, fields) => {
            if (!err) {

                res.json({ status: 'Tabla Actualizada' });
            } else {
                console.log(err);
            }
        })//fin
    
    //buscar
router.get('/Usuarios/IdUsuario',(req,res)=>{
    const {IdUsuario} = req.params; //codigo del producto
    mysqlConnection.query('SELECT * FROM Usuario WHERE IdUsuario=?', [IdUsuario],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar
    
    
    });



module.exports =router;