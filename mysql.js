//连接数据库
var mysql = require('mysql');
var uuid = require('node-uuid');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'wh',
    password: '123456',
    database:'test'
});
httpServer(connection).listen(8080);
connection.connect();
var newID=uuid.v4();
var userAddSql = 'INSERT INTO node_user(id,name,age) VALUES(?,?,?)';
var userAddSql_Params = [newID,'Wilson', 55];
connection.query(userAddSql,userAddSql_Params,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }       
       console.log('-------INSERT----------');
       //console.log('INSERT ID:',result.insertId);       
       console.log('INSERT ID:',result);       
       console.log('#######################'); 
    });
    connection.end();

