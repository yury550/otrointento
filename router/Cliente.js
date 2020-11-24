const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middlewares  
router.get('/Cliente',(req,res)=>{
    mysqlConnection.query('SELECT * FROM Cliente',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

    //actulizar
    router.put('/Cliente/', (req, res) => {
        const { nombre, apellido, FechaDeNacimiento, correoElectronico, DireccionResidencia, TelefonoFijo, TelefonoCelular } = req.body;
        const { cedula } = req.params;
        mysqlConnection.query(`UPDATE Cliente SET cedula=?, nombre=?, apellido=?, FechaDeNacimiento=?, correoElectronico=?, DireccionResidencia=?, TelefonoFijo=?, TelefonoCelular=? WHERE cedula=?`,
            [ cedula, nombre, apellido, FechaDeNacimiento, correoElectronico, DireccionResidencia, TelefonoFijo, TelefonoCelular], (err, rows, fields) => {
                if (!err) {
    
                    res.json({ status: 'Tabla Actualizada' });
                } else {
                    console.log(err);
                }
            })//fin
    
            //buscar
    router.get('/Cliente/cedula',(req,res)=>{
        const {cedula} = req.params; //cedula del cliente
        mysqlConnection.query('SELECT * FROM Cliente WHERE cedula =?', [cedula],(err,rows,fields)=>{
            if(!err){
                res.json(rows[0])
            }else{
                console.log(err);
            }
        })
    }) // fin buscar
    
    //crear un cliente
    router.post('/nuevo-cliente', (req, res) => {
        const { nombre, apellido, FechaDeNacimiento, correoElectronico, DireccionResidencia, TelefonoFijo, TelefonoCelular } = req.body;//1 Captura
        const { cedula } = req.params;
        let clienteArreglo = [nombre, apellido, FechaDeNacimiento, correoElectronico, DireccionResidencia, TelefonoFijo, TelefonoCelular, cedula];// Arreglo json
        //Definir el scrip sql en una variable
        let nuevoCliente = 'INSERT INTO Cliente(nombre, apellido, FechaDeNacimiento, correoElectronico, DireccionResidencia, TelefonoFijo, TelefonoCelular, cedula) value(?,?,?,?,?,?,?,?)';
        mysqlConnection.query(nuevoCliente, clienteArreglo, (err, results, fields) => {
            //Si hay error
            if (!err) {
                //Verdadero
                return console.error(err.message);
            } else {//Si no
                //Falso
                res.json({ message: 'usuario creado' });
            }//Fin Si
        })
    })//Fin guardar user

    //Eliminar un cliente ((aún indeciso))
    router.delete('/borrar-cliente',(req,res) =>{
        const{cedula} = req.params;
        mysqlConnection.query('DELETE FROM Cliente WHERE cedula=?', [cedula],(err,rows,fields)=>{
            if(!err){
                res.json(rows[0])
            }else{
                console.log(err);
            }
        })
    })
    });
module.exports =router;