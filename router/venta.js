const express =require('express');// tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middlewares  
router.get('/venta',(req,res)=>{
    mysqlConnection.query('SELECT * FROM Venta',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

module.exports =router;