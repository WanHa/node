//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'wh',
    password: '123456',
    database:'test'
});

connection.connect();
//查询
connection.query('select * from test.t2', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
    
    
});
//关闭连接
connection.end();

function guid() {
        function S4() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }