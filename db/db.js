const mysql = require('mysql');
// párámetros de conexión
const mysqlConnection=mysql.createConnection({
host: 'b700zo2wcfwp8rb2itwu-mysql.services.clever-cloud.com', //bnuhluvomjfkpoulcnxc-mysql.services.clever-cloud.com
user: 'ufirg33w3hs5zsqh', //uzjxnklbt5wcjjze
password: 'XGEWRAThewtiZATKTEz2', //yN0iZPsed0lzErrcxde7
database: 'b700zo2wcfwp8rb2itwu' ,//bnuhluvomjfkpoulcnxc
multipleStatements:true

});
//Establecer la conexión a la bd
mysqlConnection.connect(function(err){
if(err){
    console.log(err);
    return;
}else{
    console.log('Base de datos conectado');
}// fin si
})// fin connect

// al final de las funciones , callbacks, middleware
module.exports =mysqlConnection;




